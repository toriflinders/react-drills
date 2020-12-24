import React, {Component} from 'react';
import './App.css'

class App extends Component {
  constructor(){
    super();

    this.state = {
      filterString: "",
      interests: ['music', 'reading', 'being outdoors', 'anything with animals', 'playing with plants']
    }
  }
  handleChange(filter){
    this.setState({filterString : filter})
  }

  render(){
    let simpleInterests = this.state.interests
      .filter((element, index) => {
        return element.includes(this.state.filterString)
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      })

    return(
      <div className= "App">
        <input
          onChange={e => this.handleChange(e.target.value)} type='text' />
          {simpleInterests}
      </div>
    );
  }
}
export default App