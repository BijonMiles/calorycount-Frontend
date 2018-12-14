import React from 'react'

const Display = props => {
  console.log(props);
  // debugger
  return (<div className="search_bar" >

      <img alt='oh no' src={props.food[0].photo.thumb} />

      <ul>
      <li>Calories: {props.food[0].nf_calories} </li>
      <li>Protien: {props.food[0].nf_protein} </li>
      <li>Fiber: {props.food[0].nf_dietary_fiber} </li>
      <li>Carbohydrates: {props.food[0].nf_total_carbohydrate} </li>
      <li>Sodium: {props.food[0].nf_sodium} </li>
      <li>Sugars: {props.food[0].nf_sugars} </li>
      <li>Fat: {props.food[0].nf_total_fat} </li>
      </ul>


    </div>
  )
}

export default Display;
