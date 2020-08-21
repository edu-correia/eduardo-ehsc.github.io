import React from 'react';

import './styles.css';

import projectsIcon from '../../assets/projects.svg';
import contactIcon from '../../assets/contact.svg';
import blogIcon from '../../assets/blog.svg';

function Header() {
    return (
        <header>
            <div className="box">
                <p className="name">Eduardo Correia</p>

                <div className="links">
                    <a href="#" className="link">
                        <img src={projectsIcon} alt=""/>
                        projetos
                    </a>

                    <a href="#" className="link">
                        <img src={blogIcon} alt=""/>
                        blog
                    </a>
                    
                    <a href="#" className="link">
                        <img src={contactIcon} alt=""/>
                        contato
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;