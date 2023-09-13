export const fetchNews = async () => {
  try {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100');
    if (!response.ok) {
      throw new Error('Erro ao buscar notícias');
    }
    const data = await response.json();
    if (data && data.itens && Array.isArray(data.itens)) {
      return data.itens;
    }
  } catch (error) {
    console.error('Erro ao buscar notícias:', error);
    throw error; // Rejeita a Promise com o erro para que o componente possa lidar com ele.
  }
};
