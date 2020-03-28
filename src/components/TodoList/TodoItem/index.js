import React, { Component } from "react";

export default class index extends Component {
  render() {
    console.log(this.props);

    return (
      <li key={this.props.id} id={this.props.id}>
        {this.props.title} {this.props.isComponented ? "已完成" : "未完成"}
      </li>
    );
  }
}
