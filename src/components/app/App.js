import React, { useEffect } from 'react';
import './App.css';

import ExerciseBuilder from '../exercise-builder';
import NavBar from '../navigation-bar';
import { BrowserRouter } from 'react-router-dom';



function App() {

  const appRoutes = [
    {
      to: '/monitores',
      title: 'Monitores'
    },
    {
      to: '/about',
      title: 'Sobre',
    },
    {
      to: '/materials',
      title: 'Materiais',
    },
    {
      to: '/extras',
      title: 'Extras',
    }
  ]

  useEffect(() => {    
    return () => {}
  }, [  ])

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar routes={appRoutes}/>
        <ExerciseBuilder/>
      </BrowserRouter>
    </div>
  );
}

export default App;
