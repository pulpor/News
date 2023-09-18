import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ghost from '../images/ghost.png'
import { fetchNews } from '../utils/Api'
import { calculateDaysAgo, useFavorites } from '../utils/Helpers'
import { News } from '../utils/types'
import { Footer } from './Footer'

const itemsPerPage = 5

const NewsNav: React.FC = () => {
  const [news, setNews] = useState<News[]>([])
  const [startIndex, setStartIndex] = useState(1)
  const [imageUrls, setImageUrls] = useState<string[]>([])
  
  const handleButtonClick = () => {
    const newStartIndex = startIndex + itemsPerPage;
    setStartIndex(newStartIndex)
    updateImageUrls(newStartIndex)
  }
  
  const updateImageUrls = (startIndex: number) => {
    const urls = news
      .slice(startIndex, startIndex + itemsPerPage)
      .map((item: News) => {
        const newsImages = JSON.parse(item.imagens)
        const baseUrl = 'https://agenciadenoticias.ibge.gov.br/'
        const imageIntroUrl = newsImages?.image_intro
          ? baseUrl + newsImages.image_intro
          : null
        return imageIntroUrl || ''
      })
    setImageUrls(urls)
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchNews()
      if (result && result.news) {
        const urls = result.news.map((item: { imagens: string }) => {
          const newsImages = JSON.parse(item.imagens)
          const baseUrl = 'https://agenciadenoticias.ibge.gov.br/'
          const imageIntroUrl = newsImages?.image_intro
            ? baseUrl + newsImages.image_intro
            : null
          return imageIntroUrl
        })
        setNews(result.news)
        setImageUrls(urls)
      }
    }
  
    fetchData()
  }, []) 

  const { favorites, toggleFavorite } = useFavorites()

  const filteredNews = news
  .filter((item) => item.tipo !== 'Release')
  .map((item) => {
    const newsImages = JSON.parse(item.imagens)
    const baseUrl = 'https://agenciadenoticias.ibge.gov.br/'
    const imageIntroUrl = newsImages?.image_intro
      ? baseUrl + newsImages.image_intro
      : null
    return {
      ...item,
      imageIntroUrl: imageIntroUrl || '',
    }
  })
  .slice(startIndex, startIndex + itemsPerPage)

 
  return (
    <>
      <div className="cardPai2">
        <div className="cardContainer2">
          {filteredNews.map((item, index) => (
            <div className="containerFullNews" key={item.id}>

              <div className="containerMenorFull">

              <div className="imagemFull">
                {imageUrls[index] && (
                  <img
                    src={
                      imageUrls[index].includes('/releases/')
                        ? ghost
                        : item.imageIntroUrl
                    }
                    id="imgFull"
                    alt="Imagem da notícia"
                    key={item.imageIntroUrl}
                  />
                )}
              </div>

              
                <div className="textoCardSuperior">

                  <div className="containerRecente">
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

  
                    <h2 className="titlePrincipal">{item.titulo}</h2>

                    <p className="introducaoPrincipal intro" title="Api ilusória, pois não retorna a
                    matéria completa!  🥲">
                      {(item.introducao)}
                    </p>

                  <div className="divisorContainer">
                    
                    <div className="divisorPrincipal">
                     
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

            </div>
              ))}
        </div>
      </div>
      {news.some((item) => item.tipo !== 'Release') && ( 
      <Footer handleButtonClick={handleButtonClick} />
    )}
    </>
  )
}

export default NewsNav
