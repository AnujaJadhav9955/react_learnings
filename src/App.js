import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './actions/actions';

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)

   const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello {counter}{isLogged}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h3>{isLogged}</h3>
    </div>
  );
}

export default App;
