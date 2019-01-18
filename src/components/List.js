import React from 'react'

const List = (props) => {

  // console.log(props);

  return ( <div>
      <ul> {props.food.food_name} |<span className="x-button" onClick={(e) => props.handleListDel(e, props.food, "breakfast")}>x</span>|, Cal: {props.food.nf_calories}  </ul>
    </div>
  )
}

export default List
