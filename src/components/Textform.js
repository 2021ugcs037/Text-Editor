import React from 'react'
import {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText)
  }
  const handleRevClick = ()=>{
    let newText = text.split('').reverse().join('');
    setText(newText)
  }
  const handleDownClick = ()=>{
    const blob = new Blob([text],{type:'text/plain'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mytext.txt';
    a.click();
  }
  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpace = ()=>{
    let newText = text.trim().replace(/\s+/g,' ');
    setText(newText)
  }
  const handleOnChange=(event)=>{
    // console.log("on change")
    setText(event.target.value)
  }
const [text, setText] = useState('')
// text="new text"; wrong way to set a text
// setText("new text"); //correct way to set a text
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to loweercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleRevClick}>Reverse the text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Download text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove extra space</button>

    </div>
    <div className="container my-3">
      <h3>your text summary :</h3>
      <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h3>preview</h3>
      <p>{text}</p>
    </div>

    </>
  )
}
