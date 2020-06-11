import React from 'react';
import ExerciseBuilder from './exercise-builder';
import { unmountComponentAtNode } from 'react-dom';
import { render, act, fireEvent } from '@testing-library/react';
let container = null;

describe("ExerciseBuillder", () => {
  
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

  test("insere fórmulas corretamente", () => {
    const { getByTestId, getByText } = render(<ExerciseBuilder/>, container);
    const input = getByTestId("builder-input");
    const button = getByTestId("builder-submit");
    act(() => {
      fireEvent.change(input, { target: { value: 'aloalo' }})
    })
    expect(input.value).toBe('aloalo')
    act(() => {
      fireEvent.click(button);
    })
    expect(input.value).toBe('')
    const element = getByText(/alo/);
    expect(element).toBeInTheDocument();
  })
})