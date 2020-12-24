import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      musicians: ['billie holiday', 'louis armstrong', 'nina simone']
    }
  }
  render(){
    let favoriteMusicians = this.state.musicians.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })
    return <div className = 'App'>{favoriteMusicians}</div>
  }
}
export default App