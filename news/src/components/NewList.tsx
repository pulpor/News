import React, { useEffect, useState } from 'react'
import '../style/global.css'

import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { fetchNews } from '../utils/Api'
import { calculateDaysAgo, formatIntroduction, useFavorites } from '../utils/Helpers'
import { News } from '../utils/types'

const NewsList: React.FC = () => {
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

  const { favorites, toggleFavorite } = useFavorites()

  return (
    <>
      <div className="cardPai">

        <div className="cardContainer">
          {news.slice(1, 10).map((item) => (

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
    </>
  )
}

export default NewsList
