import React from 'react'

export const calculateDaysAgo = (publicationDate: string) => {
  const today = new Date()
  const parts = publicationDate.match(/(\d+)/g)

  if (parts && parts.length === 6) {
    const [day, month, year, hours, minutes, seconds] = parts
    const pubDate = new Date(
      Number(year),
      Number(month) - 1,
      // -1 do mês, pois o JS começa c janeiro sendo 0
      Number(day),
      Number(hours),
      Number(minutes),
      Number(seconds)
    )

    if (isNaN(pubDate.getTime())) {
      return 'Data de publicação inválida'
    }

    const timeDifference = today.getTime() - pubDate.getTime()
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24))

    if (daysDifference === 1) {
      return '1 dia atrás'
    } else if (daysDifference > 1) {
      return `${daysDifference} dias atrás`
    } 
      return 'Hoje'
    
  } 
    return 'Formato de data inválido'
  
}

export const formatIntroduction = (text: string) => {
  let formattedText = text.replace(/\(\p\.\p\.\)/g, '')
  formattedText = formattedText.trim()
  // corta os espaços em branco

  const dotIndex = formattedText.indexOf('.')
  const hyphenIndex = formattedText.indexOf('-')

  if (dotIndex !== -1 && (hyphenIndex === -1 || dotIndex < hyphenIndex)) {
    return formattedText.slice(0, dotIndex + 1)
  } else if (
    hyphenIndex !== -1 &&
    (dotIndex === -1 || hyphenIndex < dotIndex)
  ) {
    return formattedText.slice(0, hyphenIndex - 1) + '.'
  }

  return formattedText
}

export const useFavorites = () => {
  const [favorites, setFavorites] = React.useState<number[]>(
    JSON.parse(localStorage.getItem('favorites') || '[]')
  )

  const saveFavoritesToLocalStorage = (favorites: number[]) => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      const updatedFavorites = favorites.filter((favId) => favId !== id)
      setFavorites(updatedFavorites)
      saveFavoritesToLocalStorage(updatedFavorites)
    } else {
      const updatedFavorites = [...favorites, id]
      setFavorites(updatedFavorites)
      saveFavoritesToLocalStorage(updatedFavorites)
    }
  }

  return { favorites, toggleFavorite }
}