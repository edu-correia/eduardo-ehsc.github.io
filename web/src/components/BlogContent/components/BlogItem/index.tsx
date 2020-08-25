import React, {useState} from 'react';

import './styles.css';

import quoteIcon from '../../../../assets/quote.svg';
import arrowDownIcon from '../../../../assets/arrow-down.svg';
import arrowUpIcon from '../../../../assets/arrow-up.svg';

function BlogItem(){
    const [toggle, setToggle] = useState(false);

    return(
        <div className="blog-item">
            <div className="post-title">
                Uso de styled-components
                <button onClick={() => (setToggle(!toggle))}>
                    <img src={toggle === false ? arrowDownIcon : arrowUpIcon} alt="Abrir" className="toggle"/>
                </button>
            </div>
            <div className="post-languages">
                <div className="post-language">
                    JavaScript
                </div>

                <div className="post-language">
                    TypeScript
                </div>
            </div>
            {toggle && <span className="post-content">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, ad corrupti asperiores vel sit incidunt eveniet beatae. Quasi placeat magnam iste ullam perferendis dolore ab, consectetur aliquid, quod id quas quibusdam provident vel magni eius labore debitis. Aspernatur, quaerat odio?
            </span>}
            <img src={quoteIcon} alt="Aspas" className="quotes"/>
        </div>  
    )
}

export default BlogItem;