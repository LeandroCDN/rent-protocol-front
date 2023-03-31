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
      <input type='input' value={property} onChange={(event) => setProperty(event.target.value)} placeholder='ID Propiedad' />
      <button onClick={handleClick} disabled= {!property} >Mostrar Formulario</button>
      {showForm ? (
        <form className='formu'>
            <div>
              <div>
              <img src={ ima }  alt='casita'/>
            </div>
              <p>Estado de propiedad: xxx</p>
              <p>Fecha de alquiler: xx/xx/xx</p>
              <p>Monto total: $xxx</p>
              <input className='' type='submit'value='Retirar importe'/>
            </div>
        </form>
      ) : null}
    </div>
  );
}

export default Cobrar;