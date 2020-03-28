import React, { Component, Fragment } from "react";
import { TodoHeader, TodoInput, TodoList, Like } from "./components";

export default class App extends Component {
  //   state = {
  //     title: "待办事项"
  //   };
  //dangerouslySetInnerHTML
  constructor() {
    super();
    this.state = {
      title: "待办事项",
      desc: "描述",
      article: "<div>文字</div>",
      todos: [
        {
          id: 1,
          title: "吃饭",
          assignee: "leo",
          isComponented: true
        },
        {
          id: 2,
          title: "睡觉",
          assignee: "ll",
          isComponented: false
        }
      ]
    };
  }
  addTodo = todoData => {
    console.log(todoData);
    //这样写出事了，3不是一个数组，因为push语句返回的是数据的长度
    // this.setState({
    //   todos: this.state.todos.push({
    //     id: Math.random(),
    //     title: todoData.todoTitle,
    //     isComponented: todoData.isComponented
    //   })
    // });

    //对的代码
    // this.setState({
    //   todos: this.state.todos.concat({
    //     id: Math.random(),
    //     title: todoData.todoTitle,
    //     isComponented: todoData.isComponented
    //   })
    // });
    // const newTodos = this.state.todos.slice();
    const newTodos = [...this.state.todos];
    newTodos.push({
      id: Math.random(),
      title: todoData.title,
      isComponented: todoData.isComponented
    });
    this.setState({
      todos: newTodos
    });
  };
  onCompeletedChange = id => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(todo => {
          if (todo.id === id) {
            todo.isComponented = !todo.isComponented;
          }
          return todo;
        })
      };
    });
  };
  render() {
    return (
      <Fragment>
        {/* <div dangerouslySetInnerHTML={{ __html: this.state.article }} />
        {this.state.todos.map(todo => {
          return <div key={todo.id}>{todo.title}</div>;
        })} */}
        <TodoHeader decs={this.state.desc} x={1} y={2}>
          {this.state.title}
        </TodoHeader>
        <TodoInput textBtn='add' addTodo={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          onCompeletedChange={this.onCompeletedChange}
        />
        <Like />
      </Fragment>
    );
  }
}
