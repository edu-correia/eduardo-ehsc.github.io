import React from 'react';

import './styles.css';

import starIcon from '../../assets/star.svg';

function ProjectsContent(){
    return (
        <div className="projects-page">
            <h1 className="title-projects">
                Projects
            </h1>

            <div className="grid-projects">
                <div className="grid-item">
                    <div className="grid-content">
                        <p className="repo-name">Proffy</p>
                        <span className="repo-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit numquam perspiciatis dolorem magni quaerat ipsa maiores nemo labore. Veniam, molestiae?
                        </span>
                        <div className="repo-language">
                            Typescript
                        </div>
                        <a href="#">
                            <p>25</p> 
                            <span className="stars"> estrelas </span>
                            <img src={starIcon} alt="Estrelas"/>
                        </a>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="grid-content">
                        <p className="repo-name">Proffy</p>
                        <span className="repo-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit numquam perspiciatis dolorem magni quaerat ipsa maiores nemo labore. Veniam, molestiae?
                        </span>
                        <div className="repo-language">
                            Typescript
                        </div>
                        <a href="#">
                            <p>25</p> 
                            <span className="stars"> estrelas </span>
                            <img src={starIcon} alt="Estrelas"/>
                        </a>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="grid-content">
                        <p className="repo-name">Proffy</p>
                        <span className="repo-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit numquam perspiciatis dolorem magni quaerat ipsa maiores nemo labore. Veniam, molestiae?
                        </span>
                        <div className="repo-language">
                            Typescript
                        </div>
                        <a href="#">
                            <p>25</p> 
                            <span className="stars"> estrelas </span>
                            <img src={starIcon} alt="Estrelas"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsContent;