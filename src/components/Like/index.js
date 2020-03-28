import React, { Component } from "react";

export default class Like extends Component {
  constructor() {
    super();
    this.state = {
      isLike: false
    };
  }
  handleLikeedClick = () => {
    //使用这种方式修改数据在react中是不允许的，能修改数据，但是洁面不会重新渲染
    //this.state.isLike=!this.state.isLike;
    //要修改数据，就使用setState方法，setState方法可以有两个参数
    //第一个参数又有两种情况,第一种情况是一个对象
    //this.setState({ isLike: !this.state.isLike });
    // 第二种情况是一个方法
    // setState是异步的
    this.setState(
      (prevState, props) => {
        console.log(prevState, props);
        return {
          isLike: !prevState.isLike
        };
      },
      () => {
        //由于setState是异步的，如果想要获取到最新的state，应该在这里毁掉里面获取
        console.log(this.state.isLike);
      }
    );
  };
  render() {
    return (
      <span onClick={this.handleLikeedClick}>
        {this.state.isLike ? "喜欢 ❤️" : "不喜欢 🙅‍♀️"}
      </span>
    );
  }
}
