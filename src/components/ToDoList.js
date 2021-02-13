import React from 'react'
import ToDoItem from './ToDoItem'
import {useSelector} from "react-redux"
function ToDoList() {

    const List= useSelector(state => state.List)

    console.log(List);
    return (
        <div className="my-3">
            
            {List.map(item =>(
               <ToDoItem id={item.id} title={item.title}/> 
            ))}
        </div>
    )
}

export default ToDoList
