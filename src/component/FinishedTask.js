import React from 'react';

const Task = (props) => {
    const {id, text, startDate, finishDate} = props.task;
    return (
        <div>
            <p>{text} - started: <em>{startDate}</em></p>
            <p>finished: <em>{finishDate}</em></p>
            <button onClick={() => props.delete(id)}>Delete</button>
            <hr/>
        </div>
    );
};

export default Task;
