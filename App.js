import './App.css';
import {useReducer} from 'react';

const initialState={count:0};

//state contains current state of the store
//action contains the dispatched action from view
const reducer=(state,action)=>{
  switch(action.type){
    case "increment":
      return {count:state.count+1}
      case "decrement":
        return {count:state.count-1}
        case "reset":
          return{count:action.payload}
    default:
      return state;
  }
}
function App() {
 //app component subscribing to the store
  const [state,dispatch]=useReducer(reducer,initialState);
  
  return (
    <div className='App'>
     <p>Count is : {state.count}</p>
     {/* onClick is the view dispatching action*/}
     <button onClick={()=>dispatch({type:"increment"})}>+</button>
     <button onClick={()=>dispatch({type:"decrement"})}>-</button>
   <button onClick={()=>dispatch({type:"reset",payload:10})}>Reset</button>
     </div>
  );
}

export default App;
