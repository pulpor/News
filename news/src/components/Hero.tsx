import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { fetchNews } from '../utils/Api'
import { calculateDaysAgo, useFavorites } from '../utils/Helpers'
import { News } from '../utils/types'

export function Hero() {
  const [news, setNews] = useState<News[]>([])
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchNews()      
      if (result && result.news && result.imageUrl) {
        setNews(result.news)
        setImageUrl(result.imageUrl)
      }
    }
  
    fetchData()
  }, [])

  const { favorites, toggleFavorite } = useFavorites()
  const regex = /- Foto:/

  const navigate = useNavigate()

  const navigateToFullNews = (newsId: number) => {
    navigate(`/new/${newsId}`)
  }

  return (
    <>
      <div data-testid="hero" className="hero">
        <div className="cardSuperior">
          {news.length > 0 && (
          <>
            <div className="imagemCardSuperior">
              {imageUrl && (
              <img
                src={imageUrl}
                id="imagemHero"
                alt="Imagem da primeira notícia"
              />
            )}
            </div>

            <div className="textoCardSuperior">
              <div className="containerRecente">

                <h3 id="newsRecentes">Notícia mais recente</h3>
                
                <button
                  className="favoriteButton fav"
                  onClick={() => toggleFavorite(news[0].id)}
                >
                  <FontAwesomeIcon
                  icon={favorites.includes(news[0].id) ? faHeartSolid : faHeartRegular}
                  style={{
                    color: favorites.includes(news[0].id) ? '#C31815' : '#2a2a2a'
                  }}
                />
                </button>

              </div>

              <h2 id="titlePrincipal">{news[0].titulo}</h2>

              <p className="introducaoPrincipal">{news[0].introducao.replace(regex,'.')}</p>

              <div className="divisorPrincipal">
                <p className="introducaoPrincipal">
                  {calculateDaysAgo(news[0].data_publicacao)}
                </p>

                <button
                      className="lerNews2"
                      onClick={() => navigateToFullNews(news[0].id)}
                      data-id={news[0].id}
                    >
                  <p className="butao">Leia a notícia</p>
                </button>
              </div>
            </div>
          </>
      )}
        </div>
      </div>
    </>
  )
}
