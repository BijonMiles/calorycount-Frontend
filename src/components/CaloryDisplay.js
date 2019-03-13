import React, { Component} from 'react'
import Display from './Display'
import { connect } from 'react-redux'

class CaloryDisplay extends Component {


  state = {
    eachFood: [],
  }

  foodFetch = (info, idx) => {

    fetch("https://trackapi.nutritionix.com/v2/natural/nutrients", {

      method: "POST",

      headers: {
        "x-app-id":  "97c3d696",
        "x-app-key": "b917f70c30fe547dae0cd76495324a13",
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        "query":  info.food_name
      })

    })
    .then( r => r.json())
    .then( food => {
      console.log("get this");
      console.log(food);

      this.setState({ eachFood: food.foods[0]})
      // debugger
    })
  }


  render() {
    // console.log("Before map: ", this.props.searchResults);
    let display
    if (this.props.searchSelect.foods) {
    // if (this.props.searchResults) {
      // debugger
      // display = this.props.searchResults.map( (food, idx) => {
      //   if (idx < 5) {
      //
      //     // this.foodFetch(food, idx)
      //     // console.log("past this", this.state.eachFood);
      //
      //     return (<Display food={food} foodInfo={this.state.eachFood} key={food.tag_id} idx={idx}
      //     // return (<Display food={this.state.searchSelect.foods} foodInfo={this.state.eachFood} key={food.tag_id} idx={idx}
      //       clickAdder={this.props.clickAdder}
      //       type={this.props.type}
      //       changeType={this.props.changeType}/>)
      //   }
      // })

      display = this.props.searchSelect.foods.map( (food, idx) => {
        // debugger
        return (<Display food={this.props.searchSelect.foods} key={food.tags.tag_id} idx={idx}
        clickAdder={this.props.clickAdder}
        type={this.props.type}
        changeType={this.props.changeType}/>)
      })


    }

    return ( <div className="calorieCard">
        {display}
      </div>)
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    search: state.searchValue
  }
}

export default connect(mapStateToProps)(CaloryDisplay);
