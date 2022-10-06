import React, { useState, useEffect }  from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Projects() {
    const [projectState, setProjectState] = useState([])

    useEffect(() => {
        setProjectState("test")
    },[setProjectState])
  
    return (
        <div>
            <Header setProjectState={setProjectState}/>
                <p>Projects</p>
                <p>{projectState}</p>
            <Footer />
        </div>
    );
}
