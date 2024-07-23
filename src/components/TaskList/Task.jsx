import { useState } from "react";
import { MdOutlineCheck } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
function Task(props) {
    //const [isCompleted, setIsCompleted] = useState(false);
  return (
    <div className='task'>
        <div className={!props.isCompleted ? "task-check" : "task-check completed"} onClick={() => props.handleComplete(props.id)}>
            {props.isCompleted && <MdOutlineCheck color="white" size={14}/>}
        </div>
        <p className={!props.isCompleted ? "task-text" : "task-text completed"}>{props.text}</p>
        <FaRegTrashCan className="task-trash" onClick={() => props.handleRemove(props.id)} size={12}/>
    </div>
  )
}

export default Task;