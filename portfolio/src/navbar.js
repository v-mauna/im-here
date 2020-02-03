import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './styles/navbar.css'

const Navbar = () => {
    return (
        <div id = "header">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

            <div className="navBar" id = "myHeader">
                <div id="leftName">
                    <Link to="/portfolio/#home">
                    Vanessa Mauna
                    </Link>
                </div>
                <div className="topNav">
                    <NavLink id='link' offset={-70} duration={500} spy={true} to="/portfolio/#home">Home</NavLink> •&nbsp;
                    <NavLink id='link' smooth={true} to='/portfolio/#whoAmI' activeClassName="max-screen">Who Am I?</NavLink> •&nbsp;
                    <NavLink id='link' smooth={true} to="/portfolio/#portfolio" activeClassName="max-screen">Portfolio</NavLink> •&nbsp;
                    <NavLink id='link' smooth={true} to="/portfolio/#reachMe" activeClassName="max-screen">Reach Out</NavLink> •&nbsp;
                    
                    
                    
                </div>


                <div className = "dropNav">
                    <i className="fa fa-align-justify" id="dropbtn"></i>
                    <div className="dropdown-content">
                        <NavLink smooth to="/portfolio/#portfolio" activeClassName="min-screen" className="min-screen">Portfolio</NavLink> 
                        <NavLink smooth to="/portfolio/#reachMe" activeClassName="min-screen" className="min-screen">Contact</NavLink> 
                        <NavLink smooth to="/portfolio/#whoAmI" activeClassName="min-screen" className="min-screen">About</NavLink>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;