import React from 'react'
import './styles/whoAmI.css'
import selfie from './images/IMG_2589.jpeg'


const WhoAmI = () => {
    return (
        <div>
            <div id="about">
                <div className="picture">
                    <img id='selfie' src={selfie} alt='' width='80%'></img>
                </div>
                <div className='introText' id='who-am-i'>
                    <h2>Hi again.</h2>
                    <h2> Pleasure to meet you. </h2>
                    I'm Vanessa, a full stack software engineer born and based in New York City. 
                    <p/>
                    Up until the summer of 2019, I spent my time <span>(time > a decade)</span> working in restaurants, 
                    crafting great guest experiences and great teams. I had a love of being around people,
                    working with my team to get through the controlled chaos that is service. Watching the evolution of people as they learned the <span>dance </span>
                    of having to run around with grace and a touch of stealth. Being able to jump into different roles: <span>server, host, bartender, dishwasher. </span>
                    Learning how to do things a little bit faster and a little bit cleaner each day.
                    <p>
                    I knew I wanted all this but in a <span>different</span> setting.
                    </p>
                    I transitioned into engineering because I knew I wanted to do something bigger
                     while still feeding this need to be creative, collaborative, to fix and improve.
                     Thus began the journey and I enrolled into the Grace Hopper full-time immersive software 
                     engineering program. 
                     <p>As a recent graduate, I am currently open to all opportunities.
                     </p>
                    <p/>
                    If you are interested in working together, let's connect! You can reach me by choosing one of the options to your left.
                </div>
                </div>
        <div className="bottom">
        <ul/>
        <p color="black">Portfolio</p>
        <div>
            </div>
            </div>
            </div>

    );
};

export default WhoAmI

