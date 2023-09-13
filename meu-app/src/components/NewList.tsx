import React, { useEffect, useState } from 'react';
// import NewsCard from './NewCard';
import logo from '../images/logo.png';
// import { fetchNews } from '../utils/api';
import './NewList.css';

interface News {
  id: number;
  tipo: string;
  titulo: string;
  introducao: string;
  data_publicacao: string;
  produto_id: number;
  produtos: string;
  editorias: string;
  imagens: {
    image_intro: string;
  };
  produtos_relacionados: string;
  destaque: boolean;
  link: string;
}

const NewsList: React.FC = () => {
  const [news, setNews] = useState<News[]>([]);
  console.log(news);
  

   const fetchNews = async () => {
    try {
      const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100');
    
      const data = await response.json();
      
      if (data && data.items && Array.isArray(data.items)) {
        setNews(data.items);
      }
    } catch (error) {
      console.error('Erro ao buscar notícias:', error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);
 

  return (
    <>
    <div>

      <header>
        <p id="header_title">TRYBE NEWS</p>

          <img src={logo} id="logo" alt="logo" />
      </header>

      <div className="hero">
        {news.length > 0 && (
          <>
            <h2>{news[0].titulo}</h2>
            
            <img src={news[0].imagens.image_intro} alt={news[0].titulo} />

            <p>{news[0].introducao}</p>
            <p>Data de Publicação: {news[0].data_publicacao}</p>
          </>
        )}
      </div>

      <nav>
      </nav>

      {news.slice(1, 10).map((item) => (
        <div key={item.id}>
          <h2>{item.titulo}</h2>
          <p>Data de Publicação: {item.data_publicacao}</p>
        </div>
      ))}


    </div>
    </>
  );
};

export default NewsList;
