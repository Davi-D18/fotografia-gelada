# Projeto Fotografia Gelada

## Visão Geral
Este projeto é de um pequeno simulado de uma das provas práticas do SAEP (Sistema de Avaliação do Ensino Profissional) feito no curso Técnico em Informática para Internet da Instituição Senai

Data: 08/10

## Tecnologias Usadas
- **React**
- **CSS**

### Bibliotecas Usadas
- **React-icons**

## Descrição das Pastas e Arquivos

```plaintext

|── src/
│   ├── components/
│   │   ├── Footer/
│   │   │   ├── footer.css
│   │   │   └── Footer.jsx
│   │   ├── Header/
│   │   │   ├── header.css
│   │   │   └── Header.jsx
│   │   ├── Image-card/
│   │   │   ├── imageCard.css
│   │   │   └── ImageCard.jsx
│   │   ├── Image-grid/
│   │   │   ├── imageGrid.css
│   │   │   └── ImageGrid.jsx
│   │   ├── Image-Modal/
│   │   │   ├── imagemModal.css
│   │   │   └── ImageModal.jsx
│   │   ├── Login-Modal/
│   │   │   ├── loginModal.css
│   │   │   └── LoginModal.jsx
│   ├── styles/
│   │   └── style.css
│   ├── App.jsx
│   ├── index.js
├── .gitignore
├── package.json
├── README.md
└── yarn.lock

```

## Descrição das Pastas e Arquivos

### `src/`
Diretório principal que contém todo o código-fonte do projeto.

### `components/`
Contém todos os componentes reutilizáveis do projeto. Cada componente tem sua própria pasta com arquivos de estilo (CSS) e o arquivo de código (JSX).

#### `Footer/`
- **`footer.css`**: Estilos específicos para o rodapé (Footer)
- **`Footer.jsx`**: Componente JSX que renderiza o rodapé da página

#### `Header/`
- **`header.css`**: Estilos para o cabeçalho da página
- **`Header.jsx`**: Componente JSX que renderiza o cabeçalho

#### `Image-card/`
- **`imageCard.css`**: Estilos para os cartões que exibem imagens. Define o layout e o design desses cartões.
- **`ImageCard.jsx`**: Componente JSX que exibe um cartão com imagem, título, e descrição.

#### `Image-grid/`
- **`imageGrid.css`**: Estilos para o layout de grade de imagens, organizando vários cards em uma estrutura de grade.
- **`ImageGrid.jsx`**: Componente JSX que renderiza uma galeria de imagens no formato de grade.

#### `Image-Modal/`
- **`imagemModal.css`**: Estilos para o modal que exibe uma imagem ampliada quando um card é clicado.
- **`ImageModal.jsx`**: Componente JSX que cria um modal para exibir uma imagem em tamanho maior.

#### `Login-Modal/`
- **`loginModal.css`**: Estilos para o modal de login, incluindo campos de entrada e botões.
- **`LoginModal.jsx`**: Componente JSX que renderiza o modal de login, permitindo que os usuários façam login no sistema.

### `styles/`
- **`style.css`**: Estilos globais aplicados em toda a aplicação, como tipografia e cores padrão.

### `App.jsx`
Componente principal que serve como ponto de entrada da aplicação. Organiza e renderiza os outros componentes.

### `index.js`
Arquivo de entrada que inicializa a aplicação React e renderiza o componente `App` na página.

### Arquivos de Configuração e Documentação

- **`.gitignore`**: Define quais arquivos e pastas serão ignorados pelo Git, como dependências e arquivos temporários.

- **`package.json`**: Contém informações sobre o projeto, como nome, versão, dependências e scripts para executar e construir o projeto.

- **`README.md`**: Este arquivo, que contém a documentação do projeto.

- **`yarn.lock`**: Gerado pelo Yarn para garantir que todos os desenvolvedores utilizem as mesmas versões das bibliotecas.

## Executando o projeto

### 1. Instale as dependências

No diretório raiz do projeto, execute o seguinte comando para instalar todas as dependências necessárias:

```bash
yarn install
``` 
ou 

```bash
npm install 
```

Após a instalação das dependências, inicie o servidor de desenvolvimento com o comando:

```bash
yarn start
```
ou 
```bash
npm start
```

Link para o Deploy: [Deploy](https://fotografia-gelada-two.vercel.app/)