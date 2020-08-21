import React, {useState, useEffect} from 'react';

import './styles.css';

import GridItem from './components/GridItem';

import api from '../../services/api';

function ProjectsContent(){
    const [data, setData] = useState([]);
    
    useEffect(() => {
        api.get('/repos')
            .then(response => {
                setData(response.data);
            })
    }, [])

    return (
        <div className="projects-page">
            <h1 className="title-projects">
                Projetos
            </h1>

            <div className="grid-projects">
                {data.map(({id, name, description, language, stargazers_count, html_url}) => {
                    return(
                        <GridItem key={id}
                            name={name}
                            desc={description}
                            language={language}
                            stars={stargazers_count}
                            url={html_url}
                        />
                    ) 
                })}
                
            </div>
        </div>
    )
}

export default ProjectsContent;