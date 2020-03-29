import React, { Component } from "react";
import { CounterConsumer } from "../../ContextStore";
//定义一个Counter组件
export default class Counter extends Component {
  render() {
    return (
      //使用CounterConsumer来接收count
      <CounterConsumer>
        {/* //注意：Consumer的 children必须是一个方法，这里方法有一个参数，这里就是Provider的参数*/}
        {/* //注意：Consumer的 children必须是一个方法，这里方法有一个参数，这里就是Provider的参数*/}
        {({ count }) => {
          return <span>{count}</span>;
        }}
      </CounterConsumer>
    );
  }
}
