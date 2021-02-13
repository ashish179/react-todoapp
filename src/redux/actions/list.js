

export  const addItem = (todo)=> async(dispatch)=>{



  
       

        dispatch({type:'ADD_ITEM',payload:todo});
  




}



export const deleteItem = (id)=> async(dispatch)=>{
    dispatch({type:'DELET_ITEM',payload:id});
    
    }


export const updateItem = (id,title)=> async(dispatch)=>{

    const {data}= {id,title}
    dispatch({type:'UPDATE_ITEM',payload:data});
    
    }