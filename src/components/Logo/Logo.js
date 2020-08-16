import React from 'react'
import "./Logo.css"
import Tilt from 'react-tilt'
import Brain from './brain.png'
 

class Logo extends React.Component {

    render() {

        return (
            <div className="logo"><Tilt className="Tilt" options={{ max : 60 }} style={{ height: 125, width: 125 }} >
            <div className="Tilt-inner"><img src={Brain} alt="Brain-Img"></img></div>
           </Tilt>
           </div>

        );
    }
}

export default Logo;
