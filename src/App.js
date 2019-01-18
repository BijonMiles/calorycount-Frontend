import React, { Component } from 'react';
import './App.css';
import CaloryContainer from './components/CaloryContainer'
import Profile from './components/Profile'
import NavBar from './components/NavBar'
import SignUp from './components/SignUp'
import LoginForm from './components/LoginForm'
import {Route, Switch, withRouter} from 'react-router-dom'
import LandingPage from './components/LandingPage'

class App extends Component {

  state = {
    user: {},
    meals: [],
    totalCal: []
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
        this.preMountFetch(json)
      })
      this.props.history.push('/profile')
    } else {
      this.props.history.push('/welcome')
    }
  }

  preMountFetch = (user) => {
    fetch("http://localhost:3000/schedules")
    .then(res => res.json() )
    .then(schedules => {
      console.log(schedules);
      let find = schedules.filter(id => {
        // debugger
        let fetId = parseInt(id.user_id)
        // debugger
        return user.user_id === fetId
      })

      if (find.length > 0) {
        // debugger
        this.preMountFood(user, find)
      }
    })
  }

  preMountFood = (user, schedules) => {
    fetch("http://localhost:3000/foods")
    .then(res => res.json() )
    .then( json => {
      console.log("json ", schedules);
      let finder = json.filter( food => {
        // debugger
        return food.day_id === schedules[schedules.length- 1].day_id
      })

      this.setState({
        meals: finder
      })
      this.preMountTotalCal(schedules)
    })

  }

  preMountTotalCal = (schedules) => {

    fetch(`http://localhost:3000/days/${schedules[schedules.length- 1].day_id}`)
    .then(res => res.json() )
    .then( day => {
      // debugger
      this.setState({ totalCal: day.total_calory})
    })
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
      // this.setState({
      //   user: resp.user
      // })
      let token = localStorage.getItem('token')
      // debugger
      if (localStorage.token !== "undefined") {
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
          this.preMountFetch(json)
        })
        this.props.history.push('/')
      } else {
        localStorage.clear()
        alert("User Not Found")
        this.props.history.push('/login')
      }
    })

  }

  saveHandler = (event, day) => {
    event.preventDefault()
    // console.log("User: ", this.props.user);
    // debugger
    let date = "Wednesday"


    fetch("http://localhost:3000/days", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "Accepts":  "application/json"
      },
      body: JSON.stringify({
        total_calory: day.totalCal,
        breakfast: day.breakfast,
        lunch:  day.lunch,
        dinner: day.dinner,
        date: date,
      })
    })
    .then( res => res.json() )
    .then( json => {
      // debugger
      console.log("dayfetch: ", json);
      this.setState({ totalCal: json.total_calory})
      this.postSchedule(json)
    })
  }

  postSchedule = (day) => {
    fetch("http://localhost:3000/schedules", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "Accepts":  "application/json"
      },
      body: JSON.stringify({
        user_id: this.state.user.user_id,
        day_id: day.id
      })
    })
    .then( res => res.json() )
    .then(resp => {
      console.log("schedule ", resp);
      // debugger
      document.location.reload()

      // let breakfast = day.breakfast[0].map( food => {
      //   return ({ meal: "breakfast", food_name: food.food_name, calory: food.nf_calories})
      // })
      //
      // let lunch = day.lunch[0].map( food => {
      //   return ({ meal: "lunch", food_name: food.food_name, calory: food.nf_calories})
      // })
      // let dinner = day.dinner[0].map( food => {
      //   return ({ meal: "dinner", food_name: food.food_name, calory: food.nf_calories})
      // })
      // this.setState({ meals: [breakfast, lunch, dinner]})
    })
  }

  handleLogClick = (e) => {
    e.preventDefault()

    // debugger

    if (localStorage.token) {
      localStorage.removeItem('token')

      // e.target.innerText = "Login"
      this.props.history.push('/welcome')
    }
  }

  render() {
    // console.log(this.state.user);


    return (<div className="view" >
        <NavBar handleLogClick={this.handleLogClick}/>
        <Switch>
          <Route exact path="/welcome" render={(props) =>  (<LandingPage />)} />
          <Route exact path="/signup" render={(props) =>  (<SignUp createSubmit={this.createSubmit}/>)} />
          <Route exact path="/login" render={(props) =>  (<LoginForm loginSubmit={this.loginSubmit}/>)} />
          <Route exact path="/profile" render={(props) =>  (<Profile user={this.state}/>)} />
          <Route exact path="/" render={(props) =>  (<CaloryContainer user={this.state.user} createSubmit={this.state.user} meals={this.state.meals} saveHandler={this.saveHandler}/>)} />
        </ Switch>
      </ div>
    )
  }
}
// <Route path="/login" component={LoginForm} />
// <Route exact path="/" component={CaloryContainer} />

export default withRouter(App) ;
