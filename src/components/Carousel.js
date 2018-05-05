import React, { Component } from "react";

class Carousel extends Component {
  constructor() {
    super();

    this.state = {
      position: 0,
    };

    this.renderImages = this.renderImages.bind(this);
    this.clickButtonRight = this.clickButtonRight.bind(this);
    this.clickButtonLeft = this.clickButtonLeft.bind(this);
    this.renderDots = this.renderDots.bind(this);
    this.onClickDots = this.onClickDots.bind(this);
  }

  renderImages() {
    const { position } = this.state;
    const { images } = this.props

    return <img className="carousel__image" src={images[position]} alt="" />
  }

  clickButtonRight() {
    const { position } = this.state;
    const { images } = this.props; 
    const finalImageIndex = images.length -1;

    if(position >= finalImageIndex) {
      this.setState({
         position: 0,
      });
    } else {
      this.setState({
        position: position + 1,
      });
    }
  }

  clickButtonLeft() {
    const { position } = this.state;
    const { images } = this.props; 
    const finalImageIndex = images.length -1;

    if(position === 0) {
      this.setState({
        position: finalImageIndex,
      })
    } else {
      this.setState({
        position: position - 1,
      })
    }
  }

  onClickDots(index) {
      this.setState({
        position: index,
      })
  }


  renderDots() {
    const { images } = this.props;
    const { position } = this.state;
 
    return images.map((item, index) => {
        return <span className={index === position ? "carousel__dots is-active" : "carousel__dots"} key={index} onClick={() => this.onClickDots(index)} />
    });
  }
 
  componentDidMount() {
    setInterval(() => {
      this.clickButtonRight();
    }, 5000);
  };

  render() {
    return (
      <div className="carousel">
          <div>{this.renderImages()}</div>
          <button className="carousel__button carousel__button--left" onClick={this.clickButtonLeft}>&lt;</button>
          <button className="carousel__button carousel__button--right" onClick={this.clickButtonRight}>&gt;</button>
          {/*<div className="carousel__buttons">{this.renderDots()}</div>*/}
      </div>
    );
  }
}

export default Carousel;
