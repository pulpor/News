# 📰 Pulpor News

Um portal de notícias moderno e elegante, inspirado no design clássico de jornais tradicionais, desenvolvido com React, TypeScript e Vite.

## ✨ Características

- **Design Minimalista**: Interface limpa e profissional inspirada em jornais clássicos
- **Tipografia Elegante**: Fontes serif refinadas (Playfair Display, Crimson Text, Lora)
- **Responsivo**: Layout adaptável para diferentes tamanhos de tela
- **Favoritos**: Sistema de marcação de notícias favoritas com persistência local
- **Navegação Intuitiva**: Rotas organizadas com React Router
- **Testes**: Cobertura de testes com Vitest e Testing Library

## 🛠️ Tecnologias

- **React 18.2** - Biblioteca para interfaces
- **TypeScript 5.0** - Tipagem estática
- **Vite 4.4** - Build tool e dev server
- **React Router 6.16** - Roteamento
- **FontAwesome** - Ícones
- **Vitest** - Testes unitários
- **ESLint** - Linting de código

## 📁 Estrutura do Projeto

```
news/
├── src/
│   ├── components/      # Componentes React
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── NavBar.tsx
│   │   ├── NewList.tsx
│   │   ├── Favorites.tsx
│   │   ├── FullNews.tsx
│   │   └── Footer.tsx
│   ├── context/         # Context API
│   ├── utils/           # Utilitários e helpers
│   ├── style/           # Estilos CSS
│   ├── images/          # Assets de imagens
│   └── test/            # Testes
├── index.html
├── package.json
└── vite.config.ts
```

## 🚀 Instalação e Uso

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/pulpor/News.git

# Entre na pasta do projeto
cd News/news

# Instale as dependências
npm install
```

### Executar o projeto

```bash
# Modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

### Testes

```bash
# Executar testes
npm test

# Cobertura de testes
npm run coverage
```

### Linting

```bash
npm run lint
```

## 🚀 Deploy no GitHub Pages

O projeto está configurado para deploy automático no GitHub Pages via GitHub Actions.

### Configuração Inicial

1. No seu repositório do GitHub, vá em **Settings > Pages**
2. Em **Source**, selecione **GitHub Actions**
3. Faça push para a branch `main` e o deploy será automático

### Deploy Manual

```bash
# Build do projeto
npm run build

# Os arquivos estarão na pasta dist/
```

O site ficará disponível em: `https://pulpor.github.io/News/`

### Estrutura de Deploy

- **Vite Config**: `base: '/News/'` configurado para subdiretório do GitHub Pages
- **GitHub Actions**: Workflow automático em `.github/workflows/deploy.yml`
- **Build Output**: Pasta `dist/` contém os arquivos de produção

## 🎨 Design

O projeto utiliza uma paleta de cores neutra e elegante:

- **Background**: `#fafaf9` (bege claro)
- **Texto principal**: `#1a1a1a` (preto)
- **Texto secundário**: `#525252` (cinza)
- **Accent**: `#dc2626` (vermelho discreto)
- **Cards**: `#ffffff` (branco)

### Tipografia

- **Títulos**: Playfair Display (serif clássica)
- **Corpo**: Crimson Text (legibilidade otimizada)
- **Secundária**: Lora (elegância moderna)

## 📄 Licença

Este projeto é privado e de uso educacional.

## 👤 Autor

**pulpor**
- GitHub: [@pulpor](https://github.com/pulpor)

---

Desenvolvido com ☕ e 📰