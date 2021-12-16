import React  from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Header from './Components/Header';
import Formulario from './Components/Formulario';
import ListaRecetas from './Components/ListaRecetas';

import CategoriaProvider from './Context/CategoriasContext';
import RecetasProvider from './Context/RecetasContex';
import ModalProvider from './Context/modalContext';

function App() {
  return (
    <CategoriaProvider>
      <RecetasProvider>
      <ModalProvider>
      <Header/>

      <div className="container mt-5">
        <div className="row">
          <Formulario/>
        </div>
        <ListaRecetas/>
      </div>
      </ModalProvider>
      </RecetasProvider>
    </CategoriaProvider>
  );
}

export default App;
