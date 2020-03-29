import React, { Component, createContext } from "react";
//createContext这个方法的结果是一个对象，里面有两个组件Provider和Consumer
//Provider用于提供状态
//Consumer用于接收状态
const {
  Provider,
  Consumer: CounterConsumer //解构出来重新赋值给一个CounterConsumer的组件
} = createContext();

//封装一个基本的Provider，因为直接使用Provider不方便管理状态
class CounterProvider extends Component {
  constructor() {
    super();
    //这里的状态就是共享的，
    //任何被CounterProvider的后代组件都可以通过CounterConsumer来接收这个值
    this.state = {
      count: 100
    };
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  render() {
    return (
      //使用Provider这个组件，它必须要有一个value值，这里的value里面可以传递任何的数据，一般还是传递一个对象比较合适
      <Provider
        value={{
          count: this.state.count,
          onIncrement: this.increment,
          onDecrement: this.decrement
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
export { CounterProvider, CounterConsumer };
