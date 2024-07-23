import { useState } from "react";
import "./InputForm.scss";
import { FiPlusCircle } from "react-icons/fi";
export default function InputForm(props) {
    const [value, setValue] = useState("");
    function addHandler(){
        if(value.trim().length > 0){
            props.handleAddTodo(value);
        }
    }
  return <div className="input-form container">
    <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Add your next task"/>
    <button onClick={addHandler}>Create <FiPlusCircle size={18}/></button>
  </div>;
}