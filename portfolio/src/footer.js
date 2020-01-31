import React from 'react';
import ScrollToTop from 'react-scroll-up';

import './styles/footer.css';

const Footer = () => {
    let scrollStyle = {
        color: 'grey',
        bottom: 75,
        right: 55,
    }

    return (
        <div className = 'footer'> 
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            
            <div id='footer-left'></div>

            <div id='footer-right'>
                <ScrollToTop id='scrollUp' showUnder={160} style={scrollStyle}> 
                    <img src='https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/15666712351530177268-512.png' width='30' height='30' alt='' />
                </ScrollToTop>

                <a href="https://www.linkedin.com/in/v-mauna/" className="linkedin"><i className="fa fa-linkedin"></i></a>
                <a href="https://github.com/v-mauna" className="github"><i className="fa fa-github"></i></a>
                <a href="mailto:vmauna@aol.com" className="email"><i className="fa fa-envelope"></i></a>
                
            </div>
            <div className='credits'> 2019 </div>
            
        </div>
    );
};

export default Footer;