import React from 'react'

const Dinner = (props) => {

  // console.log(props);

  return ( <div>
      <ul> {props.food.food_name ? props.food.food_name : null }, Calories: {props.food.nf_calories ? props.food.nf_calories : null} |<span className="x-button" onClick={(e) => props.handleListDel(e, props.food, "dinner")}>x</span>| </ul>
    </div>
  )
}

export default Dinner
