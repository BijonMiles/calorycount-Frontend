import React, {Component} from 'react'
import SearchForm from './SearchForm'
import CaloryList from './CaloryList'
import CaloryDisplay from './CaloryDisplay'
import Profile from './Profile'



class CaloryContainer extends Component {

  state = {
    searchValue: "",
    searchSelect: [],
    breakfast: [],
    lunch: [],
    dinner: [],
    searchResults: [],
    type: "breakfast",
    totalCal: 0,
  }

  searchHandler = (e) => {

    this.setState({
      [e.target.name]:  e.target.value
    })

  }

  // componentDidMount(){
  //   console.log("works");
  // }

  searchSubmit = (e) => {
    e.preventDefault()
    // console.log(this.state.searchValue);
    // debugger

    fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=${this.state.searchValue}`, {
      headers: {
        "x-app-id":  "97c3d696",
        "x-app-key": "b917f70c30fe547dae0cd76495324a13",
        "Content-Type": 'application/json'
      }

    })
    .then( r => r.json())
    .then( json => {
      // console.log(json);
      console.log("Search: ", json.common);
      // debugger
      this.setState({
        searchResults: json.common
      })
      this.moreFetch(json)
    })
  }

  moreFetch = (info) => {
  // console.log(info.common[0].food_name);
  // debugger
    fetch("https://trackapi.nutritionix.com/v2/natural/nutrients", {

      method: "POST",

      headers: {
        "x-app-id":  "97c3d696",
        "x-app-key": "b917f70c30fe547dae0cd76495324a13",
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        "query":  this.state.searchValue
      })

    })
    .then( r => r.json())
    .then( json => {
      console.log(json);
      this.setState({ searchSelect: json })

    })
  }

  clickAdder = (event, food) => {
    event.preventDefault()
    // console.log(this.state.type);

    let count = this.state.totalCal + food.nf_calories
    count.toFixed(1)



    if (this.state.type === "breakfast") {
      this.setState({ breakfast: [...this.state.breakfast, food]})
    } else if (this.state.type === "lunch") {
      this.setState({ lunch: [...this.state.lunch, food]})
    } else {
      this.setState({ dinner: [...this.state.dinner, food]})
    }
    this.setState({ totalCal: count })

  }

  changeType = (event) => {
    event.preventDefault()

    this.setState({
      type: event.target.value
    })
  }


  handleListDel = (event, food, type) => {
    event.preventDefault()
    console.log("breakfast : ", this.state.breakfast);
    console.log("food: ", food);
    let count = 0
    let item

    if (type === "breakfast") {

      let newBreakfast = this.state.breakfast.filter( name => {
        // debugger

        if ((name.food_name === food.food_name) && (count < 1)) {
          console.log(count);
          item = food.food_name

        }else {
          item = "N/A"
        }
        if (name.food_name === food.food_name) {
          count = count + 1
        }
        // debugger
        return (name.food_name !== item)
      })

      this.setState({ breakfast: newBreakfast})

    } else if (type === "lunch") {
      let newLunch = this.state.lunch.filter( name => {
        // debugger
        if ((name.food_name === food.food_name) && (count < 1)) {
          console.log(count);
          item = food.food_name

        }else {
          item = "N/A"
        }
        if (name.food_name === food.food_name) {
          count = count + 1
        }
        return (name.food_name !== item)
      })
      this.setState({ lunch: newLunch })

    } else if (type === "dinner") {
      let newDinner = this.state.dinner.filter( name => {
        if ((name.food_name === food.food_name) && (count < 1)) {
          console.log(count);
          item = food.food_name

        }else {
          item = "N/A"
        }
        if (name.food_name === food.food_name) {
          count = count + 1
        }
        return (name.food_name !== item)
      })
      this.setState({ dinner: newDinner })
    }
    let cal = this.state.totalCal

    cal = cal - food.nf_calories
    cal.toFixed(1)

    if (cal < 0.5) {
      cal = 0
    }
    this.setState({ totalCal: cal})

  }

  // saveHandler = (event, day) => {
  //   event.preventDefault()
  //   // console.log("User: ", this.props.user);
  //   // debugger
  //   let date = "Wednesday"
  //
  //   fetch("http://localhost:3000/days", {
  //     method: "POST",
  //
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accepts":  "application/json"
  //     },
  //     body: JSON.stringify({
  //       total_calory: 0,
  //       breakfast: day.breakfast,
  //       lunch:  day.lunch,
  //       dinner: day.dinner,
  //       date: date,
  //     })
  //   })
  //   .then( res => res.json() )
  //   .then( json => {
  //     // debugger
  //     this.postSchedule(json)
  //   })
  // }
  //
  // postSchedule = (day) => {
  //   fetch("http://localhost:3000/schedules", {
  //     method: "POST",
  //
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accepts":  "application/json"
  //     },
  //     body: JSON.stringify({
  //       user_id: this.props.user.user_id,
  //       day_id: day.id
  //     })
  //   })
  //   .then( res => res.json() )
  //   .then(console.log)
  // }




  render () {
    // console.log("Here ", this.state.searchSelect);
    return (
      <div >
        <div className="calorieList split2" >
          <CaloryList breakfast={this.state.breakfast}
          lunch={this.state.lunch}
          dinner={this.state.dinner}
          totalCal={this.state.totalCal}
          saveHandler={this.props.saveHandler}
          handleListDel={this.handleListDel}/>

        </div>
        <div className="caloriedisplay split" >
          <SearchForm
          searchHandler={this.searchHandler}
          searchSubmit={this.searchSubmit} />

          <CaloryDisplay
          type={this.state.type}
          changeType={this.changeType}
          searchSelect={this.state.searchSelect}
          searchResults={this.state.searchResults}
          clickAdder={this.clickAdder}/>
        </div>

      </div>
    )
  }
}

export default CaloryContainer;
