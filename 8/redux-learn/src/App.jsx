import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { DECREMENT, INCREMENT } from './Redux/Action/Type';
function App() {

    const {counter}=useSelector(state=>state);
    const dispatch=useDispatch();
    const increment=()=>{
      dispatch({type:INCREMENT});
    }
    const decrement=()=>{
      dispatch({type:DECREMENT});
    }
  return (
    <div >
        <h1>counter APP</h1>
        <p>{counter}</p>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default App
