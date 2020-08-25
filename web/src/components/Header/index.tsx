import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

import projectsIcon from '../../assets/projects.svg';
import contactIcon from '../../assets/contact.svg';
import blogIcon from '../../assets/blog.svg';

function Header() {
    return (
        <header>
            <div className="box">
                <Link to="/" className="name">Eduardo Correia</Link>

                <div className="links">
                    <Link to="/projects" className="link">
                        <img src={projectsIcon} alt="Projetos"/>
                        projetos
                    </Link>

                    <Link to="/blog" className="link">
                        <img src={blogIcon} alt="Blog"/>
                        blog
                    </Link>
                    
                    <Link to="/" className="link">
                        <img src={contactIcon} alt="Contato"/>
                        contato
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;