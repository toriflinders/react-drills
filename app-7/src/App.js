import React, {Component} from 'react';
import './App.css';
import List from './List';
import NewTask from './NewTask';

class App extends Component {
  constructor(){
    super();

    this.state = {
      list: []
    }
    this.handleAddTask = this.handleAddTask.bind(this)
  }
  handleAddTask(task){
    this.setState({ list: [...this.state.list, task] })
  }
  render(){
    return(
      <div className='App'>
        <h1>Another To Do List</h1>
        <div>
          <NewTask add={this.handleAddTask} />
          <List tasks={this.state.list} />
        </div>
      </div>
    )
  }
}
export default App