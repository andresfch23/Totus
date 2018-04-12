import React, { Component } from 'react';
import Image1 from '../assets/images/publi1.jpg';
import Image2 from '../assets/images/publi2.jpg';
import Image3 from '../assets/images/publi3.jpg';

class Carousel1 extends Component {
  render() {
    return (
      <div>
          <img className="carouselimage__" src={Image1} alt={}></img>
          <img className="carouselimage__" src={Image2} alt={}></img>
          <img className="carouselimage__" src={Image3} alt={}></img>
      </div>
    )
  }
};

export default Carousel1;