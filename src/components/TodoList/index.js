import React, { Component } from "react";
import TodoItem from "./TodoItem/index.js";
export default class index extends Component {
  render() {
    console.log(this.props.todos);
    return (
      <ul>
        {this.props.todos.map(todo => {
          return (
            // <TodoItem
            //   id={todo.id}
            //   title={todo.title}
            //   isComponented={todo.isComponented ? "已完成" : "未完成"}
            // />
            <TodoItem key={todo.id} {...todo}></TodoItem>
          );
        })}
      </ul>
    );
  }
}
