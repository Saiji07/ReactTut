import { use } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
function Todo()
{
    let [List,setList]= useState([{task:"Sample task" , id:uuidv4(),isDone:false}]);
    let [newTask,setNewTask]=useState("");
    let updatetask=(event)=>{
setNewTask(event.target.value);

    }
    let updateList=()=>{
        setList([...List,{task:newTask,id:uuidv4(),isDone:false}]);
        newTask="";


    }
    let deletelist=(id)=>{
let copy=List.filter((todo)=>todo.id!=id);
setList(copy);
    }

    let markDone=(id)=>{
        setList((prevTodo)=>
            prevTodo.map(
                (todo)=>{
if(todo.id==id)
{
    return{
        ...todo,isDone:true
    };

}
else{
    return todo;
}
                }
            )

        )
    }
    return(
<div>
    <h4>ToDo List</h4>
    <input placeholder="Enter New Task"  value={newTask} onChange={updatetask}></input>
    <br></br> <br>
    </br>
    <button onClick={updateList}>Add Task</button>
    <ul>
  {List.map((lp) => (
   
    <li key={lp.id} >
        <span style={lp.isDone? {textDecorationLine:"line-through"}:{}}> {lp.task}  </span>
    <button onClick={()=>deletelist(lp.id)}> Delete</button>
   <button onClick={()=>markDone(lp.id)}>Done</button>
    </li>
  ))}
</ul>
</div>
    );

}
export default Todo