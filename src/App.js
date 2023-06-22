import React , { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar'; 
import TextForm from './components/TextForm'; 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


//npx create-react-app demo-app
//npm start 
//npm install react-router-dom
//npm install react-scripts

function App(){

  const [mode, setMode] = useState('light');

  // ---------alert-------
  const [ alert ,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout( ()=>{
      setAlert(null);
    },1500);
  }

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')

  }
  const addbg = (cls) =>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
  }
  const toggleMode = (cls)=>{
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls);
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is Enabled","success");
      // document.title ="Cold Sweat : Utils Dark"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is Enabled","success");
      // document.title ="Cold Sweat : Utils Light"
    }
  }
  return(
    <>
    <Router>

      <Navbar hm="Home" t="Cold Sweat" Search="Alaska" pl="Looking For" mode={mode} addbg={addbg} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      {/* <Navbar/> */}
    <div className="container my-3">
      <Routes>
        <Route path='/' element={< TextForm heading="Try TextUtils - Word Counter , CharacteSpacesr Counter , Remove Extra "  mode={mode} showAlert={showAlert}/>}/>
             {/* < TextForm heading="Enter a text to analyze below" mode={mode} showAlert={showAlert}/> */}
        <Route path='/about' element={<About  mode={mode} />} />
             {/* <About/> */}

      </Routes>
    </div>
    </Router>
    </>

  );
  }

export default App;

