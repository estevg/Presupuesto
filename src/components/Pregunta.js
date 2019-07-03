import React, { Fragment, useState } from 'react';
import Error from './Error';


function Pregunta(props) {

    const { guardarPresupuesto, guardarPreguntaPresupuesto, guardarRestante } = props;

    // Definir la cantidad 
    const [ cantidad, guardarCantidad ] = useState(0);;
    const [ error, guardarError ] = useState(false);

    // Validar Presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        // Validar
        if(cantidad <= 1 || isNaN( cantidad )){
            guardarError(true)
            return;
        }

        // Si se pasa la validacion
        guardarError( false )
        guardarPresupuesto( cantidad );
        guardarRestante( cantidad );
        guardarPreguntaPresupuesto( false )
    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            { error ? <Error mensaje="El presupuesto es incorrecto" /> : null}

            <form
                onSubmit={agregarPresupuesto}
                >
                <input type="number" 
                        className="u-full-width"
                        placeholder="Agregar tu presupuesto"
                        onChange={ e => guardarCantidad(parseInt(e.target.value, 10))}
                />
                <input type="submit" className="button.primary u-full-width" value="Definir tu presupuesto"/>
            </form>
        </Fragment>
    )
}

export default Pregunta;