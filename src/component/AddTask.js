import React, {Component} from 'react';
import './AddTask.css'

class AddTask extends Component {
    state = {
        text: '',
        important: false,
        deadline: new Date().toISOString().slice(0,10),
        textError: false
    }
    handleDescriptionChange = (e) => {
        this.setState({
            textError: false,
            text: e.target.value
        })
    }
    handleCheckboxChange = (e) => {
        this.setState({
            important: e.target.checked,
        })
    }
    handleDate = (e) => {
        this.setState({
            deadline: e.target.value
        })
    }
    handleSubmitTask = (e) => {
        e.preventDefault()
        const {text, important, deadline} = this.state;
        if(!text){
            this.setState({
                textError: true
            })
            return;
        }
        this.props.addTask(text, important, deadline)
        this.setState({
            text: '',
            important: false,
            deadline: new Date().toISOString().slice(0,10),
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmitTask}>
                    <label htmlFor="text">Task description</label>
                        <input type="text" id="text" value={this.state.text} onChange={this.handleDescriptionChange}/>
                    {this.state.textError && <p style={{color: 'red'}}>Don't add empty task</p>}

                    <label htmlFor="important">Important</label>
                        <input type="checkbox" id="important" checked={this.state.important} onChange={this.handleCheckboxChange}/>

                    <label htmlFor="deadline">Deadline</label>
                        <input type="date" id="deadline" value={this.state.deadline} onChange={this.handleDate} min={new Date().toISOString().slice(0,10)} max='2024-01-31'/>

                        <button>Add</button>
                </form>
            </div>
        );
    }
}

export default AddTask;