import React, {Component} from 'react'
import SearchForm from './SearchForm'
import CaloryList from './CaloryList'
import CaloryDisplay from './CaloryDisplay'



class CaloryContainer extends Component {

  state = {
    searchValue: "",
    searchSelect: [],
    breakfast: [],
    lunch: [],
    dinner: [],
    type: []
  }

  searchHandler = (e) => {

    this.setState({
      [e.target.name]:  e.target.value
    })

  }

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
      console.log(json);
      console.log(json.common[0].food_name);
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
      this.setState({ searchSelect: json, type: "breakfast" })

    })
  }

  clickAdder = (event, food) => {
    event.preventDefault()
    console.log(this.state.type);
    // debugger
    if (this.state.type === "breakfast") {
      this.setState({ breakfast: [...this.state.breakfast, food]})
    } else if (this.state.type === "lunch") {
      this.setState({ lunch: [...this.state.lunch, food]})
    } else {
      this.setState({ dinner: [...this.state.dinner, food]})
    }

  }

  changeType = (event) => {
    event.preventDefault()

    this.setState({
      type: event.target.value
    })
  }




  render () {
    // console.log(this.state.user);
    return (
      <div >
        <div className="calorieList split2" >
          <CaloryList breakfast={this.state.breakfast}
          lunch={this.state.lunch}
          dinner={this.state.dinner}/>
        </div>
        <div className="caloriedisplay split" >
          <SearchForm
          searchHandler={this.searchHandler}
          searchSubmit={this.searchSubmit} />

          <CaloryDisplay
          changeType={this.changeType}
          searchSelect={this.state.searchSelect}
          clickAdder={this.clickAdder}/>
        </div>


      </div>
    )
  }
}

export default CaloryContainer;
