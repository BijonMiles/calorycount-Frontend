import React, {Component} from 'react'
import List from './List'
import Lunchlist from './Lunchlist'
import Dinnerlist from './Dinnerlist'


class CaloryList extends Component {

  render() {
    console.log(this.props.breakfast);

    let foodArr = this.props.breakfast.map( food => {
      return <List food={food} key={food.food_name} />
    })

    let foodArr1 = this.props.lunch.map( food => {
      return <Lunchlist food={food} key={food.food_name} />
    })

    let foodArr2 = this.props.dinner.map( food => {
      return <Dinnerlist food={food} key={food.food_name} />
    })
    return (
      <div>
        Breakfast:
        {foodArr}
        <br />
        Lunch:
        {foodArr1}
        <br />
        Dinner:
        {foodArr2}
      </div>
    )
  }
}

export default CaloryList;
