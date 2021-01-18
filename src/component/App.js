import React, {Component} from 'react';
import './App.css';
import TaskList from './TaskList.js';
import AddTask from './AddTask.js';

class App extends Component {
  taskNumber = 3;
  state = {
    tasks: [
      {
        id: 0,
        text: 'alibaba',
        startDate: new Date().toISOString().slice(0,10),
        deadline: '2022-12-31',
        important: true,
        finishDate: false,
      },
      {
        id: 1,
        text: 'ala ma kota',
        startDate: '2019-01-30',
        deadline: '2020-11-30',
        important: false,
        finishDate: false,
      },
      {
        id: 2,
        text: 'wojtek',
        startDate: '2020-12-30',
        deadline: '2021-12-30',
        important: false,
        finishDate: false,
      },
      {
        id: 4,
        text: 'gdsgdsgdgs',
        startDate: new Date().toISOString().slice(0,10),
        deadline: '2022-12-31',
        important: true,
        finishDate: '2022-12-31',
      },
    ]
  }
  handleFinishTask = (id) => {
    const tasks = [...this.state.tasks];
    tasks.filter(task => {
      if (task.id === id) {
        task.finishDate = new Date().toISOString().slice(0,10)
        }
      }
    )
    this.setState(prevState => ({
      tasks
    }))
  }
  handleDeleteTask = (id) => {
    const tasks = [...this.state.tasks];
    tasks.filter(task => {
          if (task.id === id) {
            const index = tasks.indexOf(task)
            tasks.splice(index,1);
          }
        }
    )
    this.setState(prevState => ({
      tasks
    }))
  }
  addTask = (text, important, deadline) => {
    const tasks = [...this.state.tasks]
    const newTask = {
      id: this.taskNumber,
      text,
      startDate: new Date().toISOString().slice(0,10),
      deadline,
      important,
      finishDate: false,
    }
    this.setState({
      tasks: [...tasks, newTask]
    })
    this.taskNumber++;
  }
  render(){
    return (
        <div className="App">
          <h1>ToDo App</h1>
          <AddTask addTask={this.addTask}/>
          <TaskList tasks={this.state.tasks} finish={this.handleFinishTask} delete={this.handleDeleteTask}/>
        </div>
    )
  }
}

export default App;
