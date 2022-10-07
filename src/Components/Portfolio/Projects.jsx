import React, { useState, useEffect }  from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Projects() {
    const [projectState, setProjectState] = useState([])

    useEffect(() => {
        setProjectState("non search")
    },[setProjectState])
  
    return (
        <div className='portContent'>
            <Header Title={"Projects"} setProjectState={setProjectState}/>
                <div>
                    <p>Common tags here</p>
                </div>
                <p>{projectState}</p>
            <Footer />
        </div>
    );
}
