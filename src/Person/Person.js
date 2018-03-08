import React from 'react';

import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
    <p onClick={props.click}>Name: {props.name} Age: {props.age} </p>
    <p>Country: {props.children != null  ? props.children : 'Nill' }</p>
    <input type="text" onChange={props.changed} value={props.name}/> 
    </div>    
);
};

export default person;