import React from 'react'


// let foodInfo
// let foodFetch = (props) => {
//
//   fetch("https://trackapi.nutritionix.com/v2/natural/nutrients", {
//
//     method: "POST",
//
//     headers: {
//       "x-app-id":  "97c3d696",
//       "x-app-key": "b917f70c30fe547dae0cd76495324a13",
//       "Content-Type": 'application/json'
//     },
//     body: JSON.stringify({
//       "query":  props.food.food_name
//     })
//
//   })
//   .then( r => r.json())
//   .then( food => {
//     console.log("get this");
//     console.log(food);
//     foodInfo = food.foods[0]
//
//     return foodInfo
//
//   })
// }

const Display = props => {
  console.log("this: ", props);
  // foodFetch(props)
  // debugger

  return (<div className="displaycard" >

      <img alt='oh no' src={props.food[props.idx].photo.thumb} />
      <br />
      <br />
      <span> Name: {props.food[props.idx].food_name} </span> <br />
      <span> Serving: {props.food.serving_qty} </span>


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
// <ul>
//   <ul>Cal: {props.foodInfo.nf_calories ? props.foodInfo.nf_calories : "N/A"} </ul>
//   <ul>Protien: {props.foodInfo.nf_protein ? props.foodInfo.nf_protein : "N/A"} </ul>
//   <ul>Fiber: {props.foodInfo.nf_dietary_fiber ? props.foodInfo.nf_dietary_fiber : "N/A"} </ul>
//   <ul>Carb: {props.foodInfo.nf_total_carbohydrate ? props.foodInfo.nf_total_carbohydrate : "N/A"} </ul>
//   <ul>Sodium: {props.foodInfo.nf_sodium ? props.foodInfo.nf_sodium : "N/A"} </ul>
//   <ul>Sugars: {props.foodInfo.nf_sugars ? props.foodInfo.nf_sugars : "N/A"} </ul>
//   <ul>Fat: {props.foodInfo.nf_total_fat ? props.foodInfo.nf_total_fat : "N/A"} </ul>
// </ul>

export default Display;
