import React, {Component} from 'react'
import List from './List'
import Lunchlist from './Lunchlist'
import Dinnerlist from './Dinnerlist'


class CaloryList extends Component {

  render() {
    console.log(this.props.breakfast);

    // debugger

    let foodArr = this.props.breakfast.map( food => {
      // debugger
      return <List food={food} key={food.food_name} handleListDel={this.props.handleListDel}/>
    })

    let foodArr1 = this.props.lunch.map( food => {
      return <Lunchlist food={food} key={food.food_name} handleListDel={this.props.handleListDel}/>
    })

    let foodArr2 = this.props.dinner.map( food => {
      return <Dinnerlist food={food} key={food.food_name} handleListDel={this.props.handleListDel} />
    })
    return (
      <div className="area" >


        <div className="breakfast-area">
          <strong > Total Cal: {this.props.totalCal} </strong> <br />
          Breakfast:
          <button className="button" onClick={(e) => this.props.saveHandler(e, this.props)} > Save </button>

          {foodArr}
        </div>
        <br />
        <div className="lunch-area">
          Lunch:
          {foodArr1}
        </div>
        <br />
        <div className="dinner-area">
          Dinner:
          {foodArr2}
        </div>
      </div>
    )
  }
}

export default CaloryList;
