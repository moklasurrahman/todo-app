import React from 'react'
import Todo from './Todo'

import Style from './todos.module.css'

const Todos = (props) => {
    // console.log(props.todos)
  
    return (
     
    <section className={Style.todos}>
        {props.todos.map((todo, index) => (
            <Todo key={todo.id} todo={todo.todo} id={todo.id} 
            onRemoveTodo={props.onRemoveTodo}></Todo>
        ))}
    
    </section>
    
  )
}

export default Todos