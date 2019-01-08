import React from 'react'

const List = (props) => {

  // console.log(props);

  return ( <div>
      <ul> {props.food.food_name}, Cal: {props.food.nf_calories}</ul>
    </div>
  )
}

export default List
