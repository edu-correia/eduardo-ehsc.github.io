import React, { useState } from 'react';

import './styles.css';

import menuIcon from '../../assets/menu.svg';
import projectsIcon from '../../assets/projects.svg';
import contactIcon from '../../assets/contact.svg';
import blogIcon from '../../assets/blog.svg';

function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header>
            <div className="box">
                <p className="name">Eduardo Correia</p>

                <a href="#" className="dropdown" onClick={() => setOpen(!open)}>
                    <img src={menuIcon} alt=""/>
                </a>

                {/*open && <div className="menu">
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
    </div>*/}
            </div>
        </header>
    )
}

export default Header;