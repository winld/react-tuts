//react里面通过ref来获取组件或者dom元素，要使用ref之前必须先调用React.createRef方法来陈黄健一个ref
import React, { Component, createRef } from "react";
import PropTypes from "prop-types";

export default class TodoInput extends Component {
  static propTyps = {
    textBtn: PropTypes.string
  };
  static defaultProps = {
    textBtn: "添加"
  };
  constructor() {
    super();
    this.state = {
      inputVale: "xxx",
      checkValue: true
    };
    //constructor
    this.inputDom = createRef();
  }
  handleInputChange = e => {
    this.setState({
      inputVale: e.currentTarget.value
    });
  };
  handleAddClick = () => {
    // 实际的项目中，这里还需要区队this.state.inputValue做验证，如果验证通过，在执行下面的方法
    if (this.state.inputVale === "") {
      return false;
    }
    const inputDate = {
      title: this.state.inputVale,
      completed: this.state.checkValue
    };
    this.props.addTodo(inputDate);
    this.setState(
      {
        inputVale: "",
        checkValue: true
      },
      () => {
        this.inputDom.current.focus();
      }
    );
  };
  checkChange = e => {
    this.setState({
      checkValue: e.currentTarget.value === "true" ? true : false
    });
  };

  //   绑定页面回车事件
  componentDidUpdate() {
    document.addEventListener("keyup", this.handleKyUp);
  }
  handleKyUp = e => {
    if (e.keyCode === 13) {
      this.handleAddClick();
    }
  };

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.state.inputVale}
          onChange={this.handleInputChange}
          ref={this.inputDom}
        />
        <input
          type='radio'
          name='isComponent'
          value={true}
          onChange={this.checkChange}
          checked={this.state.checkValue}
        />
        已完成
        <input
          type='radio'
          name='isComponent'
          value={false}
          onChange={this.checkChange}
          checked={!this.state.checkValue}
        />
        未完成
        <button onClick={this.handleAddClick}>{this.props.textBtn}</button>
      </div>
    );
  }
}
