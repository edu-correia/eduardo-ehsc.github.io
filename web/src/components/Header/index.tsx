import React from 'react';

import './styles.css';

function Header() {
    return (
        <header>
            <div className="box">
                <p>Eduardo Correia</p>
                <div className="links">
                    <a href="">projetos</a>
                    <a href="">blog</a>
                    <a href="">contato</a>
                </div>
            </div>
        </header>
    )
}

export default Header;