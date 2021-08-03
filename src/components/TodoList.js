// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    const handleClick = ()=> {
        props.handleClear()
    }

    return(
        <div>
            {props.todo.map(task => (
                <Todo handleDone={props.handleDone} key={task.id} task={task}/>
            ))}
            <button onClick={handleClick}>Clear Todo Item</button>
        </div>
    )
}

export default TodoList