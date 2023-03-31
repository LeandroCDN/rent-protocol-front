import './cobrar.css';
import ima from './Ellipse1.png';

import React, { useState } from 'react';

function Cobrar() {
  const [showForm, setShowForm] = useState(false);
  const [property, setProperty] = useState('');
  const handleClick = () => {
    setShowForm(true);
  };

  return (
    <div className='back'>
      <div className='divv'>
        <img className='divvv marge' src={ ima }  alt='casita'/>
      <input type='input' className='entrada' value={property} onChange={(event) => setProperty(event.target.value)} placeholder='ID Propiedad' />
      <button className='boton'  onClick={handleClick} disabled= {!property} >Mostrar Formulario</button>
      </div>
      {showForm ? (
        <form className='formu'>
            <div> 
              <p>Estado de propiedad: xxx</p>
              <p>Fecha de alquiler: xx/xx/xx</p>
              <p>Monto total: $xxx</p>
              <input className='marge' type='submit'value='Retirar importe'/>
            </div>
        </form>
      ) : null}
    </div>
  );
}

export default Cobrar;