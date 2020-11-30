import React from 'react'
import logo from './netflix.png'
import './Style/style.css'
import hamberger from './hamburger.png'

function Nav() {
    return (
        <div className="nav">
            <img src={logo}
                alt="netflex logo" 
                className="nav_logo"/>
            <img src={hamberger}
                alt="netflex logo" 
                className="menu_logo"/>
        </div>
    )
}

export default Nav
