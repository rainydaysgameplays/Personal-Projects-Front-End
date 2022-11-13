import React, { useState, useEffect }  from 'react';
import { useSearchParams } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';


export default function Projects() {
    const [projectState, setProjectState] = useState([])
    const [resultState, setResultState] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        if(projectState.length > 0){
            setSearchParams({proj : projectState})
            console.log("ran3")
        }
        else if (searchParams.getAll("proj").length > 0 ){
            setProjectState(searchParams.getAll("proj"))
            console.log("ran2")
        }
        else(
            console.log("no search, no params")
        )
        console.log("ran")
    },[setProjectState, setSearchParams, searchParams, projectState, setResultState])
    console.log("ran base")
    

    
    return (
        <div className='portContent'>
            <Header Title={"Projects"} setProjectState={setProjectState} projectState={projectState} searchParams={searchParams}/>
                <div>
                    <p>Common tags here</p>
                </div>
                {projectState}
            <Footer />
        </div>
    );
}
