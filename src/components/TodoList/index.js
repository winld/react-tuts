import React, { Component } from "react";
import TodoItem from "./TodoItem/index.js";
import PropTypes from "prop-types";

export default class index extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
      })
    ).isRequired,
    onCompeletedChange: PropTypes.func
  };
  render() {
    console.log(this.props.todos);
    return (
      <ul>
        {this.props.todos.map(todo => {
          return (
            // <TodoItem
            //   id={todo.id}
            //   title={todo.title}
            //   completed={todo.completed ? "已完成" : "未完成"}
            // />
            <TodoItem
              onCompeletedChange={this.props.onCompeletedChange}
              key={todo.id}
              {...todo}
            ></TodoItem>
          );
        })}
      </ul>
    );
  }
}
