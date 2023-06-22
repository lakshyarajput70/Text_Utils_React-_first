import React , {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    // console.log("Uperrcase Clicked");
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to Uppercase","success");
  }

  const handleLowClick = ()=>{
    // console.log("Lowcase Clicked");
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase","success");
  }

  const handleOnChange = (event)=>{//onchange is necessary to implement otherwise we can't enter the text in the text box
    // console.log("HAndle On ChangE");
    setText(event.target.value);
  }
  const clearfun = ()=>{
    let newText = '';
    setText(newText);
  }

  const speechfun = ()=>{
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    }

    const copytext = () =>{
      // var text = document.getElementById('myBox');
      // text.select();
      navigator.clipboard.writeText(text);
      // document.getSelection().removeAllRanges();
      props.showAlert("Text Copied","success");
    }

    const extraspaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed","success");
    }
  

  

  // const [text,setText]=useState("Enter text here.. i am using usestate here");
  const [text,setText]=useState("");
  return (
   <div>
      <div className="container" style={ {color:props.mode==='dark'? 'white' : 'black'} }>
      <h1 className='mb-3'>{props.heading}</h1>
      <div className="mb-3">
        <textarea className='form-control' onChange={handleOnChange} value={text} 
       style={{backgroundColor:props.mode==='dark'? '#13466e' : 'white', color:props.mode==='dark'? 'white' : 'black' } } id='myBox' rows={9}></textarea> 
      </div>
      <button disabled={text.length===0} className="btn btn-info mx-3 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button disabled={text.length===0} className="btn btn-danger mx-3 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
      <button disabled={text.length===0} className="btn btn-outline-warning my-1 mx-3" onClick={clearfun}>Clear All</button>
      <button disabled={text.length===0} type='submit' className="btn btn-outline-danger my-1 mx-3" onClick={speechfun} id="toggle">Speak</button>
      <button disabled={text.length===0} type='submit' className="btn btn-warning mx-3 my-1" onClick={copytext} >Copy Text</button>
      <button disabled={text.length===0} type='submit' className="btn btn-success mx-3 my-1" onClick={extraspaces} >Remove Extra Spaces</button>

      </div>
      <div className="container my-4 mx-3" style={ {color:props.mode==='dark'? 'white' : 'black'} }>
        <h1 >Your Text Summary</h1>
        <p > {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words , {text.length} characters</p>
        <p > {text.split(/\s+/).filter((element)=>{return element.length!=0}).length   * 0.008 } minutes will take to read entire paragraph </p>
        <h2 >Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
      </div>
   </div>

    );
}