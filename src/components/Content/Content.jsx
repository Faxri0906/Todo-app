import { useState } from "react";
import InputForm from "../InputForm/InputForm";
import TaskList from "../TaskList/TaskList";
import "./Content.scss";
function Content() {
    const [todos, setTodos] = useState([]);
    function addTodo(value) {
        setTodos((prevState) => [...prevState,
            {
                id: Math.floor(Math.random() * 100),
                title: value,
                isComplited: false,
            },
        ]);
    }
    function handleIsCompleted(id){
        let todo = todos.find((todo) => todo.id === id);
        setTodos((prevTodos) => prevTodos.map((todo) =>
            todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo
        ));
    }
    function handleRemoveTodo(id){
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }
  return (
    <div className="content">
        <InputForm handleAddTodo={addTodo}/>
        <TaskList handleRemove={handleRemoveTodo} handleComplete={handleIsCompleted} todos={todos}/>
    </div>
  )
}

export default Content;