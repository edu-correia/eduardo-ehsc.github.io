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
        <div className="grid-item">
            <div className="grid-content">
                <p className="repo-name">{name}</p>

                <span className="repo-desc">
                    {desc}
                </span>

                <div className="repo-language">
                    {language}
                </div>

                <a href="#">
                    <p>{stars}</p> 
                    <span className="stars">estrelas</span>
                    <img src={starIcon} alt="Estrelas"/>
                </a>
            </div>
        </div>
    )
}

export default GridItem;