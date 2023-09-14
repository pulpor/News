import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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

  return (
    <>
      <div className="hero">
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

              <p className="introducaoPrincipal">{news[0].introducao}</p>

              <div className="divisorPrincipal">
                <p className="introducaoPrincipal">
                  {calculateDaysAgo(news[0].data_publicacao)}
                </p>

                <button className="lerNews">
                  <p className="butao">Leia a notícia aqui</p>
                </button>
              </div>
            </div>
          </>
      )}
        </div>
      </div>

      <div className="navContainer">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">
                Mais recentes
              </Link>
            </li>
            <li>Release</li>
            <li>Notícia</li>
            <li>
              <Link to="/favorites">
                Favoritas
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
