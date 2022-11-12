import React from 'react';
import { Link } from 'react-router-dom'

export default function Header({ setProjectState, Title }) {

    function projState(){
        if(setProjectState !== undefined){
            let searchInput = document.getElementById('headerSearch').value
            setProjectState(searchInput)
        }
    }
    function onKeyDown(e){
        if(e.keyCode === 13 && setProjectState !== undefined){
            let searchInput = document.getElementById('headerSearch').value
            setProjectState(searchInput)
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
