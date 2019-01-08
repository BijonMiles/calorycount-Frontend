import React, {Component} from 'react'

class LandingPage extends Component {
  render() {
    return ( <div>
      <br />
      <br />
      <div className="land">
      <h1> Welcome to CaloryCount</h1>
      <h4> Why Count when we can count for you </h4>
      </div>

      <div className="together">
        <div className="about">
          <h3 className="more">  About</h3>

          With a Passion for health, wellness and meeting goals, CaloryCount works with a
          database from nutritionix to update and balance your daily eating, nutritional ingredients
          and calories for selected food. We aim to make easy the daily choices for eating and schedule
          a better plan for a later day.


        </div>

        <div className="about">
          <h3 className="more"> Mission: </h3>

          1. Meet yours goal weight <br />
          2. Healthier Living <br />
          3. Feel Better about You <br />

        </div>


      </div>
      </div>)
  }
}


export default LandingPage
