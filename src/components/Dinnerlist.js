import React from 'react'

const Dinner = (props) => {

  // console.log(props);

  return ( <div>
      <li> {props.food.food_name}, Calories: {props.food.nf_calories}</li>
    </div>
  )
}

export default Dinner
