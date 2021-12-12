// import { remove } from "dom-helpers";
import { useState, useEffect } from "react";
import "./watch.css"

export default function Watch(props) {
  const [list, newList] = useState({
    name: props.name,
  });
  const [complete, setComplete] = useState(true);
  
  const removeitem = (id) => {
    
    console.log(id);
    // var element = document.getElementById(id);
    // element.style.display="none";
    if(id>-1){
       list.name.splice(id,1);
    newList({
      ...list,
      name:props.name,
    })

    }
   
    // const newlist1= list.name.filter((item)=>item.id!==id);
    // console.log(newlist1);
    // newList(newlist1)
  };
  const lineitem = (id) => {
   var btn = document.getElementsByTagName("button")[1].innerHTML;
   var element1 = document.getElementById(id);

   if(btn==="Complete"){
    element1.style.textDecoration="line-through";
   }else if(btn==="undo"){
    element1.style.textDecoration="none";

   }
   
  setComplete(!complete)

  };
// useEffect(removeitem)
// useEffect(removeitem,[list.name])
 
  return (
    <>
    <h2>Lets Get Some Work Done!</h2>
      <ul>
        {list.name.map((user, index) => {
          return (
            <li id={index} >
              {user} 
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
              <button
                className="btn btn-primary"
                onClick={() => lineitem(index)}
              >
                {complete?"Complete":"undo"}
              </button>
              &nbsp;&nbsp;&nbsp;
            
              <button
                className="btn btn-danger"
                onClick={() => removeitem(index)}
              >
                Delete
              </button> 
            <br/>
            <br/>
            
            </li>
          );
        })}
      </ul>
     
    </>
  );
}
