import React,{createContext, useState, useEffect} from 'react';
import axios from 'axios';

//Crear el Contex
export const ModalContext = createContext();

const ModalProvider = (props) => {

    //State del Provider

    const [idreceta, setIdreceta] = useState(null);
    const [informacion, setInformacion] = useState({});

    // llamar la api
    useEffect(()=> {
        const obtenerReceta = async () => {
            if(!idreceta) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;

            const resultado = await axios.get(url);

            console.log(resultado.data.drinks[0]);

            


        }
        obtenerReceta();

    },[idreceta])

    console.log(idreceta);
    

    return(
        <ModalContext.Provider
          
           value={{

            setIdreceta

           }}
        
        >
            {props.children}

        </ModalContext.Provider>
    );
}

export default ModalProvider;


 