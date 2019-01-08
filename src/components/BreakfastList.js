import React from 'react'

const BreakfastList = (props, idx) => {

  // console.log(props);
  // debugger
  return ( <div>
      <ul>
        {props.food.meal === "breakfast" ? props.food.food_name : null}  {props.food.meal === "breakfast" ? props.food.calory : null}
       </ul>
    </div>
  )
}

export default BreakfastList
