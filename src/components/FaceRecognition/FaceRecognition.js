import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({ imgUrl, boxes, validUrl }) => {
  return (
    <div className='img-container'>
      {(validUrl && imgUrl) && (
        <div>
          <img id='inputImg' alt='user input' src={imgUrl} />

          {boxes.map((box, i) => {
            const boxOutline = {
              top: box.topRow,
              bottom: box.bottomRow,
              left: box.leftCol,
              right: box.rightCol
            }

            return <div key={i} className='box' style={boxOutline}></div>
          })}
        </div>
      )}
    </div>
  )
}

export default FaceRecognition
