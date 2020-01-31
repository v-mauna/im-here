import React from 'react'
import './styles/welcome.css'
import ReachMe from './reachMe'
import WhoAmI from './whoAmI'
import Portfolio from './portfolio'

const greeting = () => {
    let today = new Date()
    let time = today.getHours()
    if(time > 5 && time < 12){
        return `hi and good morning.`
    }else if(time >=12 && time < 18){
        return 'hi and good afternoon.'
    }
    return 'hi and good evening.'
    }

const Welcome = () => {
    return (
        <div>
            <div id = "welcome-page">
                <div id = "welcome-page-container">
                    <div className="welcomeHeader">
                        <div className = "top" id='welcome'>
                            <ul>
                            <div className ="typeWrite">{greeting()}</div>
                            <p className ='welcome'>welcome. </p>
                            </ul>
                        </div>
                        <div className = "bottom">
                            <ul/>
                        </div>
                    </div>
                </div>
                <div>
                <WhoAmI/>
                </div>
                <div>
               <Portfolio/>
                </div>
                <div>
                <ReachMe/>
                </div>
            </div>
            
        </div>
    );
};

export default Welcome;