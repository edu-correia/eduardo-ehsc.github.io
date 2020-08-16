import React from 'react';

import './styles.css';

function Header() {
    return (
        <header>
            <div className="box">
                <p>Eduardo Correia</p>
                <div className="links">
                    <a href="">blog</a>
                    <a href="">contato</a>
                    <a href="">projetos</a>
                </div>
            </div>
        </header>
    )
}

export default Header;