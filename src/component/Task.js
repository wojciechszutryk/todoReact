import React from 'react';
import './Task.css'

const Task = (props) => {
    const {id, text, startDate, deadline, important} = props.task;
    return (
        <div>
            <p>
                <span className={important ? 'important' : ''}>{text}</span>
                - started: <em>{startDate}</em>
            </p>
            <p>deadline: <em>{deadline}</em></p>
            <button onClick={() => props.finish(id)}>Finish</button>
            <button onClick={() => props.delete(id)}>Delete</button>
            <hr/>
        </div>
    );
};

export default Task;
