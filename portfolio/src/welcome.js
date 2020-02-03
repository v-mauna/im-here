import React from 'react';
import Portfolio from './portfolio';
import ReachMe from './reachMe';
import './styles/welcome.css'
import WhoAmI from './whoAmI';

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
            <div id = "home">
                <div id = "welcome-page-container">
                    <div className="welcomeHeader">
                        <div className = "top">
                            <ul>
                            <div className ="typeWrite">{greeting()}</div>
                            <p className='welcome'> Welcome</p>
                            </ul>
                        </div>
                        <div className = "bottom">
                            <ul>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <WhoAmI/>
            <Portfolio />
            <ReachMe/>
        </div>
    );
};

export default Welcome;

