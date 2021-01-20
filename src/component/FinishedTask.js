import React from 'react';

const Task = (props) => {
    const {id, text, startDate, finishDate} = props.task;
    return (
        <div>
            <p style={{display: 'inline-block'}}>{text} - started: <em>{startDate} </em>
            finished: <em>{finishDate}</em></p>
            <button className='finishDelete' onClick={() => props.delete(id)}>x</button>
            <hr/>
        </div>
    );
};

export default Task;
