import React, { Component } from "react";
const noop = () => {};
export default class index extends Component {
  handelChange = () => {
    // this.props.onCompeletedChange &&
    //   this.props.onCompeletedChange(this.props.id);
    //验证是否有函数，如果没有赋值空函数
    const { onCompeletedChange = noop, id } = this.props;
    onCompeletedChange(id);
  };
  render() {
    const { id, title, isComponented } = this.props;
    return (
      <li key={id} id={id}>
        <input
          type='checkbox'
          checked={isComponented}
          onChange={this.handelChange}
        />
        <span>
          {title} {isComponented ? "已完成" : "未完成"}
        </span>
      </li>
    );
  }
}
