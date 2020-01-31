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
                    Vanessa Mauna
                </div>
                <div className="topNav">
                    <Link id='link' offset={-70} duration={500} spy={true} to="/#welcome">Home</Link> •&nbsp;
                    <Link id='link' smooth={true} to='/#who-am-i' activeClassName="max-screen">Who Am I?</Link> •&nbsp;
                    <NavLink id='link' smooth={true} to="/#reachMe" activeClassName="max-screen">Reach Out</NavLink> •&nbsp;
                    <NavLink id='link' smooth={true} to="/#portfolio" activeClassName="max-screen">Portfolio</NavLink> •&nbsp;
                    
                    
                </div>


                <div className = "dropNav">
                    <i className="fa fa-align-justify" id="dropbtn"></i>
                    <div className="dropdown-content">
                        <NavLink smooth to="/home/#portfolio" activeClassName="min-screen" className="min-screen">Portfolio</NavLink> 
                        <NavLink smooth to="/home/#reachMe" activeClassName="min-screen" className="min-screen">Contact</NavLink> 
                        <Link to='/about' className="min-screen">About</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;