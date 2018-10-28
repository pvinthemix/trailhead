import React, { Component } from 'react';
import './styles/Card.scss';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.trailName = props.trail.trailName;
    this.parkName = props.trail.parkName;
    this.difficultyRating = props.trail.difficultyRating;
    this.distanceRoundtripMiles = props.trail.distanceRoundtripMiles
    this.state = {
      fullCard: false
    }
  }

  render() {
    console.log(this.props)
    return ( 
      <div className="card" >
        <h1> Trail Name: {this.trailName} </h1> 
        <h2> Park Name: {this.parkName} </h2> 
        <div className="side-items">
          <div className="difficulty-rating" >
            <p>Difficulty Rating: {this.difficultyRating}</p>
          </div>
          <div className="distance-roundtrip"> 
            <p>Distance Roundtrip:{this.distanceRoundtripMiles}</p>
          </div>
        </div> 
      </div>
    )
  }
}