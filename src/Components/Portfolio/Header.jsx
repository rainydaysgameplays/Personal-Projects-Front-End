import React from 'react';
import { Link } from 'react-router-dom'

export default function Header({ setProjectState, Title }) {

    function projState(){
        if(setProjectState !== undefined){
            setProjectState("After Search")
        }
        
    }
    return (
        <div id='portHeader'>
            <h1 id='headerTitle'>{Title}</h1>

            <div id='headerNav'>
            <div id='headerLinks'>
                <Link to={'/'} className='indHeaderLink'>Home</Link>
                <Link to={'/Resume'} className='indHeaderLink'>Resume</Link>
                <Link to={'/Projects'} className='indHeaderLink'>Projects</Link>
            </div>
            <div id='searchContainer'>
                <label for="headerSearch"></label>
                <input type="search" id='headerSearch'/>
                <button onClick={projState}>pass proj</button>
            </div>
            </div>

        </div>
    );
}
