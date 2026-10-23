
import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CounterActions } from './store/counterSlice/slice';
import { ThemeContext } from './context/themeContext';

const App = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const { theme, toggleTheme, lightCount, darkCount } =
    useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === 'light' ? 'white' : '#222',
        color: theme === 'light' ? 'black' : 'white',
        minHeight: '100vh',
        padding: '20px'
      }}
    >
      <h1>Redux Counter: {count}</h1>

      <button
        onClick={() =>
          dispatch(CounterActions.incrementFunction(count + 1))
        }
      >
        Increment
      </button>

      <button
        onClick={() =>
          dispatch(CounterActions.decrementFunction(count - 1))
        }
      >
        Decrement
      </button>

      <hr />

      <h2>Light: {lightCount}</h2>
      <h2>Dark: {darkCount}</h2>

      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

export default App;
