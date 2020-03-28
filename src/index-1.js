import React from "react";
import ReactDOM from "react-dom";
//这种方式可以理解为创建最简单的react元素
// const app = (
//   <div>
//     <h1>我的第一个react demo!!</h1>
//   </div>
// );

// const creatApp = props => {
//   return (
//     <div>
//       {/* 只要在jsx里要插入js的代码，就加一层花括号即可，注释也是js，所以这里的注释就加了一层花括号*/}
//       <h1>我的第一个{props.title}!!</h1>
//     </div>
//   );
// };
// const app = creatApp({
//   title: "react demo"
// });

//创建组件的第一种方式：箭头函数，但是这个名字要大写开始
const App = props => {
  return (
    <div>
      {/* 只要在jsx里要插入js的代码，就加一层花括号即可，注释也是js，所以这里的注释就加了一层花括号*/}
      <h1 title={props.title}>我的第一个{props.title}!!箭头函数的方式</h1>
    </div>
  );
};
ReactDOM.render(<App title='react demo' />, document.querySelector("#root"));
