import ghost from '../images/ghost.png'

export const fetchNews = async () => {
  try {
    const response = await fetch(
      'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100'
    )

    const data = await response.json()

    if (
      data &&
      data.items &&
      Array.isArray(data.items) &&
      data.items.length > 0
    ) {
      const baseUrl = 'https://agenciadenoticias.ibge.gov.br/'
      const firstNewsImages = JSON.parse(data.items[0].imagens)
      const imageIntroUrl = baseUrl + firstNewsImages.image_intro
      return {
        news: data.items,
        imageUrl: imageIntroUrl,
      }
    }
  } catch (error) {
    console.error('Erro ao buscar notícias: ', error)
  }
}

export async function fetchNewsByID(newsId: number) {
  try {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100')
    const data = await response.json()

    if (data && data.items && 
        Array.isArray(data.items)&&
        data.items.length > 0
    ) {
      const newsArticle = data.items.find((article: { id: number }) => article.id === newsId)

      if (newsArticle) {
        const baseUrl = 
        'https://agenciadenoticias.ibge.gov.br/'
        const newsImages = JSON.parse(newsArticle.imagens)
        
        const imageIntroUrl = newsImages?.image_intro ? baseUrl + newsImages.image_intro : null

        if (imageIntroUrl && imageIntroUrl.includes('/releases/')) {
          return {
            newsTitle: newsArticle.titulo,
            newsIntro: newsArticle.introducao,
            newsEditorias: newsArticle.editoriais,
            newsType: newsArticle.tipo,
            imageUrl: ghost,
            newsDate: newsArticle.data_publicacao,
            newsLink: newsArticle.link
          }
        }

        return {
          newsTitle: newsArticle.titulo,
          newsIntro: newsArticle.introducao, 
          newsEditorial: newsArticle.editorias.charAt(0).toUpperCase() + newsArticle.editorias.slice(1),
          newsType: newsArticle.tipo,
          imageUrl: imageIntroUrl,
          newsDate: newsArticle.data_publicacao,
          newsLink: newsArticle.link
        }
      }
    } 
    console.log('dados inválidos da api')
    return null
    
  } catch (error) {
    console.error('error fetching na api: ', error)
    return null
  }
}
