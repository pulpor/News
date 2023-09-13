import React, { useEffect, useState } from 'react';
// import NewsCard from './NewCard';
import logo from '../images/logo.png';
// import { fetchNews } from '../utils/api';
import './NewList.css';

interface News {
  id: number;
  titulo: string;
  resumo: string;
  data_publicacao: string;
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
      <div id="header">
        <img src={logo} alt="logo" />
        <h1>TRYBE NEWS</h1>
      </div>

      {news.map((item) => (
  <div key={item.id}>
    <h2>{item.titulo}</h2>
    <p>{item.resumo}</p>
    <p>Data de Publicação: {item.data_publicacao}</p>
  </div>
))}

    </div>
    </>
  );
};

export default NewsList;
