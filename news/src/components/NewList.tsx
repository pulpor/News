import React, { useEffect, useState } from "react";
// import NewsCard from './NewCard';
import logo from "../images/logo.png";
// import { fetchNews } from '../utils/api';
import "./NewList.css";

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
    image_fulltext: string;
  };
  produtos_relacionados: string;
  destaque: boolean;
  link: string;
}

const NewsList: React.FC = () => {
  const [news, setNews] = useState<News[]>([]);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const fetchNews = async () => {
    try {
      const response = await fetch(
        "https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100"
      );

      const data = await response.json();

      if (
        data &&
        data.items &&
        Array.isArray(data.items) &&
        data.items.length > 0
      ) {
        setNews(data.items);
        const baseUrl = "https://agenciadenoticias.ibge.gov.br/";
        const firstNewsImages = JSON.parse(data.items[0].imagens);
        const imageIntroUrl = baseUrl + firstNewsImages.image_intro;
        setImageUrl(imageIntroUrl);
      }
    } catch (error) {
      console.error("Erro ao buscar notícias: ", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const calculateDaysAgo = (publicationDate: string) => {
    const today = new Date();
    const parts = publicationDate.match(/(\d+)/g);
  
    if (parts && parts.length === 6) {
      const [day, month, year, hours, minutes, seconds] = parts;
      const pubDate = new Date(
        Number(year),
        Number(month) - 1, 
        // -1 do mês, pois o JS começa c janeiro sendo 0
        Number(day),
        Number(hours),
        Number(minutes),
        Number(seconds)
      );
  
      if (isNaN(pubDate.getTime())) {
        return "Data de publicação inválida";
      }
  
      const timeDifference = today.getTime() - pubDate.getTime();
      const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
  
      if (daysDifference === 1) {
        return "1 dia atrás";
      } else if (daysDifference > 1) {
        return `${daysDifference} dias atrás`;
      } else {
        return "Hoje";
      }
    } else {
      return "Formato de data inválido";
    }
  };
  

  return (
    <>
      <div>

        <header>

      
            <img src={logo} id="logo" alt="logo" />
            <p id="header_title">TRYBE NEWS</p>
      

        </header>

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
                  <h3 id="newsRecentes">Notícia mais recente</h3>
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
              <li>Mais recentes</li>
              <li>Release</li>
              <li>Notícia</li>
              <li>Favoritas</li>
            </ul>
          </nav>
        </div>

        <div className="cardPai">
          <div className="cardContainer">
            {news.slice(1, 10).map((item) => (
              <div className="cardInferior">
                <div key={item.id}>

                  <h2 className="cardTitle">
                    {item.titulo}
                  </h2>

                  <p className="cardIntroduction">
                    {item.introducao}
                  </p>
                  
                  <div className="containerDivisor">
                    <div className="divisorPrincipal2">
                      <p className="introducaoPrincipal">
                        {calculateDaysAgo(item.data_publicacao)}
                      </p>

                      <button className="lerNews">
                        <p className="butao">Leia a notícia aqui</p>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </>
  );
};

export default NewsList;
