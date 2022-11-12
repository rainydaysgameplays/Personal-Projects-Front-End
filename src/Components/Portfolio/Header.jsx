import React from 'react';
import { Link } from 'react-router-dom'

export default function Header({ setProjectState, Title, projectState }) {
    
    function projState(){
        if(setProjectState !== undefined && document.getElementById('headerSearch').value !== ""){
            let searchInput = document.getElementById('headerSearch').value
            
            if(projectState.length === 0){
                setProjectState([searchInput])
            }
            else(
               
                setProjectState((projectState) => [...projectState, searchInput])
            )

            document.getElementById('headerSearch').value = ""
        }
    }
    function onKeyDown(e){
        if(e.keyCode === 13 && setProjectState !== undefined && document.getElementById('headerSearch').value !== ""){
            let searchInput = document.getElementById('headerSearch').value
            if(projectState.length === 0){
                setProjectState([searchInput])
            }
            else(
                setProjectState((projectState) => [...projectState, searchInput])
            )
            document.getElementById('headerSearch').value = ""
        }
    }
    return (
        <div id='portHeader'>
            <h1 id='headerTitle'>{Title}</h1>

            <div id='headerNav'>
            <div id='headerLinks'>
                <Link to={'/'} className='indHeaderLink'>About</Link>
                <Link to={'/Resume'} className='indHeaderLink'>Resume</Link>
                <Link to={'/Projects'} className='indHeaderLink'>Projects</Link>
            </div>
            <div id='searchContainer'>
                <label htmlFor="headerSearch"></label>
                <input type="search" id='headerSearch' onKeyDown={onKeyDown}/>
                <button onClick={projState} id='headerBtn'>search</button>
            </div>
            </div>

        </div>
    );
}
