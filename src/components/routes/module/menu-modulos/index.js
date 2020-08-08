import React from 'react';
import { Link } from '../../../navigation-bar';

const modulos = [
  {
    nome: 'Modulo 1',
    link: '/roteiros/modulo1',
    texto: 'Esse é o primeiro módulo',
  },
  {
    nome: 'Modulo 2',
    link: '/roteiros/modulo2',
    texto: 'Esse é o segundo módulo',
  },
  {
    nome: 'Modulo 3',
    link: '/roteiros/modulo3',
    texto: 'Esse é o terceiro módulo',
  },
]

const MenuModulos = function(props) {

  return (
    <div>
      {
        modulos &&
        modulos.map(({ nome, texto, link }) => {
          return (
            <div key={link}>
              <h4>{nome}</h4>
              <p>{texto}</p>
              <Link to={link}>Ir para módulo</Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default MenuModulos;
