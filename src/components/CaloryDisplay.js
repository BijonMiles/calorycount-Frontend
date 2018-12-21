import React, { Component} from 'react'
import Display from './Display'
import { connect } from 'react-redux'

class CaloryDisplay extends Component {

  // imageRender = () => {
  //   if (this.props.searchSelect) {
  //     console.log(this.props.searchSelect.foods[0].photo.highres);
  //     return this.props.searchSelect.foods[0].photo.highres
  //   }
  // }

  render() {
    console.log("Before map: ", this.props.searchSelect);
    let display
    if (this.props.searchSelect.foods) {

      display = this.props.searchSelect.foods.map( (food, idx) => {
        // debugger
        return (<Display food={this.props.searchSelect.foods} key={food.tags.tag_id} idx={idx}
        clickAdder={this.props.clickAdder}
        type={this.props.type}
        changeType={this.props.changeType}/>)
      })
    }

    return ( <div className="calorieCard">

        {display}

      </div>)
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    search: state.searchValue
  }
}

export default connect(mapStateToProps)(CaloryDisplay);
