import React from 'react';

import './styles.css';

import GridItem from './components/GridItem';

function ProjectsContent(){
    return (
        <div className="projects-page">
            <h1 className="title-projects">
                Projetos
            </h1>

            <div className="grid-projects">
                <GridItem 
                    name="proffy"
                    desc="lorem ipsum"
                    language="typescript"
                    stars="25"
                    url="https://github.com"
                />

                <GridItem 
                    name="proffy"
                    desc="lorem ipsum"
                    language="typescript"
                    stars="25"
                    url="https://github.com"
                />

                <GridItem 
                    name="proffy"
                    desc="lorem ipsum"
                    language="typescript"
                    stars="25"
                    url="https://github.com"
                />

                <GridItem 
                    name="proffy"
                    desc="lorem ipsum"
                    language="typescript"
                    stars="25"
                    url="https://github.com"
                />

                <GridItem 
                    name="proffy"
                    desc="lorem ipsum"
                    language="typescript"
                    stars="25"
                    url="https://github.com"
                />

                <GridItem 
                    name="proffy"
                    desc="lorem ipsum"
                    language="typescript"
                    stars="25"
                    url="https://github.com"
                />
            </div>
        </div>
    )
}

export default ProjectsContent;