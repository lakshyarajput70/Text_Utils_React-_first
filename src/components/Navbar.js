import React , {useState} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    // const [darktoggle,setdarktoggle] = useState("Enable Dark Mode");

    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
       <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.t}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{props.hm}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
       
      </ul>

      
      {/* <div className='d-flex'>
      <div className="bg-primary rounded mx-2" style={{height:'30px' , width:'30px'}} onClick={()=>{props.toggleMode('primary')}}></div>
      <div className="bg-warning rounded mx-2" style={{height:'30px' , width:'30px'}} onClick={()=>{props.toggleMode('warning')}}></div>
      <div className="bg-success rounded mx-2" style={{height:'30px' , width:'30px'}} onClick={()=>{props.toggleMode('success')}}></div>
      <div className="bg-danger rounded mx-2" style={{height:'30px' , width:'30px'}} onClick={()=>{props.toggleMode('danger')}}></div>
      <div className="bg-dark rounded mx-2" style={{height:'30px' , width:'30px'}} onClick={()=>{props.toggleMode('dark')}}></div>
      <div className="bg-light rounded mx-2" style={{height:'30px' , width:'30px'}} onClick={()=>{props.toggleMode('light')}}></div>

      </div> */}

      <div className='d-flex'>
      <div className="bg-primary rounded mx-2" style={{height:'30px' , width:'30px'}} onClick={()=>{props.addbg('primary')}}></div>
      <div className="bg-warning rounded mx-2" style={{height:'30px' , width:'30px'}} onClick={()=>{props.addbg('warning')}}></div>
      <div className="bg-success rounded mx-2" style={{height:'30px' , width:'30px'}} onClick={()=>{props.addbg('success')}}></div>
      <div className="bg-danger rounded mx-2" style={{height:'30px' , width:'30px'}} onClick={()=>{props.addbg('danger')}}></div>
      </div>

      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder={props.pl} aria-label="Search"/>
        <button className="btn btn-success" type="submit">{props.Search}</button>
      </form> */}

         <div className={`form-check form-switch text-${props.mode==='dark'? 'light' : 'dark' }`}>
         <input className="form-check-input" type="checkbox" onClick={()=>{props.toggleMode(null)}} role="switch" id="flexSwitchCheckDefault"/>
         <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode==='dark'?'Light':'Dark'} Mode`}</label>
        </div>

             

    </div>
  </div>
</nav>
    </>
  )
}

Navbar.propTypes = {
    t:PropTypes.string.isRequired,  
    pl:PropTypes.string,
    Search:PropTypes.string,
    hm:PropTypes.string
}

// Navbar.defaultProps = {
//     t:"McCandless",
//     pl:"Banjara",
//     Search:"Soul",
//     hm:"NoHome"
// }