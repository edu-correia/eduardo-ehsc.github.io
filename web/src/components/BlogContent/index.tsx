import React from 'react';

import './styles.css';

import plusIcon from '../../assets/plus.svg';
import quoteIcon from '../../assets/quote.svg';
import arrowDownIcon from '../../assets/arrow-down.svg';

function BlogContent(){
    return (
        <div className="blog-page">
            <div className="blog-header">
                <h1 className="blog-title">Blog</h1>
                <button className="add-post">
                    Adicionar
                    <img src={plusIcon} alt="Adicionar"/>
                </button>
            </div>

            <div className="blog-item">
                <div className="post-title">
                    Uso de styled-components
                    <button>
                        <img src={arrowDownIcon} alt="" className="toggle"/>
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
                <span className="post-content">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, ad corrupti asperiores vel sit incidunt eveniet beatae. Quasi placeat magnam iste ullam perferendis dolore ab, consectetur aliquid, quod id quas quibusdam provident vel magni eius labore debitis. Aspernatur, quaerat odio?
                </span>
                <img src={quoteIcon} alt="" className="quotes"/>
            </div>

            <div className="blog-item">
                <div className="post-title">
                    Uso de styled-components
                    <button>
                        <img src={arrowDownIcon} alt="" className="toggle"/>
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
                <span className="post-content">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, ad corrupti asperiores vel sit incidunt eveniet beatae. Quasi placeat magnam iste ullam perferendis dolore ab, consectetur aliquid, quod id quas quibusdam provident vel magni eius labore debitis. Aspernatur, quaerat odio?
                </span>
                <img src={quoteIcon} alt="" className="quotes"/>
            </div>
        </div>
    )
}

export default BlogContent;