import React, { useState } from 'react'

import Style from './newTodo.module.css'

const NewTodo = (props) => {

    const [todo, setTodo] = useState({title: "", desc: ""})

    const { title, desc} = todo

    const changeHandel = (e) => {
        const name = e.target.name
        setTodo((oldTodo) => {
            return {...oldTodo, [name]: e.target.value}
        }) 
        }


    const handelSubmit = (e) => {
        e.preventDefault()
        props.newtodo(todo)
        // console.log(todo)
        setTodo({title: "", desc: ""})


    }
  
    return (
    <form className={Style.forms} onSubmit={handelSubmit}>
        
        <div className={Style["form-field"]}>
        <label htmlFor='title'>Title: </label>
        <input className={Style.input} type='text' name='title' id='title' value={title} onChange={changeHandel}></input>
        </div>

        <div className={Style["form-field"]}>
            <label htmlFor='desc'>Description: </label>
            <textarea name='desc' id='desc' value={desc} onChange={changeHandel}></textarea>
        </div>
        <button type='submit'> Add todo</button>
    </form>
  )
}

export default NewTodo