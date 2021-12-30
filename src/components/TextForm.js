import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
       // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleOnChange = (event)=>{
       // console.log("On Change");
        setText(event.target.value)
    }
    const handleLoClick = ()=>{
       // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleClearClick = ()=>{
        
         let newText = ""
         setText(newText)
    }     
    const handleCopy=()=>{
         var text = document.getElementById("myBox");
         text.select();
         
         navigator.clipboard.writeText(text.value);
    }
    const handleExtraspaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const [text,setText] = useState('');
    return (
        <>
        <div className="container" style={{color:props.mode==='dark' ? 'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div class="mb-3">
                
                <textarea className="form-control" id="myBox" value= {text} style={{backgroundColor: props.mode==='dark' ? 'grey':'white',color:props.mode==='dark' ? 'white':'#042743'}} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase case</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraspaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark' ? 'white':'#042743'}}>
           <h1>Your text summary</h1>
           <p>{text.split("").length} and {text.length} characters</p>
           <p>{0.008 * text.split("").length} Minutes read </p>
           <h2>Preview</h2>
           <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </> 
    )
}
