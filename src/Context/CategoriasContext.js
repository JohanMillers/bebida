import axios from 'axios';
import React ,{createContext, useState, useEffect} from 'react';

//Crear Context
export const CategoríasContext = createContext();

//Provider es donde se encuentra la funciones  y state

const CategoriaProvider = (props) => {

    //crear el state del context
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [categorias, SetCategoria] = useState([]);

    //ejecutar el llamdo a la api
    useEffect(() => {
        const obtenerCategorias = async () => {
            const Url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

            const categorias = await axios.get(Url);

            SetCategoria(categorias.data.drinks);
            
        }
        obtenerCategorias();

    }, [])

    return (
        <CategoríasContext.Provider
              value={{
                  categorias
                  
              }}
        >

            {props.children}
            
        </CategoríasContext.Provider>

    )
}

export default CategoriaProvider;

