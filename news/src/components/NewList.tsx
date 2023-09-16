import React, { useEffect, useState } from 'react'
import '../style/global.css'

import { useNavigate } from 'react-router-dom'

import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { fetchNews } from '../utils/Api'
import { calculateDaysAgo, formatIntroduction, useFavorites } from '../utils/Helpers'
import { News } from '../utils/types'
import { Footer } from './Footer'

const itemsPerPage = 9

const NewsList: React.FC = () => {
  const [news, setNews] = useState<News[]>([])
  const [startIndex, setStartIndex] = useState(1)
  
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

  const { favorites, toggleFavorite } = useFavorites()

  const navigate = useNavigate()

  const navigateToFullNews = (newsId: number) => {
    navigate(`/new/${newsId}`)
  }

  return (
    <>
      <div data-testid="newlist" className="cardPai">

        <div className="cardContainer">
          {news.slice(startIndex, startIndex + itemsPerPage).map((item) => (

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
      <Footer handleButtonClick={handleButtonClick} /> 
    </>
  )
}

export default NewsList
