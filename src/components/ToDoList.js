import React from "react";
//Import components
import Todo from "./Todo";

const ToDoList = ({todos, setTodos, filterTodos}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filterTodos.map((ToDo) => (
                    <Todo 
                        setTodos = {setTodos} 
                        todos={todos} key={ToDo.id} 
                        todo={ToDo} 
                        text={ToDo.text}/>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;