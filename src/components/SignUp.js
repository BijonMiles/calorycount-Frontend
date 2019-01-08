import React, {Component} from 'react'

class SignUp extends Component {

  state = {
    first_name: "",
    last_name: "",
    username: "",
    password: ""
  }

  createOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {

    return (
      <form onSubmit={(event)=>this.props.createSubmit(event, this.state)} className="form" >
      <br /><br />
      <div className="container1">
        First Name: <input name="first_name" placeholder="Enter First Name" onChange={this.createOnChange} value={this.state.first_name}/> <br />
        Last Name: <input name="last_name" placeholder="Enter Last Name" onChange={this.createOnChange} value={this.state.last_name} /><br />
        UserName: <input name="username" type="text" placeholder="Enter UserName" onChange={this.createOnChange} value={this.state.username} /><br />
        Password: <input name="password" type="password" placeholder="Enter Password" onChange={this.createOnChange} value={this.state.password} /><br />
        <button className="button"> create </button>
      </div>

      </form>
    )
  }
}

export default SignUp;
