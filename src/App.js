import React  from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Header from './Components/Header';
import Formulario from './Components/Formulario';

import CategoriaProvider from './Context/CategoriasContext';
import RecetasProvider from './Context/RecetasContex';

function App() {
  return (
    <CategoriaProvider>
      <RecetasProvider>
      <Header/>

      <div className="container mt-5">
        <div className="row">
          <Formulario/>

        </div>
      </div>
      </RecetasProvider>
    </CategoriaProvider>
  );
}

export default App;
