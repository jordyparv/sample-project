import './App.css';
import React from 'react'
function App() {
  /**
   * useState
   * useEffect
   * useRef
   * memo
   * useMemo
   * 
   * 
   */

  const [value, setValue] = React.useState(1)

  console.log(value)

  return (
    <div className="App">
      <button>+</button>
      <span>{'jordan'}</span>
      <button>-</button>
    </div>
  );
}

export default App;
