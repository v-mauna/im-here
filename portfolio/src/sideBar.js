import React from 'react';

import './styles/sideBar.css'

const SideBar = () => {
    return (
            <div className="icon-bar">
                    <a href="mailto:vmauna@aol.com" class="email">
                        <i className="fa fa-envelope"></i>
                    </a>
                        <a href="https://www.linkedin.com/in/v-mauna/" class="linkedin">
                            <i className="fa fa-linkedin"></i>
                            </a>
                                <a href="https://github.com/v-mauna" class="github">
                                    <i className="fa fa-github"></i>
                                    </a>
                                    <a href="tel:516-805-2900" id="phone">
                                        <i className="fa fa-phone"></i>
                                 </a>
                                    
            </div>
    );
};

export default SideBar;