const initState = {
  searchValue: "Apple",
  searchSelect: []
}

export const reducer = (state = initState, action) => {
  switch(action.type){
    case "SEARCH_SELECT":
      return {...state, searchSelect: action.payload}

    default:
      return state
  }
}

export default reducer
