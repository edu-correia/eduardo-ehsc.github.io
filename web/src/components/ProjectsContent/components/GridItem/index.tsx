import React from 'react';

import './styles.css';

import starIcon from '../../../../assets/star.svg';

interface GridItemProps{
    name: string;
    desc?: string;
    language?: string;
    stars: string;
    url: string;
}

const GridItem:React.FC<GridItemProps> = ({name, desc, language, stars, url}) => {
    return (
        <a href={url} target="_blank" className="grid-item">
            <div className="grid-content">
                <p className="repo-name">{name}</p>

                <span className="repo-desc">
                    {desc}
                </span>

                <div className="repo-language">
                    {language}
                </div>

                <div className="stars-div">
                    <p>{stars}</p> 
                    <span className="stars">estrelas</span>
                    <img src={starIcon} alt="Estrelas"/>
                </div>
            </div>
        </a>
    )
}

export default GridItem;