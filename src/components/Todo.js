import React from "react";

const Todo = ({text, todo, setTodos, todos}) => {
    //Events
    const deleteHandler = () => {
        setTodos(todos.filter((element) => element.id != todo.id));
    };
    const completeHandler = () => {
        setTodos(todos.map((element_completed) => {
            if(element_completed.id == todo.id){
                return{
                    ...element_completed, completed : !element_completed.completed
                };
            }
            return element_completed;
            
            
        }));
    };
    return(
        <div className="ToDo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;