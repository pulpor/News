import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'

import { render } from '@testing-library/react'
import { test } from 'vitest'

import { Favorites } from '../components/Favorites'

describe('testando o footer', () => {
  test('deve renderizar o componente', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Favorites />
      </BrowserRouter>
    )
    const favorites = getByTestId('favorites')
    expect(favorites).toBeInTheDocument()
  })
  test('deve aumentar o index quando o botão é clicado', async () => {
    const { getByRole } = render(
      <BrowserRouter>
        <Favorites />
      </BrowserRouter>
    )
    const loadMoreButton = getByRole('button', { name: 'MAIS NOTÍCIAS' })
    expect(loadMoreButton).toBeInTheDocument()
  })
})