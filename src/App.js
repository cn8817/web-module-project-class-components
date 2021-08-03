import React from 'react';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo'

const todo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
        todo: todo
    }
  }

  handleDone = (id)=> {
    this.setState({
      todo: this.state.todo.map(item => {
        if(item.id === id){
          return({
            ...item,
            done: !item.completed
          })
        }
        return item
      })
    })
  }

  handleAddItem = (task) => {
    const newItem = {
      task: task,
      id: Date.now(),
      completed: false,
    }

    this.setState({
      todo: [...this.state.todo, newItem]
    })
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todo: this.state.todo.filter(item=>{
        return(item.completed === false)
      })
    })
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleAddItem={this.handleAddItem}/>
        <Todo handleClear={this.handleClear} handleDone={this.handleDone} todo={this.state.todo}/>
      </div>
    );
  }
}
 
export default App;
