import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { fetchNews } from '../utils/Api'
import { formatIntroduction, calculateDaysAgo, useFavorites } from '../utils/Helpers'
import { News } from '../utils/types'
import { Footer } from './Footer'

export function Favorites() {
  const { favorites, toggleFavorite } = useFavorites()
  const [news, setNews] = useState<News[]>([])
  const [startIndex, setStartIndex] = useState(0)
  const itemsPerPage = 9

  const handleButtonClick = () => {
    setStartIndex(startIndex + itemsPerPage)
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchNews()
      if (result && result.news && result.imageUrl) {
        setNews(result.news)
      }
    }

    fetchData()
  }, [])

  const favoriteNews = news.filter((item) => favorites.includes(item.id))

  const navigate = useNavigate()

  const navigateToFullNews = (newsId: number) => {
    navigate(`/new/${newsId}`)
  }

  return (
    <>
      <div data-testid="favorites" className="centro">
        <div className="cardContainer">
          {favoriteNews.slice(startIndex, startIndex + itemsPerPage).map((item) => (
            <div className="cardPai" key={item.id}>
              <div className="cardInferior">
                <div className="topCard">
                  <h2 className="cardTitle">{item.titulo}</h2>
                  <p className="cardIntroduction">{formatIntroduction(item.introducao)}</p>
                </div>
                <div className="bottomCard">
                  <div className="containerDivisor">
                    <div className="divisorPrincipal2">
                      <p className="introducaoPrincipal">{calculateDaysAgo(item.data_publicacao)}</p>
                      <button
                      className="lerNews"
                      onClick={() => navigateToFullNews(item.id)}
                      data-id={item.id}
                    >
                        <p className="butao">Leia a notícia</p>
                      </button>
                    </div>
                  </div>
                  <hr className="linha" />
                  <div className="favorite">
                    <button className="favoriteButton" onClick={() => toggleFavorite(item.id)}>
                      <FontAwesomeIcon
                    icon={favorites.includes(item.id) ? faHeartSolid : faHeartRegular}
                    style={{
                      color: favorites.includes(item.id) ? '#C31815' : '#2a2a2a',
                    }}
                  />
                    </button>
                  </div>
                </div>
              </div>
            </div>
      ))}
        </div>
      </div>
      <Footer handleButtonClick={handleButtonClick} />
    </>
  )
}
