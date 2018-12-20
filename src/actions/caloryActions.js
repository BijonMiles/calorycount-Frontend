
export const searchFood = (food) => {
  return fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=${this.state.searchValue}`, {
    headers: {
      "x-app-id":  "97c3d696",
      "x-app-key": "b917f70c30fe547dae0cd76495324a13",
      "Content-Type": 'application/json'
    }

  })
  .then( r => r.json())
  .then( json => {
    console.log(json);
    console.log(json.common[0].food_name);
    this.moreFetch(json)
  })
}

// moreFetch = (info) => {
// // console.log(info.common[0].food_name);
// // debugger
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
//       "query":  this.state.searchValue
//     })
//
//   })
//   .then( r => r.json())
//   .then( json => {
//     console.log(json);
//     this.setState({ searchSelect: json })
//
//   })
// }
