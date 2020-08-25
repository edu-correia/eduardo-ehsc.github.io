import React from 'react';

import BlogItem from './components/BlogItem';

import './styles.css';

import plusIcon from '../../assets/plus.svg';

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

            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
        </div>
    )
}

export default BlogContent;