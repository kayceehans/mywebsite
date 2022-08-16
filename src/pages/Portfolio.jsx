import React from 'react'

function Portfolio  ()
{
    const state = {
        'myskills': ['C#/.Net', 'JavaScipt/ReactJs', 'SQL/NoSQL DBs', 'Docker/Kubernettes', 'MicroService/MonoLiths', 'CI/CD']
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