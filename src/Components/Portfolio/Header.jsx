import React from 'react';

export default function Header({ setProjectState }) {

    function clicky(){
        if(setProjectState !== undefined){
            setProjectState("Finally it runs")
        }
        
    }
    return (
        <div>
            <p>Header</p>
            <button onClick={clicky}>pass proj</button>
        </div>
    );
}
