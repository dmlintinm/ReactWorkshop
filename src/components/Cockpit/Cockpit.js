import React from 'react';

import classes from './Cockpit.css'

const cockpit = (props) => {

    const assignedclasses = [];
    let btnClass = classes.Button;
    if(props.showPersons){
        btnClass = [classes.Button, classes.Red].join(' ');
    }    

    if (props.persons.length <= 2) {
        assignedclasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
        assignedclasses.push(classes.bold); // classed = ['bold']
    }

    return (
        <div>
            <h1>{props.appTitle}</h1>
            <p className={assignedclasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;