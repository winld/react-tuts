//React Hooks是react16.8（16.7alpha）更新的一项特性，它可以让你在不便携class的情况下使用state以及其他的React特性

//两个常见的api，就是useState和useEffect，需要先引入
import React, { useState, useEffect } from "react";
import { render } from "react-dom";
//useState是一个方法，这个方法的参数就是默认值，结果是一个数组，数组的元素第一个就是state，第二个就相当于setState
//解构出来的数组中的两个值
const Counter = () => {
  const [count, setCount] = useState(0);
  //useEffect的参数就是一个回调，不管是组件挂载还是更新都会触发这个回调方法，
  //类似于componentDidMount和componentDidUpdate的结合
  useEffect(() => {
    document.title = `当前count是：${count}`;
  });
  return (
    <div>
      <h5>当前count是：{count}</h5>
      {/* 这里的setCount就是所生成的方法（第二个），注意的setState不一样的地方在于参数，这里的参数就是一个心智即可 */}
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      {/* 这里就是setState创建的值（第一个） */}
      <span>{count}</span>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

render(<Counter />, document.querySelector("#root"));
