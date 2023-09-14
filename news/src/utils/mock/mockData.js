// 20230913093137
// https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100

export const MockNews = {
  news: [ {
    'count': 5414,
    'page': 1,
    'totalPages': 55,
    'nextPage': 2,
    'previousPage': 0,
    'showingFrom': 1,
    'showingTo': 100,
    'items': [
      {
        'id': 37865,
        'tipo': 'Notícia',
        'titulo': ' Inflação fica em 0,23% em agosto, influenciada pelo aumento da energia elétrica',
        'introducao': 'Aumento de 4,59% na energia elétrica residencial foi influenciado pelo fim da incorporação do Bônus de Itaipu, creditado nas faturas do mês anterior - Foto: Helena Pontes/Agência IBGE Notícias A inflação do mês de agosto foi de 0,23%, ficando 0,11 ponto...',
        'data_publicacao': '12/09/2023 09:00:00',
        'produto_id': 0,
        'produtos': '9256|Índice Nacional de Preços ao Consumidor Amplo|indice-nacional-de-precos-ao-consumidor-amplo|2210;9258|Índice Nacional de Preços ao Consumidor|indice-nacional-de-precos-ao-consumidor|2077',
        'editorias': 'economicas',
        'imagens': '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/IPCA_THUMB_Helena-Pontes_09.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/IPCA_HOME_Helena-Pontes_09-1.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
        'produtos_relacionados': '9256, 9258',
        'destaque': true,
        'link': 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37865-inflacao-fica-em-0-23-em-agosto-influenciada-pelo-aumento-da-energia-eletrica.html'
      },
      {
        'id': 37864,
        'tipo': 'Release',
        'titulo': 'IPCA foi de 0,23% em agosto',
        'introducao': 'O Índice Nacional de Preços ao Consumidor Amplo (IPCA) foi de 0,23% em agosto, 0,11 ponto percentual (p.p.) acima da taxa de 0,12% registrada em julho. No ano, o IPCA acumula alta de 3,23% e, nos últimos 12 meses, de 4,61%. Em agosto de 2022, a variação...',
        'data_publicacao': '12/09/2023 09:00:00',
        'produto_id': 0,
        'produtos': '9256|Índice Nacional de Preços ao Consumidor Amplo|indice-nacional-de-precos-ao-consumidor-amplo|2210;9258|Índice Nacional de Preços ao Consumidor|indice-nacional-de-precos-ao-consumidor|2077',
        'editorias': 'economicas',
        'imagens': '{"image_intro":"images\\/agenciadenoticias\\/releases\\/IPCA_Release1.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/IPCA_Release1.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
        'produtos_relacionados': '9256, 9258',
        'destaque': true,
        'link': 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37864-ipca-foi-de-0-23-em-agosto.html'
      },
    ]}
  ]
};
