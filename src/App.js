import React, { useEffect, useState } from "react";
import './App.css';
//Importing components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilterTodos(todos.filter(todo => todo.completed===true));
        break;
      case "uncompleted":
        setFilterTodos(todos.filter(todo => todo.completed===false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    
    localStorage.setItem("todos", JSON.stringify(todos));
    
  };
  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };


  return (
    <div className="App">
      <header>
        <h1>Pum ToDo List</h1>
      </header>
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}/>
      <ToDoList 
        filterTodos={filterTodos}
        setTodos = {setTodos} 
        todos={todos}/>
      
    </div>
  );
}

export default App;
