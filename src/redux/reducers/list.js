





export default (state=[],action)=>{


    switch(action.type){
        

        case 'ADD_ITEM':

        return [ ...state,action.payload];


        case  'UPDATE_ITEM':


        return state.map((post) => post.id ===action.payload.id ? action.payload: post)


        case 'DELET_ITEM':

        return state.filter((post) => post.id !== action.payload);


       
  
        default:
            return state;
    }
}