import React, { Component } from "react";

class Carousel extends Component {
  constructor() {
    super();

    this.state = {
      position: 0
    };

    this.renderImages = this.renderImages.bind(this);
    this.onClickRight = this.onClickRight.bind(this);
    this.onClickLeft = this.onClickLeft.bind(this);
  }

  renderImages() {
    const { position } = this.state;
    const { images } = this.props;
    return <img className="carousel__image" src={images[position]} />;
  }

  onClickRight() {
    const { position } = this.state;
    if (position >= 2) {
      this.setState({
        position: 0
      });
    } else {
      this.setState({
        position: position + 1
      });
    }
  }

  onClickLeft() {
    const { position } = this.state;
    if (position === 0) {
      this.setState({
        position: 2
      });
    } else {
      this.setState({
        position: position - 1
      });
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.onClickRight();
    }, 5000);
  }

  render() {
    return (
      <div className="carousel">
        <div className="carousel__slider">{this.renderImages()}</div>
        {/* <button
          onClick={this.onClickRight}
          className="carousel__button carousel__button--right"
        >
          &gt;
        </button>
        <button
          onClick={this.onClickLeft}
          className="carousel__button carousel__button--left"
        >
          &lt;
        </button> */}
      </div>
    );
  }
}

export default Carousel;
