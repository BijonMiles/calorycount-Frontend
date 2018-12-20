import React, { Component } from 'react';
import './App.css';
import CaloryContainer from './components/CaloryContainer'
import NavBar from './components/NavBar'
import SignUp from './components/SignUp'
import LoginForm from './components/LoginForm'
import {Route, Switch, withRouter} from 'react-router-dom'

class App extends Component {

  state = {
    user: {}
  }

  componentDidMount() {
    let token = localStorage.getItem('token')
    console.log(token);
    if (token) {
      // must add fetch for the proper api that holds that particular user's information
      fetch("http://localhost:3000/current_user", {
        headers: {
          "Content-Type": "application/json",
          "Accepts":  "application/json",
          Authorization: token
        }
      })
      .then(res => res.json() )
      .then( json => {
        console.log("Current User: ", json);
        this.setState({
          user: json
        })
      })
      this.props.history.push('/')
    } else {
      this.props.history.push('/')
    }
  }

  createSubmit = (event, userObj) => {
    event.preventDefault()
    // debugger
    // console.log(userObj)
    this.createUser(userObj)
    this.props.history.push('/')
  }

  createUser = (userObj) => {
    fetch("http://localhost:3000/users/", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(userObj)
    })
    .then(r => r.json())
    .then(newUser => {
      // debugger
      console.log(newUser);
      if (newUser.jwt) {
        localStorage.setItem('token', newUser.jwt)
        this.setState({  user: newUser  })
      }
      this.props.history.push('/')
    })
  }

  loginSubmit = (event, userInfo) => {
    event.preventDefault()
    this.loginFetch(event, userInfo)
  }

  loginFetch = (e, userInfo) => {
    fetch("http://localhost:3000/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        user: userInfo
      })
    })
    .then(res => res.json())
    .then(resp => {
      localStorage.setItem('token', resp.jwt)
      // console.log(resp);
      this.setState({
        user: resp.user
      })
    })
    this.props.history.push('/')

  }

  render() {
    return (<div className="view" >
        <NavBar />
        <Switch>
        <Route exact path="/" render={(props) =>  (<CaloryContainer user={this.state.user} createSubmit={this.state.user}/>)} />
          <Route exact path="/signup" render={(props) =>  (<SignUp createSubmit={this.createSubmit}/>)} />
          <Route exact path="/login" render={(props) =>  (<LoginForm loginSubmit={this.loginSubmit}/>)} />
        </ Switch>
      </ div>
    )
  }
}
// <Route path="/login" component={LoginForm} />
// <Route exact path="/" component={CaloryContainer} />

export default withRouter(App) ;
