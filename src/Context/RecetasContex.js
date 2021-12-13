import React,{createContext, useState} from 'react';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [recetas, SetRecetas]   = useState([]);
    const [busqueda, setBuscarRecetas] = useState({

        nombre: '',
        categoria: ''
    })
    return ( 
        <RecetasContext.Provider

          value={{
            setBuscarRecetas

          }}
        >
            {props.children}

        </RecetasContext.Provider>
     );
}
 
export default RecetasProvider;
