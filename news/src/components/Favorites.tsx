import { useState, useEffect } from 'react'

import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { fetchNews } from '../utils/Api'
import { formatIntroduction, calculateDaysAgo, useFavorites } from '../utils/Helpers'
import { News } from '../utils/types'

export function Favorites() {
  const { favorites, toggleFavorite } = useFavorites()
  const [news, setNews] = useState<News[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchNews()
      if (result && result.news && result.imageUrl) {
        setNews(result.news)
      }
    }

    fetchData()
  }, [])

  // Filtrar apenas as notícias que estão nos favoritos (baseado nos IDs)
  const favoriteNews = news.filter((item) => favorites.includes(item.id))

  return (
    <div className="cardPai">
      <div className="cardContainer">
        {favoriteNews.map((item) => (
          <div className="cardInferior" key={item.id}>
            <div className="topCard">
              <h2 className="cardTitle">{item.titulo}</h2>
              <p className="cardIntroduction">
                {formatIntroduction(item.introducao)}
              </p>
            </div>
            <div className="bottomCard">
              <div className="containerDivisor">
                <div className="divisorPrincipal2">
                  <p className="introducaoPrincipal">
                    {calculateDaysAgo(item.data_publicacao)}
                  </p>
                  <button className="lerNews">
                    <p className="butao">Leia a notícia aqui</p>
                  </button>
                </div>
              </div>
              <hr className="linha" />
              <div className="favorite">
                <button
                  className="favoriteButton"
                  onClick={() => toggleFavorite(item.id)}
                >
                  <FontAwesomeIcon
                    icon={favorites.includes(item.id) ? faHeartSolid : faHeartRegular}
                    style={{
                      color: favorites.includes(item.id) ? '#C31815' : '#2a2a2a'
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
