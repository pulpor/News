import '@testing-library/jest-dom'

import { test } from 'vitest'

import { calculateDaysAgo, formatIntroduction } from '../utils/Helpers'
import { MockNews } from '../utils/mock/mockData'

describe('teste para helpers', () => {
  test('formatIntroduction formata o texto corretamente', () => {
    const textoComParenteses = 'Este é um exemplo (p.p.) de introdução.'
    expect(formatIntroduction(textoComParenteses)).toBe(
      'Este é um exemplo  de introdução.'
    )

    const textoComHífen = 'Esta é uma introdução - com hífen.'
    expect(formatIntroduction(textoComHífen)).toBe(
      'Esta é uma introdução.'
    )

    const textoSemAlterações = 'Esta é uma introdução sem alterações.'
    expect(formatIntroduction(textoSemAlterações)).toBe(
      'Esta é uma introdução sem alterações.'  )
  })

  test('calculateDaysAgo calcula a diferença de dias corretamente', () => {
    const today = new Date()
    const fiveDaysAgo = new Date(today)
    fiveDaysAgo.setDate(today.getDate() - 5)
  
    const formattedDate = `${fiveDaysAgo.getDate()}/${fiveDaysAgo.getMonth() + 1}/${fiveDaysAgo.getFullYear()} 12:00:00`
  
    const result = calculateDaysAgo(formattedDate)
  
    expect(result).toBe('5 dias atrás')
  })
    
  test('calculateDaysAgo retorna corretamente para data válida', () => {
    const publicationDate = MockNews.news[0].items[0].data_publicacao
    const result = calculateDaysAgo(publicationDate)

    expect(result).toBe('3 dias atrás')
  })

  test('calculateDaysAgo retorna "Hoje" para data atual', () => {
    const today = new Date()
    const formattedDate = `${today.getDate()}/${today
      .getMonth() + 1}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
    const result = calculateDaysAgo(formattedDate)

    expect(result).toBe('Hoje')
  })

  test('calculateDaysAgo retorna "Formato de data inválido" para data inválida', () => {
    const invalidDate = 'data inválida'
    const result = calculateDaysAgo(invalidDate)

    expect(result).toBe('Formato de data inválido')
  })

  test('formatIntroduction remove espaços em branco no início e fim', () => {
    const inputText = '   Texto com espaços em branco no início e fim.   '
    const expectedText = 'Texto com espaços em branco no início e fim.'
    const result = formatIntroduction(inputText)

    expect(result).toBe(expectedText)
  })

  test('formatIntroduction retorna o texto até o primeiro ponto', () => {
    const inputText = 'Este é um texto de exemplo. Ele tem mais texto depois do ponto.'
    const expectedText = 'Este é um texto de exemplo.'
    const result = formatIntroduction(inputText)

    expect(result).toBe(expectedText)
  })
})
