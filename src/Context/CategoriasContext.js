import React ,{createContext, useState} from 'react';

//Crear Context
export const CategoríasContext = createContext();

//Provider es donde se encuentra la funciones  y state

const CategoriaProvider = (props) => {

    //crear el state del context
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [Hola, guardarHola] = useState('hola desde state');



    return (
        <CategoríasContext.Provider
              value={{
                  Hola,
                  guardarHola
              }}
        >

            {props.children}
            
        </CategoríasContext.Provider>

    )
}

export default CategoriaProvider;

