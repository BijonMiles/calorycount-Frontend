import React, { Component} from 'react'
import BreakfastList from './BreakfastList'
import ProfileLunch from './ProfileLunch'
import ProfileDinner from './ProfileDinner'

class Profile extends Component {

  render() {
    console.log("meal: ", this.props);
    let mealArray = this.props.user.meals.map( (food, idx) => {

      return <BreakfastList food={food} key={food.id ? food.id : "N/A"}/>
    })

    let mealArray1 = this.props.user.meals.map( (food, idx) => {

      return <ProfileLunch food={food} key={food.id ? food.id : "N/A"}/>
    })

    let mealArray2 = this.props.user.meals.map( (food, idx) => {

      return <ProfileDinner food={food} key={food.id ? food.id : "N/A"}/>
    })
    // debugger

    console.log(this.props.user.user.first_name);
    return (
      <div className="profile-color" id="user-profile">
        <div className="top">


            <h2> Welcome back, {this.props.user.user.first_name}</h2>
            <h3>Username: {this.props.user.user.username}</h3>
            <h4> Cal: {this.props.user.user.totalCal ? this.props.user.user.totalCal : "N/A"} </h4>

          <hr />

        </div>

        <div className="bottom">
          <h4>Breakfast</h4>
          <span> {mealArray} </span>
          <br />
          <h4>Lunch</h4>
          <span> {mealArray1} </span>
          <br />
          <h4>Dinner</h4>
          <span> {mealArray2} </span>
        </div>
      </div>
    )
  }
}

export default Profile;
