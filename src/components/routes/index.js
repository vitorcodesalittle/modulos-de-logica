import React from 'react';
import { Route } from 'react-router';
import About from './about';
import Extras from './extras';
import Home from './home';
import Materials from './materials';
import Monitores from './monitores';


export const appRoutes = [
  {
    path: '/',
    title: 'Home',
    component: Home,
    exact: true,
  },
  {
    path: '/monitores',
    title: 'Monitores',
    component: Monitores,
  },
  {
    path: '/about',
    title: 'Sobre',
    component: About,
  },
  {
    path: '/materials',
    title: 'Materiais',
    component: Materials,
  },
  {
    path: '/extras',
    title: 'Extras',
    component: Extras
  }
]

const Router = function (props) {

  return (
    <>
    {
      appRoutes.map((routeProps) => <Route key={routeProps.path} {...routeProps}/>)
    }
    </>
  )

}

export default Router;
