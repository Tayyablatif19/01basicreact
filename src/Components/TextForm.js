
import React, { useState } from 'react'

export default function TextForm(props) {

    // useState is a hook that allows you to add state to functional components.
    // Here, we are creating a state variable 'text' and a function 'setText' to update it.
    // The initial value of 'text' is an empty string.

const [text, setText] = useState('');

  const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
  };

   const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
  };

   const clearClick = () => {
        let newText = '';
        setText(newText);
  };
  

  const handleOnChange = (event) => {
    setText(event.target.value);
  };


  return (

    <>
    <div className='container'>
      <h2>{props.heading}</h2>
      <div className="mybox" >
        <textarea
          className="form-control my-3" id="mybox" rows="8" value={text} onChange={handleOnChange} placeholder='Enter your text here...'
          ></textarea>
      </div>
      <button className="btn btn-primary mx2" onClick={handleUpClick}>Convert to Uppercase</button>
       <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={clearClick}>Clear Text</button>
    </div>

    <div className="conatiner">
        <h2>Your Text Summary</h2>
        <p id='p1'>Number of words: {text.split(" ").length} and Total Characters: {text.length}</p>
        
        <h3>Preview</h3>
        {text}

    </div>







          </>
  );
}