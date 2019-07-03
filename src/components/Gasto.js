import React from 'react';

const Gasto = ({gasto}) =>  {   

   const eliminarGasto = (id) => {
        console.log(id);
    }
    return (  
    <li className="gastos">
        <p>
            {gasto.nombreGasto}
            <span className="gasto">$ {gasto.cantidaGasto}</span>

            <button type="button"
                onClick={() => eliminarGasto(gasto.id)}
            >
            x
            </button>
        </p>
    </li>
)};

 
export default Gasto;