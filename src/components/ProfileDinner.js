import React from 'react'

const ProfileDinner = (props, idx) => {

  // console.log(props);
  // debugger
  return ( <div>
      <ul>
        {props.food.meal === "dinner" ? props.food.food_name : null}  {props.food.meal === "dinner" ? props.food.calory : null}
       </ul>
    </div>
  )
}

export default ProfileDinner
