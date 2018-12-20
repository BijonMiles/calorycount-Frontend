import React from 'react'

const Display = props => {
  console.log(props);
  // debugger
  return (<div className="displaycard" >

      <img alt='oh no' src={props.food[0].photo.thumb} />
      <br />

      <button onClick={(e) => props.clickAdder(e, props.food[0])}> Add to List </button>
      <select onChange={props.changeType} >
        <option name="breakfast" value="breakfast">Breakfast</option>
        <option name="lunch" value="lunch">Lunch</option>
        <option name="dinner" value="dinner">Dinner</option>
      </select>

      <ul>
      <ul>Cal: {props.food[0].nf_calories} </ul>
      <ul>Protien: {props.food[0].nf_protein} </ul>
      <ul>Fiber: {props.food[0].nf_dietary_fiber} </ul>
      <ul>Carb: {props.food[0].nf_total_carbohydrate} </ul>
      <ul>Sodium: {props.food[0].nf_sodium} </ul>
      <ul>Sugars: {props.food[0].nf_sugars} </ul>
      <ul>Fat: {props.food[0].nf_total_fat} </ul>
      </ul>

    </div>
  )
}

export default Display;
