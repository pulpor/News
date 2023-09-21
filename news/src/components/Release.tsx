import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import ghost from '../images/ghost.png'
import { fetchNews } from '../utils/Api'
import { calculateDaysAgo, useFavorites } from '../utils/Helpers'
import { News } from '../utils/types'
import { Footer } from './Footer'

const itemsPerPage = 5

const Release: React.FC = () => {
  const [news, setNews] = useState<News[]>([])
  const [startIndex, setStartIndex] = useState(1)
  // const [imageUrls, setImageUrls] = useState<string[]>([])
  
  const handleButtonClick = () => {
    setStartIndex(startIndex + itemsPerPage)
    // updateImageUrls(startIndex + itemsPerPage)
  }
  
  // const updateImageUrls = (startIndex: number) => {
  //   const urls = news
  //     .slice(startIndex, startIndex + itemsPerPage)
  //     .map((item: News) => {
  //       const newsImages = JSON.parse(item.imagens)
  //       const baseUrl = 'https://agenciadenoticias.ibge.gov.br/'
  //       const imageIntroUrl = newsImages?.image_intro
  //         ? baseUrl + newsImages.image_intro
  //         : null
  //       return imageIntroUrl || ''
  //     })
  //   setImageUrls(urls)
  // }

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchNews()
      if (result && result.news) {
        // const urls = result.news.map((item: { imagens: string }) => {
        //   const newsImages = JSON.parse(item.imagens)
        //   const baseUrl = 'https://agenciadenoticias.ibge.gov.br/'
        //   const imageIntroUrl = newsImages?.image_intro
        //     ? baseUrl + newsImages.image_intro
        //     : null
        //   return imageIntroUrl
        // })
        setNews(result.news)
        // setImageUrls(urls)
      }
    }
  
    fetchData()
  }, []) 

  const { favorites, toggleFavorite } = useFavorites()

  // const filteredNews = news
  // .filter((item) => item.tipo !== 'Notícia')
  // .map((item) => {
  //   const newsImages = JSON.parse(item.imagens)
  //   const baseUrl = 'https://agenciadenoticias.ibge.gov.br/'
  //   const imageIntroUrl = newsImages?.image_intro
  //     ? baseUrl + newsImages.image_intro
  //     : null
  //   return {
  //     ...item,
  //     imageIntroUrl: imageIntroUrl || '',
  //   }
  // })
  // .slice(startIndex, startIndex + itemsPerPage)
 
  return (
    <>
      <div className="cardPai2">
        <div className="cardContainer2">
        {news
          .filter((item) => item.tipo === 'Release') // Filtra apenas os itens do tipo 'Release'
          .slice(startIndex - 1, startIndex + itemsPerPage - 1)
          .map((item) => (
          <div className="containerFullNews2" key={item.id}>
             
                <div className="textoCardSuperior2">

                  <div className="containerRecente2">
                    <h3 id="newsRecentes">
                      <p>
                        {item.tipo}
                        {'ㅤ'}
                        -
                        {'ㅤ'}
                        {item.editorias.charAt(0).toUpperCase() + item.editorias.slice(1)}
                      </p>
                    </h3>
                    <button
                      className="favoriteButton fav"
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

                  <h2 className="titlePrincipal2">{item.titulo}</h2>

                  <p className="introducaoPrincipal2" title="Api ilusória, pois não retorna a
                  matéria completa!  🥲">
                    {(item.introducao)}
                  </p>

                  <div className="divisorContainer2">
                    <div className="divisorPrincipal3">
                      <p className="introducaoPrincipal">
                        <b>Publidao em:</b>
                        {' '}
                        {calculateDaysAgo(item.data_publicacao)}
                      </p>

                      <button className="lerNews">                        
                        <Link to={item.link} id="link">
                          <p className="butao">
                            Fonte Completa
                          </p>
                        </Link>
                      </button>

                    </div>
                  </div>
                </div>
              </div>
              ))}
        </div>
      </div>
      {news.some((item) => item.tipo !== 'Notícia') && ( 
      <Footer handleButtonClick={handleButtonClick} />
    )}
    </>
  )
}

export default Release
