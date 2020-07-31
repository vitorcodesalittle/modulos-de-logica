import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, act, fireEvent } from '@testing-library/react';
import NavigationBar from './index';
import { BrowserRouter } from 'react-router-dom';

let container = null;

describe("NavigationBar component", () => {

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  })

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  })

  test('render correct links', () => {
    const mockRoutes = [
      {
        to: '/route1',
        title: 'Rota 1'
      },
      {
        to: '/route2',
        title: 'Rota 2'
      }
    ];
    const { getByText } = render(
      <BrowserRouter>
        <NavigationBar routes={mockRoutes}/>
      </BrowserRouter>
    )
    const linkRoute1 = getByText(/Rota 1/);
    const linkRoute2 = getByText(/Rota 2/);
    expect(linkRoute1).toBeInTheDocument();
    expect(linkRoute2).toBeInTheDocument();
  });

  test('changes location when clicking in a link, and add selected class to it', () => {
    const mockRoutes = [
      {
        to: '/route1',
        title: 'Rota 1'
      },
      {
        to: '/route2',
        title: 'Rota 2'
      }
    ];
    const { getByText } = render(
      <BrowserRouter>
        <NavigationBar routes={mockRoutes}/>
      </BrowserRouter>
    )
    expect(window.location.pathname).not.toBe('/route1');
    const linkRoute1 = getByText(/Rota 1/);
    act(() => {
      fireEvent.click(linkRoute1);
    })
    expect(window.location.pathname).toBe('/route1');
    expect(linkRoute1.className.includes(' selected')).toBe(true);
  });
})
