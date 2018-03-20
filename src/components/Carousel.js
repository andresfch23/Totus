import React, { Component } from 'react';
import Image1 from '../assets/images/publi1.jpg';
import Image2 from '../assets/images/publi2.jpg';
import Image3 from '../assets/images/publi3.jpg';
import Carousel from 'nuka-carousel';
import Decorators from 'nuka-carousel';

class Carousel1 extends Component {
  render() {
    return <Carousel decorators={Decorators} width="100%">
        <img className="carousel__image" src={Image1} alt="img1" />
        <img className="carousel__image" src={Image2} alt="img2" />
        <img className="carousel__image" src={Image3} alt="img3" />
      </Carousel>;
  }
};

export default Carousel1;