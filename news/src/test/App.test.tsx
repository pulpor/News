import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'

import { render } from '@testing-library/react'
import { test } from 'vitest'

import App from '../App'

describe('testando renderizações do app', () => {
  test('deve renderizar o componente Header', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const header = getByTestId('header')
    expect(header).toBeInTheDocument()
  })

  test('deve renderizar o componente Hero', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const hero = getByTestId('hero')
    expect(hero).toBeInTheDocument()
  })

  test('deve renderizar o componente NavBar', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const navbar = getByTestId('navbar')
    expect(navbar).toBeInTheDocument()
  })

  test('deve renderizar o componente NewsList', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const newList = getByTestId('newlist')
    expect(newList).toBeInTheDocument()
  })

})
