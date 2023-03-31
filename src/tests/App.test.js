import React from 'react';
import { render, screen, userEvent } from '@testing-library/react';
import App from '../App';
import Table from '../components/Table';
import Filter from '../components/Filter';

describe('Testa o componente App', () => {
  it('Testa o que está sendo renderizado na tela', () => {
    render(<App />);
    expect(screen.getByText(/Projeto Star Wars Search/i)).toBeInTheDocument();
    expect(<Table />).toBeInTheDocument();
    expect(<Filter />).toBeInTheDocument();
  });
  it('Testa se o filtro de nome está funcionando', () => {
    render(<App />);
    userEvent.type(screen.getByTestId('name-filter'), 'Tatooine');
    expect(screen.getByTestId('name-filter')).toHaveValue('Tatooine');
  });
  it('Testa se o filtro de coluna está funcionando', () => {
    render(<App />);
    userEvent.selectOptions(screen.getByTestId('column-filter'), 'population');
    userEvent.click(screen.getByTestId('button-filter'));
    expect(screen.getByTestId('column-filter')).toHaveValue('population');
  });
  it('Testa se o filtro de comparação está funcionando', () => {
    render(<App />);
    userEvent.selectOptions(screen.getByTestId('comparison-filter'), 'maior que');
    userEvent.click(screen.getByTestId('button-filter'));
    expect(screen.getByTestId('comparison-filter')).toHaveValue('maior que');
  });
  it('Testa se o filtro de valor está funcionando', () => {
    render(<App />);
    userEvent.type(screen.getByTestId('value-filter'), '100000');
    userEvent.click(screen.getByTestId('button-filter'));
    expect(screen.getByTestId('value-filter')).toHaveValue('100000');
  });
});

