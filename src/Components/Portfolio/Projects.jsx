import React, { useState, useEffect }  from 'react';
import { useSearchParams } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export default function Projects() {
    const [projectState, setProjectState] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        if(projectState.length > 0){
            setSearchParams({proj : projectState})
        }
        else if (searchParams.getAll("proj").length > 0 ){
            setProjectState(searchParams.getAll("proj")) 
        }
    },[setProjectState, setSearchParams, searchParams, projectState])
    
    let projectObj = 
    [
        {
            projectName : "Dungeons",
            searchTags : ["Front-end", "API", "favorite", "awesome", "GA project"],
            link : "/link/to/project"
        },
        {
            projectName : "project2",
            searchTags : ["MERN", "Full-Stack", "API", ""]
        }
    ]

    let projArr = []
    let i = 0
    while(i < projectObj.length){
        let matchCount = 0
        let projName = projectObj[i].projectName
        let tags = projectObj[i].searchTags

        if(projectState.length === 0){
            projArr.push(
                <div key={i}>
                    {projectObj[i].projectName}
                    {projectObj[i].searchTags}
                </div>
            )
        }
       
        else if(projectState.length > 0){
            projectState.forEach((e3) => {
                if(e3.toUpperCase() === projName.toUpperCase()){
                    matchCount++
                }
                tags.forEach((e4) => {
                    if(e3.toUpperCase() === e4.toUpperCase()){
                        matchCount++
                    }
                })
            })
            if(projectState.length === matchCount){
                

                projArr.push(
                    <div key={i}>
                        {projectObj[i].projectName}
                        {projectObj[i].searchTags}
                    </div>
                )
            }
        }   
        i++
    }
    

    let removeSearch = (e) => {
        projectState.splice(e.target.value, 1)
        setSearchParams({proj : projectState})
    }
    let searchArr = []
    projectState.forEach((e, key) => {
        searchArr.push(
            <div key={key} className="searchArr">
                <button onClick={removeSearch} value={key} >X</button>
                <p>{e}</p>
            </div>
        )
    })
    
    return (
        <div className='portContent'>
            <Header Title={"Projects"} setProjectState={setProjectState} projectState={projectState} searchParams={searchParams}/>
                <div id='searchArrContainer'>
                    {searchArr}
                </div>
                <div id='projectContainer'>
                    {projArr}
                </div>

            <Footer />
        </div>
    );
}
