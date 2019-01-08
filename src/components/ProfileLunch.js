import React from 'react'

const ProfileLunch = (props, idx) => {

  // console.log(props);
  // debugger
  return ( <div>
      <ul>
        {props.food.meal === "lunch" ? props.food.food_name : null}  {props.food.meal === "lunch" ? props.food.calory : null}
       </ul>
    </div>
  )
}

export default ProfileLunch
