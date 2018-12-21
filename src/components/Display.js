import React from 'react'

const Display = props => {
  // console.log(props);
  // debugger
  return (<div className="displaycard" >

      <img alt='oh no' src={props.food[props.idx].photo.thumb} />
      <br />

      <button onClick={(e) => props.clickAdder(e, props.food[props.idx])}> Add to List </button>
      <select onChange={props.changeType} value={props.type}>
        <option name="breakfast" value="breakfast">Breakfast</option>
        <option name="lunch" value="lunch">Lunch</option>
        <option name="dinner" value="dinner">Dinner</option>
      </select>

      <ul>
      <ul>Cal: {props.food[props.idx].nf_calories} </ul>
      <ul>Protien: {props.food[props.idx].nf_protein} </ul>
      <ul>Fiber: {props.food[props.idx].nf_dietary_fiber} </ul>
      <ul>Carb: {props.food[props.idx].nf_total_carbohydrate} </ul>
      <ul>Sodium: {props.food[props.idx].nf_sodium} </ul>
      <ul>Sugars: {props.food[props.idx].nf_sugars} </ul>
      <ul>Fat: {props.food[props.idx].nf_total_fat} </ul>
      </ul>

    </div>
  )
}

export default Display;
