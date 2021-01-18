import React from 'react';
import Task from './Task.js'
import FinishedTask from './FinishedTask.js'

class TaskList extends React.Component {
    state = {
        sort: 'dateDesc',
        search: '',
    }

    handleSortChange = (e) => {
        this.setState({
            sort: e.target.value
        })
    }

    sortFinished = (finished) => {
        const sortType = this.state.sort;
        if (sortType === 'dateDesc'){
            finished.sort((a, b) => {
                if (a.finishDate > b.finishDate) return -1
                if (a.finishDate < b.finishDate) return 1
                return 0
            })
        }
        else if (sortType === 'dateAsc'){
            finished.sort((a, b) => {
                if (a.finishDate < b.finishDate) return -1
                if (a.finishDate > b.finishDate) return 1
                return 0
            })
        }
        else if (sortType === 'nameDesc'){
            finished.sort((a, b) => {
                if (a.text > b.text) return -1
                if (a.text < b.text) return 1
                return 0
            })
        }
        else if (sortType === 'nameAsc'){
            finished.sort((a, b) => {
                if (a.text < b.text) return -1
                if (a.text > b.text) return 1
                return 0
            })
        }
        return finished;
    }

    render() {
        const unfinished = this.props.tasks.filter(task => !task.finishDate)
        let finished = this.props.tasks.filter(task => task.finishDate)
        finished = this.sortFinished(finished)

        const unfinishedTasks = unfinished.map(task => {
            if(!task.finishDate){
                return <Task key={task.id} task={task} finish={this.props.finish} delete={this.props.delete} />
            }
        });
        const finishedTasks = finished.map(task => {
            if(task.finishDate){
                return <FinishedTask key={task.id} task={task} delete={this.props.delete}/>
            }
        });

        return (
            <div>
                <h2>Task to Do:</h2>
                <label htmlFor="search">
                    Search Task
                    <input type="text" id="search" value={this.state.search}/>
                </label>
                {unfinishedTasks.length > 0 ? unfinishedTasks : <p>Currently you have no task to do, you can add one by filling in the form above</p>}
                <h3>Finished Tasks:</h3>
                <label htmlFor="sort">Sort by
                    <select name="sort" id="sort" onChange={this.handleSortChange}>
                        <option value="dateDesc">Finish date descending</option>
                        <option value="dateAsc">Finish date ascending</option>
                        <option value="nameDesc">Description descending</option>
                        <option value="nameAsc">Description ascending</option>
                    </select>
                </label>
                {finishedTasks.length > 0 ? finishedTasks : <p>Task history clean</p>}
            </div>
        );
    }
};

export default TaskList;
