import React from 'react';

interface NewsCardProps {
  titulo: string;
  resumo: string;
  data_publicacao: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ titulo, resumo, data_publicacao }) => {
  return (
    <div className="news-card">
      <h2>{titulo}</h2>
      <p>{resumo}</p>
      <p>Data de Publicação: {data_publicacao}</p>
    </div>
  );
};

export default NewsCard;
