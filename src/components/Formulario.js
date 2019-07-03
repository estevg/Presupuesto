import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

function Formulario(props) {
    
    const { guardarGasto, guardarCrearGasto } = props;

    // State
    const [ nombreGasto, guardarNombreGasto ] = useState('');
    const [ cantidaGasto, guardarCantidadGasto ] = useState(0);
    const [ error, guardarError ] = useState(false);

    const agregarGasto = e => {
        e.preventDefault();

        // Validar
        if(cantidaGasto <= 1 || isNaN( cantidaGasto ) || nombreGasto === ''){
            guardarError(true)
            return;
        }


        // construir objeto del gasto
        const gasto = {
            nombreGasto,
            cantidaGasto,
            id: shortid.generate()
        } 
        // Pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);
        // Eliminar alerta
        guardarError(false);
        // Resetear el form
        guardarNombreGasto('');
        guardarCantidadGasto('');

    }
    
    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gatos aqui</h2>
            { error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto Incorrecto" /> : null}

            <div className="campo">
                <label htmlFor="">Nombre Gasto</label>
                <input 
                        type="text"
                        className="u-full-width"
                        placeholder="Ej. Transporte"
                        onChange={e => guardarNombreGasto(e.target.value)}
                        value={nombreGasto}
                />
            </div>
            <div className="campo">
                <label htmlFor="">Cantidad Gasto</label>
                <input 
                        type="number"
                        className="u-full-width"
                        placeholder="Ej. 300"
                        onChange={e => guardarCantidadGasto(parseInt(e.target.value))}
                        value={cantidaGasto}
                />
            </div>
            <input type="submit" className="button-primary u-full-width" value="Agregar Gasto"/>
        </form>
    )
}

export default Formulario;