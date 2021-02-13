import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addItem} from "../redux/actions/list"
function ToDoInput() {

const [form,setForm]= useState({

    title:'',
    id:Math.floor(Math.random() * 100) + 1,
})

const dispatch=useDispatch();

const add= (e)=> {


    e.preventDefault();

    dispatch(addItem(form))

}
    return (
        <div>
           

           <div className="row mx-2">

               <input type="text" value={form.title} onChange={(e)=> setForm({...form, title:e.target.value,id:Math.floor(Math.random() * 100) + 1})} />
               <button type="button" className="btn btn-warning" onClick={add}>Add</button>
           </div>
        </div>
    )
}

export default ToDoInput
