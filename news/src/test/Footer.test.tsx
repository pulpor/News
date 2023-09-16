import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'

import { render } from '@testing-library/react'
import { test } from 'vitest'

import { Footer } from '../components/Footer'

describe('testando o footer', () => {
  test('deve renderizar o componente', () => {
    const handleButtonClick = () => {} //callback
    const { getByTestId } = render(
      <BrowserRouter>
        <Footer handleButtonClick={ handleButtonClick } />
      </BrowserRouter>
    )
    const footer = getByTestId('footer')
    expect(footer).toBeInTheDocument()
  })
})
