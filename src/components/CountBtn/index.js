import React, { Component } from "react";
import { CounterConsumer } from "../../ContextStore";
export default class CountBtn extends Component {
  render() {
    return (
      <CounterConsumer>
        {({ onIncrement, onDecrement }) => {
          const handler =
            this.props.type === "increment" ? onIncrement : onDecrement;
          return <button onClick={handler}>{this.props.children}</button>;
        }}
      </CounterConsumer>
    );
  }
}
