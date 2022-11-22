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
            description : "a front end app that uses the dungeons and dragons 5th edition API. The site deconstructs the API and serves as an online refference for players and dungeon masters.",
            searchTags : ["Front-end ", "API ", "favorite ", "awesome ", "GA project "],
            aboutLink : "/link/to/project/about",
            projectLink : "/link/to/project"
        },
        {
            projectName : "project 2",
            description : "A test to see how it displays data",
            searchTags : ["Front-end ", "API ", "Test "],
            aboutLink : "/link/to/test/about",
            projectLink : "/link/to/test"
        }
    ]

    let projArr = []
    let i = 0
    while(i < projectObj.length){
        let matchCount = 0
        let projName = projectObj[i].projectName
        let projDescription = projectObj[i].description
        let projAboutLink = projectObj[i].aboutLink
        let projLink = projectObj[i].projectLink
        let projTags = projectObj[i].searchTags

        if(projectState.length === 0){
            projArr.push(
                <div key={i} className="projectsCard">
                    <h4 className="projCardHead"><a href={projLink} className='headCardLinks'>{projName}</a></h4>
                    <p>{projDescription} <a href={projAboutLink} className='aboutCardLinks'>Learn More</a></p>
                    <p className='projCardTags'>Tags: {projTags.toString()}</p>
                </div>
            )
        }
       
        else if(projectState.length > 0){
            projectState.forEach((e3) => {
                if(e3.toUpperCase().trim() === projName.toUpperCase()){
                    matchCount++
                }
                projTags.forEach((e4) => {
                    if(e3.toUpperCase().trim() === e4.toUpperCase().trim()){
                        matchCount++
                    }
                })
            })
            if(projectState.length === matchCount){
                

                projArr.push(
                    <div key={i} className="projectsCard">
                        <div>{projName}</div>
                        <div>{projDescription}</div>
                        <div>{projAboutLink}</div>
                        <div>{projLink}</div>
                        <div>{projTags}</div>
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
