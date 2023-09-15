import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { fetchNewsByID } from '../utils/Api'
import { News } from '../utils/types'

export function FullNews() {
  const [newsFull, setNewsFull] = useState<News | null>(null)
  const { newsId } = useParams<{ newsId: string }>()
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchNewsByID(Number(newsId))
        if (result) {
          setNewsFull(result as unknown as News)
          setImageUrl(result.imageUrl)
        } else {
          setNewsFull(null)
        }
      } catch (error) {
        console.error('error de fetching em fullnews: ', error)
      }
    }

    fetchData()
  }, [newsId])

  return (
    <>
      {newsFull ? (
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
                  />
                )}
                </div>

                <div className="separacaoNewsFull">
                  <h2 className="titleFullNews">{newsFull.newsTitle}</h2>
                  <p className="introFullNews">{newsFull.newsIntro}</p>
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
