import React ,  {useState} from 'react'
 

export default function TextForm(props) {
   
  const handleUpClick = () =>{
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = () =>{
    // console.log("lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnChange =(event)=>{
    // console.log("on change");
    setText(event.target.value); 
  }

  const [text, setText] = useState('');
  // setText("new text");
  return (
    <>
    <div className="container" > 
        <h2>{props.heading} </h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button onClick={handleUpClick} className="btn btn-primary mx-2">convert to uppercase </button>
        <button onClick={handleLoClick} className="btn btn-primary mx-2">convert to lowercase </button>
    </div>
    <div className="container my-3">
      <h1>your text summary</h1>
      <p>{text.split(" ").length} words , {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes to read</p>
      <h2>preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
 