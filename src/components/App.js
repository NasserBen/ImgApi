import React from 'react'
import './App.css'
import Navigation from '../components/Navigation/Navigation'
import FaceRecognition from '../components/FaceRecognition/FaceRecognition'
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm'
import Ranking from '../components/Ranking/Ranking'
import SignIn from '../components/SignIn/SignIn'
import Register from '../components/Register/Register'
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'
import Logo from './Logo/Logo'

const app = new Clarifai.App({
  apiKey: '86f85cd69c8d43c39fb6299938209125'
})

const particleOptions = {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 2000
      }
    }
  }
}
const intialState = {
  input: '',
  imgUrl: '',
  validUrl: true,
  boxes: [],
  route: 'signIn'
}

class App extends React.Component {
  constructor () {
    super()

    this.state = intialState
  }

  calculateFaceLocation = data => {
    const temp = data.outputs[0].data
    const img = document.getElementById('inputImg')
    const width = Number(img.width)
    const height = Number(img.height)

    const objArr = temp.regions.map(obj => {
      const box = obj.region_info.bounding_box

      const boxDimensions = {
        leftCol: box.left_col * width,
        topRow: box.top_row * height,
        rightCol: width - box.right_col * width,
        bottomRow: height - box.bottom_row * height
      }

      return boxDimensions
    })

    return objArr
  }

  displayFaceBox = boxes => {
    this.setState({ boxes: boxes })
  }
  onInputChange = event => {
    this.setState({ input: event.target.value })
  }

  onSubmit = event => {
    this.setState({ imgUrl: this.state.input })

    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => {
        if (this.state.validUrl) {
          this.displayFaceBox(this.calculateFaceLocation(response))
        } else {
          this.setState({ validUrl: true })
        }
      })
      .catch(err => {
        console.log(err)
        this.setState({ validUrl: false })
      })
  }

  onRouteChange = route => {
    this.setState({ route: route })
  }

  render () {
    return (
      <div className='App'>
        <Particles className='particles' params={particleOptions} />
        {this.state.route === 'home' ? (
          <div>
            <Navigation onRouteChange={this.onRouteChange} />
            <Ranking />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onSubmit={this.onSubmit}
              validUrl={this.state.validUrl}
            />
            <FaceRecognition
              imgUrl={this.state.imgUrl}
              boxes={this.state.boxes}
              validUrl={this.state.validUrl}
            />
          </div>
        ) : this.state.route === 'signIn' ? (
          <div>
            <Logo />
            <SignIn onRouteChange={this.onRouteChange} />
          </div>
        ) : (
          <div>
            <Logo />
            <Register onRouteChange={this.onRouteChange} />
          </div>
        )}
      </div>
    )
  }
}

export default App
