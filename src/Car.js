import React, { useState } from 'react'

function TextForm(props) {
  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClearText = () => {
    let newText = "";
    setText(newText);
  }

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const handleCopyToClipboard = () => {
    var myText = document.getElementById("boxText"); 
    myText.select();
    navigator.clipboard.writeText(myText.value);
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const toggleText = () => {
    var myText = document.getElementById("boxText");
    if (myText.value === "Hello") {
      myText.value = "Swapped text!";
    } else {
      myText.value = "Hello";
    }
  }

  const [text, setText] = useState(""); 

  return (
    <>
    <div className="container" style = {{color: props.mode === 'dark' ? 'white' : '#ae6043'}}>
      <h2>{props.heading}</h2>
      <div className="form-floating">
        <textarea
          className="form-control"
          value = {text} 
          onChange = {handleOnChange}
          style = {{backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : '#ae6043'}}
          id = "boxText"
          rows = "8"
        ></textarea>
      </div>

      <div className="btn-group my-3">
        <button type="button" onClick = {handleUpperCase} className="btn btn-primary mx-2">
          Convert to Uppercase
        </button>
        <button type="button" onClick = {handleLowerCase} className="btn btn-secondary mx-2">
          Change to Lowercase 
        </button>
        <button type="button" onClick = {handleClearText} className="btn btn-danger mx-2">
          Clear Text
        </button>
        <button type="button" onClick = {handleCopyToClipboard} className="btn btn-success mx-2">
          Copy Text
        </button>
        <button type="button" onClick = {handleExtraSpace} className="btn btn-warning mx-2">
          Remove Extra Spaces 
        </button>
        <button type="button" onClick = {toggleText} className="btn btn-info mx-2">
          Toggle Text 
        </button>
      </div>
    </div>

    <div className = "container" style = {{color: props.mode === 'dark' ? 'white' : '#ae6043'}}>

      <h3>Your Filter Text Summery Here...</h3>
      <p>{text.split(" ").length} words and {text.length} Character.</p>
      <p>{0.008 * text.split(" ").length} Minutes to read the given text.</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Enter a text in text box to preview."}</p>

    </div>

    </>

  );

}

export default TextForm;


