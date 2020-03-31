import React, { Component } from "react";
import Another from "./Another";
class App extends Component {
  render() {
    return (
      <div>
        我的App组件
        <Another name='another' />
      </div>
    );
  }
}

export default App;
