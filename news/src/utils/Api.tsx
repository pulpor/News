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
