import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './home';
import Notas from './notas';
import Cronograma from './cronograma';
import MenuModulos from './roteiros/menu-modulos';
import Modulo from './roteiros/modulo';
import Submodulo from './roteiros/submodulos'

export const appRoutes = [
  {
    path: '/',
    title: 'Home',
    component: Home,
    exact: true,
  },
  {
    path: '/roteiros',
    title: 'Roteiros',
    component: MenuModulos,
    exact: true,
    routes: [
      {
        path: '/roteiros/:modulo',
        component: Modulo,
        exact: true,
        routes: [
          {
            path: '/roteiros/:modulo/:submodulo',
            component: Submodulo,
            exact: true
          }
        ]
      }
    ]
  },
  {
    path: '/cronograma',
    title: 'Cronograma',
    component: Cronograma,
  },
  {
    path: '/notas',
    title: 'Notas',
    component: Notas,
  },
]

const Router = function (props) {

  return (
    <>
      <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={MenuModulos} path='/roteiros' exact/>
        <Route component={Modulo} path='/roteiros/:modulo' exact/>
        <Route component={Submodulo} path='/roteiros/:modulo/:submodulo' exact/>
        <Route component={Cronograma} path='/cronograma' exact/>
        <Route component={Notas} path='/notas' exact/>
      </Switch>
    </>
  )

}

export default Router;
