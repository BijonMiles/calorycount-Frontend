import React, {Component} from 'react'

class LoginForm extends Component {

  state = {
    username: "",
    password: ""
  }

  loginHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {

    return (
      <form onSubmit={(e) => this.props.loginSubmit(e, this.state)} className="signupForm" >
      <br />
      😎  Log In  😎
      <br />
        <input type="text" name="username" placeholder="Enter username" value={this.state.username} onChange={this.loginHandler}/> <br />
        <input type="password" name="password" placeholder="Enter password" value={this.state.password} onChange={this.loginHandler} />
        <button> Log In</button>
      </ form>
    )
  }
}

export default LoginForm;
