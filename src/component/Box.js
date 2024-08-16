import React, { Component } from 'react';

class Box extends Component {
  render() {
    let result;

    if (
      this.props.title === "Computer" &&
      this.props.result !== "tie" &&
      this.props.result !== ""
    ) {
      result = this.props.result === "win" ? "lose" : "win";
    } else {
      result = this.props.result;
    }

    return (
      <div className={`box ${result}`}>
        <h1>{this.props.title}</h1>
        <h2 className='text' data-testid="item-name">{this.props.item && this.props.item.name}</h2>
        <img className="item-img" src={this.props.item && this.props.item.img} alt={this.props.item && this.props.item.name} />
        <h2 className="text">{result}</h2>
      </div>
    );
  }
}

export default Box;
