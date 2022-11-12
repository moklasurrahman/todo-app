import React from "react";
import Style from './todo.module.css'

const Todo = (props) => {
  const { title, desc} = props.todo
  const {id} = props


    const handleClick = () => {
        props.onRemoveTodo(id)
    }


  return (
    <article className={Style.todo}>
     
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      
      <div>
        <button onClick={()=>
        {handleClick(id)}}>
            <i className="fa fa-trash fa-2x"></i>
        </button>
      </div>

    </article>
  );
};

export default Todo;
