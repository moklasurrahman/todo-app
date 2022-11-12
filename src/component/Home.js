import React, { useState } from 'react'
import {v4 as uuidv4} from "uuid"


import Todos from './Todos'
import Style from './home.module.css'
import NewTodo from './NewTodo'




// const DummyTodos = [
//     {
//         "id": 1,
//         "title": "todo title 1",
//         "desc": "todo descriptions is here...."
//     },
//     {
//         "id": 2,
//         "title": "todo title 2",
//         "desc": "todo2 descriptions is here...."
//     }
// ]

const Home = () => {

    const [todos, setTodos] = useState([])

    const newTodoAdd = (todo) => {
        // console.log(todo)

        setTodos((prevTodos) => {
            return [...prevTodos, {id: uuidv4(), todo}]
        })
    }


    const handleRemoveTodo = (id) => {
        // alert(id)
        setTodos((prevTodos) => {
            const filteredTodos = prevTodos.filter((todo) => todo.id !== id)
            return filteredTodos
        })
        
    }

  return (

    <div className={Style.container}>
        <h1 style={{color: "tomato"}}>Todo App</h1>
        <NewTodo newtodo = {newTodoAdd}></NewTodo>
        <Todos todos={todos} onRemoveTodo={handleRemoveTodo}></Todos>
    </div>
  )
}

export default Home