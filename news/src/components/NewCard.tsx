import React from 'react';
import { NewsCardProps } from '../utils/types';


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
