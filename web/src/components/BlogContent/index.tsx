import React, {useState} from 'react';
import BlogItem from './components/BlogItem';

import './styles.css';

import plusIcon from '../../assets/plus.svg';

function BlogContent(){
    const [popupIsOpen, setPopupIsOpen] = useState(false);

    return (
        <div className="blog-page">
            <div className="blog-header">
                <h1 className="blog-title">Blog</h1>
                <button onClick={() => (setPopupIsOpen(!popupIsOpen))} className="add-post">
                    Adicionar
                    <img src={plusIcon} alt="Adicionar"/>
                </button>
            </div>

            {popupIsOpen &&
                <div className="popup-bg">
                    <div className="popup">
                        <h1 className="popup-title">
                            Novo post:
                        </h1>

                        <div className="input-box">
                            <label htmlFor="">Senha:</label>
                            <input type="text"/>
                        </div>

                        <div className="input-box">
                            <label htmlFor="">Título:</label>
                            <input type="text"/>
                        </div>

                        <div className="input-box">
                            <label htmlFor="">Tags:</label>
                            <select name="" value="" id="">
                                <option value="" disabled hidden>Selecione uma opção</option>
                                <option value="">JavaScript</option>
                                <option value="">TypeScript</option>
                                <option value="">NodeJS</option>
                                <option value="">ReactJS</option>
                            </select>
                        </div>

                        <div className="tags">
                            <div className="tag">
                                JavaScript
                            </div>
                        </div>

                        <div className="input-box">
                            <label htmlFor="">Post:</label>
                            <textarea name="" id=""></textarea>
                        </div>

                        <div className="buttons">
                            <button onClick={() => (setPopupIsOpen(!popupIsOpen))} className="close">Cancelar</button>
                            <button className="create">Criar</button>
                        </div>
                    </div>
                </div>
            }

            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
        </div>
    )
}

export default BlogContent;