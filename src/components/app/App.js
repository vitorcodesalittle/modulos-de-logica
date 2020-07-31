import React from 'react';
import './App.css';

import NavBar from '../navigation-bar';
import { BrowserRouter } from 'react-router-dom';
import Router, { appRoutes } from '../routes';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar routes={appRoutes.map(routerProps => ({ to: routerProps.path, title: routerProps.title }))}/>
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
