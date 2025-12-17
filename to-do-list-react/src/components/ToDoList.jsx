import {useState} from "react";

const ToDoList=()=>{

    const [input,setInput]=useState("");
    const [tasks,setTasks]=useState([]);
    const [editIndex,setEditIndex]=useState(null);

    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log("Form submitted");
      const taskText=input.trim();

      if(taskText===""){
         alert("Enter Task!");
         return;
      }

      // either edit mode is on or not 
      if(editIndex!==null){
         // edit mode is on   
        const updatedTasks=tasks.map(task=>(task.id===editIndex?{...task,text:taskText}:task));
        setTasks(updatedTasks);
        setEditIndex(null);
      }
      else{
         // task is there for first time 
         setTasks([...tasks,{id:Date.now(),text:taskText}]);            
      }
      setInput("");
    }

    function handleRemove(id){
        // remove the tasks id 
        const updatedTasks =tasks.filter(task=>task.id!==id);   
        setTasks(updatedTasks);     
    }

    function handleEdit(task){
         setEditIndex(task.id);  
         setInput(task.text);
    }

    return(
    <>
       <h4>To Do List: </h4>
        <form onSubmit={handleSubmit} >
            <input type="text" className="toDoInput"
              value={input}
             onChange={(e)=>setInput(e.target.value)}
            />
            <button type="submit" className="toDoButton">{editIndex!==null?"Edit Task":"Add Task"}</button>
        </form>
        <ul className="formList">
         {  
            tasks.map((task)=>(
                <li key={task.id}>
                    <span>{task.text}</span>
                    <button onClick={()=>handleRemove(task.id)}>Remove</button>
                    <button onClick={()=>handleEdit(task)}>Edit</button>
                </li>
            ))
         }
        </ul>
       
    </>);
}

export default ToDoList;