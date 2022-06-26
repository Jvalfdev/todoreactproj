import React from 'react';


const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
    //Here I an write javascript code and functions
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();  
        setTodos([
            ...todos, 
            {text: inputText, completed: false, id: Math.random() * 1000}]);  
        setInputText("");
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    };

    return (
        <form>
            <input 
            value={inputText} 
            onChange={inputTextHandler} 
            type="text" className="todo-list"/>
            <button onClick={submitTodoHandler} type="submit" className="todo-button">
                <i class ="fas fa-plus"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" class="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;