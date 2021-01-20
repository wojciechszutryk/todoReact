import React, {Component} from 'react';
import '../stylesheets/App.sass';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskList from './TaskList.js';
import AddTask from './AddTask.js';

class App extends Component {
  taskNumber = 3;
  state = {
    tasks: [
      {
        id: 0,
        text: 'Wash a Car',
        startDate: new Date().toISOString().slice(0,10),
        deadline: '2022-12-31',
        important: false,
        finishDate: false,
      },
      {
        id: 1,
        text: 'Go for a walk',
        startDate: '2019-01-30',
        deadline: '2020-11-30',
        important: false,
        finishDate: false,
      },
      {
        id: 2,
        text: 'Do the shopping',
        startDate: '2020-12-30',
        deadline: '2021-12-30',
        important: true,
        finishDate: false,
      },
      {
        id: 4,
        text: 'Buy a gift for John',
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
        <div className="App container-fluid">
          <div className="row">
            <h1 className="jumbotron text-center p-2 col-12" >ToDo App</h1>
            <section className='col-12 mb-3'>
              <AddTask addTask={this.addTask}/>
            </section>
            <hr className="col-12"/>
            <article className='col-12'>
              <TaskList tasks={this.state.tasks} finish={this.handleFinishTask} delete={this.handleDeleteTask}/>
            </article>
          </div>
        </div>
    )
  }
}

export default App;
