import React, {Component} from 'react';

class Login extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      password: '',
    }
    this.handleLogin = this.handleLogin.bind(this)
  }
  handleUserChange(name){
    this.setState({username: name})
  }
  handlePassChange(pass){
    this.setState({password: pass})
  }
  handleLogin(){ 
    alert(`username: ${this.state.username} password: ${this.state.password}`)

  }
  render(){
    return(
      <div className='Login'>
        <input 
          onChange={e => this.handleUserChange(e.target.value)}
          type='text'
        />
        <input 
          onChange={e => this.handlePassChange(e.target.value)}
          type='text'
        />
        <button onChange={this.state.handleLogin}>Login</button>
      </div>
    )
  }
}
export default Login