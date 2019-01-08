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
      <form onSubmit={(e) => this.props.loginSubmit(e, this.state)} action="action_page.php" className="form">
        <div class="imgcontainer">
          <img src={require("/Users/user/FlatIrons/Proj_Mod5/calorycount-Frontend/src/image5.png")} alt="Avatar" className="avatar" />
        < /div>

      <div className="container1">
        <label for="name"><b>Username</b></label>
        <input type="text" name="username" placeholder="Enter username" value={this.state.username} onChange={this.loginHandler}/> <br />
        <label for="password"><b>Password</b></label>
        <input type="password" name="password" placeholder="Enter password" value={this.state.password} onChange={this.loginHandler} />
        <button className="buttonlogin"> Log In</button>
      </div>

      </ form>
    )
  }
}

export default LoginForm;
