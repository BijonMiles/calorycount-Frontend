import React, {Component} from 'react'
// import searchFood from '../actions/caloryActions'
import { connect } from 'react-redux'

class SearchForm extends Component {


  // searchSubmit = (e) => {
  //   e.preventDefault()
  //
  // }

  render() {
    return (
      <div className="searchInfo">
        <form  onSubmit={this.props.searchSubmit} >
          <input className="search" name="searchValue" placeholder="Enter Food Name" onChange={this.props.searchHandler}/>
          <button className="button">Search</button>
        </ form>
      </ div>
    )
  }
}

const mapStateToDispatch = (dispatch) => {
  // console.log();
  return {
    searchSelect: (fooditem) => dispatch({
      type: "SEARCH_SUBMIT",
      payload: fooditem
    })
  }
}

export default connect(null, mapStateToDispatch)(SearchForm);
