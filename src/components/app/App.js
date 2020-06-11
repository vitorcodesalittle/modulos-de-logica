import React, { useEffect } from 'react';
import './App.css';

import ExerciseBuilder from '../exercise-builder';

function App() {

  useEffect(() => {    
    return () => {}
  }, [  ])

  return (
    <div className="App">
      <ExerciseBuilder/>
    </div>
  );
}

export default App;
