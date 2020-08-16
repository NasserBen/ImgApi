import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onSubmit, validUrl }) => {
  
  return (
    <div className='input-container'>
      <div>
        <h1>This AI will detect any faces in your image.</h1>
        <h1>Try it out!</h1>
      </div>
      <div className='inputContainer'>
        <input
          onChange={onInputChange}
          type='text'
          placeholder='Enter link to image...'
          className='linkInput'
          style={validUrl? {} : {border: "2px solid red"}}
        ></input>
        <button onClick={onSubmit} className='linkBtn'>
          Detect Faces!
        </button>
      </div>
    </div>
  )
}

export default ImageLinkForm
