import React from 'react'

function Portfolio  ()
{
    const state = {
        'myskills': ['C#/.Net', 'Python/Django/Flasj', 'AWS/Azure', 'MicroService/MonoLiths']
    };
        return (
            <div>
                <ul id="menu">
                    {state.myskills.map((value) => {
                        return <li> {value} | </li>
                    })}
                </ul>
            </div>
                 )
    
}

export default Portfolio