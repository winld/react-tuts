import React, { Component } from "react";

const withCoyperight = YourComponent => {
  return class WithCoyperight extends Component {
    render() {
      return (
        <div>
          <YourComponent {...this.props} />
          <span>高阶组件</span>
        </div>
      );
    }
  };
};
export default withCoyperight;
