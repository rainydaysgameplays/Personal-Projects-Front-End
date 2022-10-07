import React from 'react';

export default function Header({ setProjectState, Title }) {

    function clicky(){
        if(setProjectState !== undefined){
            setProjectState("After Search")
        }
        
    }
    return (
        <div id='portHeader'>
            <h1 id='headerTitle'>{Title}</h1>
            <div id='searchContainer'>
                <button onClick={clicky}>pass proj</button>
            </div>
            
            <div id='headerLinks'>
                <p>link 1</p>
                <p>link 2</p>
                <p>link 3</p>
            </div>
        </div>
    );
}
