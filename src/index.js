import React from "react";
import { render } from "react-dom";

//定义组件的 定义组件的第二种方式，使用类继承React.Component
// const app = {
//   tag: "div",
//   attr: {
//     className: "app",
//     id: "appRoot"
//   },
//   children: [
//     {
//       tag: "h1",
//       attr: {
//         className: title
//       },
//       children: ["jsx的原理"]
//     }
//   ]
// };
//所以rect在真正的渲染的时候会把上面的代码变异为下面的样子来圆形，下面的代码就是合法的js代码
class App extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "app", id: "appRoot" },
      React.createElement("h1", { className: "title" }, "sdgsgs")
    );
    // <div className='app' id='appRoot'>
    //   <h1 className='title'>{this.props.titile}</h1>
    // </div>
  }
}
//类组件渲染的原理
// const app = new App({
//   title: "创建组件的第二种方式：通过类创建"
// }).render();

//render是reactdom提供的一个方法，这个方法通常只会用一次
render(
  <App titile='创建组件的第二种方式：通过类创建' />,
  document.querySelector("#root")
);

// 在react 16以前，使用这种方式来创建的一个类组件
// React.creactClass({
//    render(){
//    Renturn <h1>dfsd</h1>
// }
// })
