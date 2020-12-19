import React from 'react'
import {useEffect , useState} from 'react'
import logo from './netflix.png'
import './Style/style.css'
import hamberger from './hamburger.png'

function Nav() {
    const [show , handleShow] = useState(false);


    useEffect(()=>{
        
        window.addEventListener("scroll",()=>{
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return ()=>{
            window.removeEventListener("scroll");
        };
    },[]);


    return (
        <div className={`nav ${show && "navBlack"}`}>
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


