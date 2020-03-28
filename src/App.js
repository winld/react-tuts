import React, { Component, Fragment } from "react";
import { TodoHeader, TodoInput, TodoList, Like } from "./components";
import { getTodos } from "./services";
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
      todos: [],
      isLoading: false
    };
  }
  addTodo = todoData => {
    console.log(todoData);
    //这样写出事了，3不是一个数组，因为push语句返回的是数据的长度
    // this.setState({
    //   todos: this.state.todos.push({
    //     id: Math.random(),
    //     title: todoData.todoTitle,
    //     completed: todoData.completed
    //   })
    // });

    //对的代码
    // this.setState({
    //   todos: this.state.todos.concat({
    //     id: Math.random(),
    //     title: todoData.todoTitle,
    //     completed: todoData.completed
    //   })
    // });
    // const newTodos = this.state.todos.slice();
    const newTodos = [...this.state.todos];
    newTodos.push({
      id: Math.random(),
      title: todoData.title,
      completed: todoData.completed
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
            todo.completed = !todo.completed;
          }
          return todo;
        })
      };
    });
  };

  getTodoData = () => {
    this.setState({
      isLoading: true
    });
    getTodos()
      .then(resp => {
        console.log(resp);
        if (resp.status === 200) {
          this.setState({
            todos: resp.data
          });
        } else {
          //错误处理
        }
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };
  componentDidMount() {
    this.getTodoData();
    // console.log(this.http.getTodos);
  }
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
        {this.state.isLoading ? (
          <div>loading.....</div>
        ) : (
          <TodoList
            todos={this.state.todos}
            onCompeletedChange={this.onCompeletedChange}
          />
        )}

        <Like />
      </Fragment>
    );
  }
}
