import { useState } from "react"
import Watch from "./watch/watch";
import "./todo.css"
export default function ToDo(){
const [todo,todoUpdate]=useState({
    
    name:"",
    
});
const [ToDolist,up]=useState({
    name:[],
})
const handleInputChange=(e)=>{
    todoUpdate({
        ...todo,
        name:e.target.value
    })
}

const add=(e)=>{
    
ToDolist.name.push(todo.name);
todoUpdate({
    ...todo,
    name: ""
})
console.log(ToDolist.name);
}

    return(
        <>
        <div className="bg">
    <h1>To Do App!</h1>
    <div>Add New to_DO</div>

    <div className="mb-3">
          
          <input
            type="text"
            className="form-control "
            id="exampleInputEmail1"
           
            name="name"
            value={todo.name}
            onChange={(e) => handleInputChange(e)}
          />
          <br/>
         
         <button type="submit" className="btn btn-primary" onClick={(e) => add(e)}>
          Add
        </button>


          
        </div>
        </div>
        <br/>
        <br/>
        <br/>
        <Watch name={ToDolist.name}/>

        
      
      
    
        </>
    )
}