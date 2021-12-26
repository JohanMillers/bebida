import React,{useContext, useState} from 'react';
import { ModalContext } from '../Context/modalContext';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 300,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        overflow: 'scroll',
        height: '100%',
        maxHeight: 500,
        display: 'block'
        },
        header: {
        padding: '12px 0',
        borderBottom: '1px solid darkgrey'
        },
        content: {
        padding: "12px 0",
        overflow: 'scroll'
        }
}));

const Receta = ({receta}) => {

    // Configuración del modal de material-ui
    const [ modalStyle ] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    // Configuración del modal de material-ui



   //Extraer los valores del context
    const { informacion, setIdreceta,setInformacion} = useContext(ModalContext);
    //Extraer los valores del context
    

    //Muestra y formatear los ingredinetes

    const mostrarIngredientes = informacion => {
        let ingredinetes = [];
        for (let i = 1; i < 16; i++) {
            if( informacion[`strIngredient${i}`] ) {
                ingredinetes.push(
                    <li>{informacion[`strIngredient${i}`]} {informacion[`strMeasure${i}`]}</li>
                )
            }
        }
         return ingredinetes;
    }
    //Muestra y formatear los ingredinetes

    return ( 
        <div className='col-md-4 mb-3'>
            <div className='card rounded'>
                <h4 className="card-header text-center"> {receta.strDrink} </h4>

                <img className='card-img-top rounded' src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`} />

                <div className='card-body d-flex justify-content-center'>
                    <button
                    type='button'
                    className='  btn btn btn-danger text-center'
                    onClick={()=> {
                        setIdreceta(receta.idDrink);
                        handleOpen();
                    }}
                    >
                        Ver Receta 

                    </button>
                    <Modal
                       open={open}
                       onClose={() => {
                           setIdreceta(null);
                           setInformacion({});
                           handleClose();
                       }}
                    
                    >
                        <div style={modalStyle} className={classes.paper} >
                            <h2 className='text-center'>{informacion.strDrink}</h2>

                            <h3>Ingredientes y cantidades</h3>

                            <ul>
                                {mostrarIngredientes(informacion)}
                            </ul>

                            <img className="img-fluid my-3" src={informacion.strDrinkThumb} alt={informacion.strDrink} />

                            <h3 className='mt-4'>Instrucciones</h3>
                            <p>
                                {informacion.strInstructions}
                            </p>

                        </div>
                    </Modal>
                </div>

            </div>

        </div>
     );
}
 
export default Receta;