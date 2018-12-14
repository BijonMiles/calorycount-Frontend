import React, { Component} from 'react'
import Display from './Display'

class CaloryDisplay extends Component {

  // imageRender = () => {
  //   if (this.props.searchSelect) {
  //     console.log(this.props.searchSelect.foods[0].photo.highres);
  //     return this.props.searchSelect.foods[0].photo.highres
  //   }
  // }

  render() {
    // console.log(this.props.searchSelect);
    let display
    if (this.props.searchSelect.foods) {

      display = this.props.searchSelect.foods.map(food => {
        // debugger
        return <Display food={this.props.searchSelect.foods} key={food.tags.tag_id} />
      })
    }
    return ( <div className="search_bar">
        Display
        {display}
      </div>)
  }
}

export default CaloryDisplay;
