import React,{useContext} from 'react';
import { ModalContext } from '../Context/modalContext';

const Receta = ({receta}) => {
    const {setIdreceta} = useContext(ModalContext);
    return ( 
        <div className='col-md-4 mb-3'>
            <div className='card'>
                <h4 className="card-header text-center"> {receta.strDrink} </h4>

                <img className='card-img-top' src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`} />

                <div className='card-body d-flex justify-content-center'>
                    <button
                    type='button'
                    className='  btn btn btn-danger text-center'
                    onClick={()=> {
                        setIdreceta(receta.idDrink);
                    }}
                    >
                        Ver Receta 

                    </button>
                </div>

            </div>

        </div>
     );
}
 
export default Receta;