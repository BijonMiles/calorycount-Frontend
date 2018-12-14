import React, {Component} from 'react'

class SearchForm extends Component {



  render() {
    return (
      <div className="search_bar">
        <form  onSubmit={this.props.searchSubmit}>
          <input name="searchValue" placeholder="Enter Food Name" onChange={this.props.searchHandler}/>
          <button> Info </button>
        </ form>
      </ div>
    )
  }
}

export default SearchForm;
