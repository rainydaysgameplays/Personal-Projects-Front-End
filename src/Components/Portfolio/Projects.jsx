import React, { useState, useEffect }  from 'react';
import { useSearchParams } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export default function Projects() {
    const [projectState, setProjectState] = useState([])
    var [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        if(projectState.length > 0){
            setSearchParams({proj : projectState})
            console.log(projectState)
        }
        else if (searchParams.getAll("proj").length > 0 ){
            setProjectState(searchParams.getAll("proj"))
        }
    },[setProjectState, setSearchParams, searchParams, projectState])
    
    return (
        <div className='portContent'>
            <Header Title={"Projects"} setProjectState={setProjectState} projectState={projectState}/>
                <div>
                    <p>Common tags here</p>
                </div>
                <p>{projectState}</p>
            <Footer />
        </div>
    );
}
