import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, act } from '@testing-library/react';
import Exercise from './exercise';
let container = null;

describe("O Component Exercise", () => {

  beforeEach(() => {
    // configurar o elemento do DOM como o alvo da renderização
    container = document.createElement("div");
    // container *deve* ser anexado ao documento para que os eventos ocorram corretamente.
    document.body.appendChild(container);

  })

  afterEach(() => {
    // limpar na saída
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test("renderiza corretamente", () => {
    const exerciseEnunciate = "lalalala";
    const { getByText, ...stuff } = render(<Exercise enunciate={exerciseEnunciate}/>, container);
    let exerciseElement = getByText(new RegExp(`${exerciseEnunciate}`));
    expect(exerciseElement).toBeInTheDocument();
  })
})