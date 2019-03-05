import React from 'react'

const Lunchlist = (props) => {

  // console.log(props);

  return ( <div>
      <ul> {props.food.food_name}, Cal: {props.food.nf_calories} |<span className="x-button" onClick={(e) => props.handleListDel(e, props.food, "lunch")}>x</span>| </ul>
    </div>
  )
}

export default Lunchlist
