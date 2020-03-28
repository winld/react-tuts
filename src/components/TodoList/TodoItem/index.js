import React, { Component } from "react";
const noop = () => {};
export default class index extends Component {
  // //老版本的坑：constructor里面通过props来初始化了一个state，在props修改之后，这个state不会再次更新
  // constructor(props) {
  //   super();
  //   this.state = {
  //     componentText: props.completed ? "已完成" : "未完成"
  //   };
  // }
  // //那么需要借助于UNSAFE_componentWillReceiveProps来做一次修正
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     componentText: nextProps.completed ? "已完成" : "未完成"
  //   });
  // }

  constructor() {
    super();
    this.state = {
      componentText: ""
    };
  }
  //静态方法没有this，在对象创建之前static就会执行
  static getDerivedStateFromProps(props) {
    //不管是更新还是初始化中都会执行
    return {
      componentText: props.completed ? "已完成" : "未完成"
    };
  }
  handelChange = () => {
    // this.props.onCompeletedChange &&
    //   this.props.onCompeletedChange(this.props.id);
    //验证是否有函数，如果没有赋值空函数
    const { onCompeletedChange = noop, id } = this.props;
    onCompeletedChange(id);
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.completed !== this.props.completed;
  }

  render() {
    console.log(`${this.props.title}`);
    const { id, title, completed } = this.props;
    return (
      <li key={id} id={id}>
        <input
          type='checkbox'
          checked={completed}
          onChange={this.handelChange}
        />
        <span>
          {/* {title} {completed ? "已完成" : "未完成"} */}
          {title} {this.state.componentText}
        </span>
      </li>
    );
  }
}
