import Task from './Task';
import './TaskList.scss';
function TaskList({ todos, handleComplete, handleRemove}) {
  return (
    <div className='task-list container'>
        <div className="task-list-top">
            <h1>Current</h1>
            <h1>Completed</h1>
        </div>
        {todos.length > 0 ? (<div className="task-list-items">
            {todos.map((todo) => (
                <Task handleRemove={(id) => handleRemove(id)} isCompleted={todo.isCompleted} handleComplete={(id) => handleComplete(id)} id={todo.id} text={todo.title} key={todo.id}/>
            ))}
        </div>) : (<div className="task-list-items task-list-items-empty">
            <p>The ToDo list is empty please add task to be done Organized life with todo</p>
        </div>)}
    </div>
  )
}

export default TaskList;