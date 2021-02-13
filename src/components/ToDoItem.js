import React,{useState} from 'react'
import {useDispatch}  from "react-redux";
import {deleteItem,updateItem}  from "../redux/actions/list"
function ToDoItem({id,title}) {

    const dispatch = useDispatch();
    const delet = ()=> {
   
        dispatch(deleteItem(id))

    }

    const [editable,setEditable]= useState(false);
    const [newTitle,setnewTitle]= useState(title);


   const edit= ()=> {

    

    if(editable){
             setnewTitle(newTitle);
        dispatch(updateItem({id,newTitle}))
    }
    setEditable(!editable)

   }
    return (
        <div>
            
            <div className="row mx-2 align-items-center">
           <div>{id}</div>
           <div className="col">
               {editable ? 
               
               <input type="text" value={newTitle} onChange={(e)=> setnewTitle(e.target.value)}  placeholder={title}/> :
               
               
               <h3>{title}</h3>}</div>
        <button className='btn btn-primary m-2' onClick={edit}>edit</button>
        <button className='btn btn-danger m-2' onClick={delet} >delete</button>

</div>
        </div>
    )
}

export default ToDoItem
