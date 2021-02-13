import React from 'react'
import ToDoInput from './components/ToDoInput'

import ToDoList from './components/ToDoList'
import 'bootstrap/dist/css/bootstrap.css';
function App() {
    return (
        <div className="m-5">
            <ToDoInput/>
            <ToDoList/>
           
        </div>
    )
}

export default App
