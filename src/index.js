import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// pegando o app(pagina app.js) ali no render

// Exatamente! O React utiliza esse arquivo index.js para inserir todo o conteúdo JSX do App.js no index.html, tornando possível que esse template seja exibido no navegador.

// Ele faz isso através de um método interno do ReactDOM chamado render() (que também utiliza JSX ao passar < App /> como parâmetro).