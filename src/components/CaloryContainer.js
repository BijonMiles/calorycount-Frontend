import React, {Component} from 'react'
import SearchForm from './SearchForm'
import CaloryDisplay from './CaloryDisplay'


class CaloryContainer extends Component {

  state = {
    searchValue: "",
    searchSelect: []
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
  console.log(info.common[0].food_name);
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



  render () {
    // console.log(this.state);
    return (
      <div>
        CaloryContainer

        Search: <SearchForm
        searchHandler={this.searchHandler}
        searchSubmit={this.searchSubmit} />
        <br/>

        <CaloryDisplay searchSelect={this.state.searchSelect}/>

      </div>
    )
  }
}

export default CaloryContainer;
