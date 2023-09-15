export interface News {
  newsTitle: string;
  newsIntro: string;
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

export interface NewsCardProps {
  titulo: string;
  resumo: string;
  data_publicacao: string;
}