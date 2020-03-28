import React from "react";
import { render } from "react-dom";
import App from "./App";

//如果想要全局的扩展React.Componenet的prototype,比如，想把ajax的方法全局挂在组件的this上，就可以使用下面的方式
//引入是所有的ajax请求
// import * as services from "./services";
//在prototype上挂在一个叫http的东西，然后就可以在组件内部通过this.http.方式名来执行一些操作
// React.Component.prototype.http = services;

render(<App />, document.querySelector("#root"));
