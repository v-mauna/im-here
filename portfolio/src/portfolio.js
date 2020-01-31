import React from 'react'
import './styles/portfolio.css'
import selfie from './images/IMG_2589.jpeg'

const Portfolio = () => {
    return (
        <div>
            <div id="portfolio">
                <div className="portfolio">
                </div>
                <div className='projectTitles' id='who-am-i'>
                    <div className='projectsList'>
                    <a href="http://s-t-y-p.herokuapp.com"> Shop Till You Pop</a>
                    <p>
                    An e-commerce site designed to give users access to a variety of cereals and introduce them to some new ones along the way.
                    Shop Till You Pop utlizes the technologies listed below to allow users or guests to create carts, continue shopping, edit their carts, 
                    and checkout. Yachts Don't Stop also takes care of inventory management, ensuring that any price changes are represented in a 
                    user's cart until the time of purchase, and that no out-of-stock products are listed as available.

                    <p>TECH STACK</p>
                    <p>
                        <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>PostgreSQL</li>
                    <li>OAuth</li>
                    </ul>
                    </p>
                    
                    </p>
                </div>
                </div>
                </div>
        <div className="bottom">
        <ul>
        <div>
            </div>
            </ul>
            </div>
            </div>
    );
};

export default Portfolio

