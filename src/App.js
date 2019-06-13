import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header'; 
import Routes from './routes';

//Componente em formato de função

//O componente Routes renderiza as páginas dentro da tag <Routes />

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
