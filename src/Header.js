import React from 'react'


const Navbar = (props) => {
  return ( <div className = "container"> 
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">TextUtils</a>
    
    <div className="navbar" id="navbarSupportedContent">
      <div className={`form-check form-switch text-${props.mode=== 'light'? 'dark' : 'light'}`}>
      <input type="checkbox" onClick = {props.toggleMode} className="form-check-input" id="customSwitch1" />
      <label className="form-check-label" htmlFor="customSwitch1">Change Theme</label>
    </div>
    </div>
  </div>
</nav>

</div>
  )
}

export default Navbar;