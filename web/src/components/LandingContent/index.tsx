import React from 'react';

import './styles.css';

import htmlIcon from '../../assets/html.svg';
import cssIcon from '../../assets/css.svg';
import jsIcon from '../../assets/javascript.svg';
import reactIcon from '../../assets/react.svg';
import nodeIcon from '../../assets/node.svg';

function LandingContent() {
    return (
        <>
            <main className="main">
                <div className="hello">
                    <p>
                        Olá, seja bem-vindo ao meu site.
                    </p>
                </div>
                <div className="code">
                    <div className="json">
                        <p>
                            <span> 
                                <span className="prop">"nome"</span>: 
                                <span className="value">"Eduardo Correia"</span>,
                            </span> <br></br>

                            <span> 
                                <span className="prop">"idade"</span>: 
                                <span className="num-value">16</span>,
                            </span> <br></br>

                            <span>
                                <span className="prop">"paixoes"</span>: [
                            </span> <br></br>

                            <span>
                                <span className="value tab">"Javascript"</span>,
                            </span> <br></br>

                            <span>
                                <span className="value tab">"Typescript"</span>,
                            </span> <br></br>

                            <span>
                                <span className="value tab">"ReactJS"</span>,
                            </span> <br></br>

                            <span>
                                <span className="value tab">"NodeJS"</span>,
                            </span> <br></br>

                            <span>]</span><br></br>
                            
                        </p>
                    </div>
                </div>
            </main>

            <div className="languages">
                <div className="circle">
                    <img src={htmlIcon} alt="HTML 5"/>
                </div>

                <div className="circle">
                    <img src={cssIcon} alt="CSS 3"/>
                </div>

                <div className="circle">
                    <img src={jsIcon} alt="Javascript"/>
                </div>

                <div className="circle">
                    <img src={reactIcon} alt="ReactJS"/>
                </div>

                <div className="circle">
                    <img src={nodeIcon} alt="NodeJS"/>
                </div>
            </div>
        </>
    )
}

export default LandingContent;