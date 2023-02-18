import {createContext, useReducer} from 'react'
export const MyContext = createContext();

const initialState = [];

const reducer = (state,action)=>{
  console.log(action)
  switch(action.type){ 
    case 'insert' :
    return[...state, {id:Date.now(), todo:action.data, checked:true}];
    case 'update' : 
    state.map(obj=>(
      if(obj.id == action.data.id){
        obj.todo = action.data.todo
      }
      return obj;
    ))
    return;
    case 'remove' : return;
    return state.filter(obj => obj.id !== action.id)
  }
}

const TodoContext = ({children}) => {
  const [data,dispatch] = useReducer(reducer,initialState);
  return (
    <MyContext.Provider value={ {data,dispatch} }>
      {children}
      </MyContext.Provider>
  )
}

export default TodoContext