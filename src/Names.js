import React from 'react';

function Names({ names }) { 
    return (
        <div>
            {names.map((name, index) => (
                <h1 key={index}>{name}</h1> 
            ))}
        </div>
    );
}

export default Names;