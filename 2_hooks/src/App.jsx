import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="bg-amber-200 inline">
        current count is 
        <span id="count-display" className="inline bg-amber-800">
          {count}
        </span>
      </div>
      {/* setCount(count + 1) this is function calling
      if we pass setCount it acts undefined here because setCount needs an argument
      so we make a anonomous function told him to call this function when button is clicked */}

      <button onClick={() => setCount(count + 1)}>
        add
      </button>
    </>
  );
}

export default App
