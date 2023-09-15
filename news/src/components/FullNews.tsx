import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { fetchNewsByID } from '../utils/Api'
import { calculateDaysAgo, useFavorites } from '../utils/Helpers'
import { News } from '../utils/types'
import { NavBar } from './NavBar'

export function FullNews() {
  const [news, setNews] = useState<News | null>(null)
  const { newsId } = useParams<{ newsId: string }>()
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchNewsByID(Number(newsId))
        if (result) {
          setNews(result as unknown as News)
          setImageUrl(result.imageUrl)
        } else {
          setNews(null)
        }
      } catch (error) {
        console.error('error de fetching em fullnews: ', error)
      }
    }

    fetchData()
  }, [newsId])

  const { favorites, toggleFavorite } = useFavorites()
  
  return (
    <>
      <NavBar />
      {news ? (
        <>
          <div className="paiFullNews">
            <div className="containerFullNews">
              <div className="containerMenorFull">

                <div className="imagemFull">
                  {imageUrl && (
                  <img
                    src={imageUrl}
                    id="imgFull"
                    alt="Imagem da notícia"
                    key={imageUrl} // cache do browser
                  />
                )}
                </div> 
                
                <div className="textoCardSuperior">

                  <div className="containerRecente">
                    <h3 id="newsRecentes">
                      <p>
                        {news.newsType}
                        {'ㅤ'}
                        -
                        {'ㅤ'}
                        {news.newsEditorial}
                      </p>
                    </h3>
                    <button
                      className="favoriteButton fav"
                      onClick={() => toggleFavorite(news.id)}
                    >
                      <FontAwesomeIcon
                        icon={favorites.includes(news.id) ? faHeartSolid : faHeartRegular}
                        style={{
                          color: favorites.includes(news.id) ? '#C31815' : '#2a2a2a'
                        }}
                      />
                    </button>
                  </div>
               
                  <h2 id="titlePrincipal">{news.newsTitle}</h2>
                  <p className="introducaoPrincipal" title="Api ilusória, pois não retorna a
                  matéria completa!  🥲">
                    {news.newsIntro}
                  </p>

                  <div className="divisorPrincipal">
                    <p className="introducaoPrincipal">
                      <b>Publidao em:</b>
                      {' '}
                      {calculateDaysAgo(news.newsDate)}
                    </p>

                    <button className="lerNews">
                      <Link to={news.newsLink} id="link">
                        <p className="butao">
                          Fonte Completa
                        </p>
                      </Link>
                    </button>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </>
      ) : (
        <p> nenhuma notícia encontrada com o ID fornecido.</p>
      )}
    </>
  )
}
