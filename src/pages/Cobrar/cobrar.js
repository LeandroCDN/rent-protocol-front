import './cobrar.css';

import React, { useState } from 'react';

function Cobrar() {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  return (
    <div className='back'>
      <button onClick={handleClick}>Mostrar Formulario</button>
      {showForm ? (
        <form>
            <div>

            </div>
            <div>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <input type='submit'value='Pagar'/>
            </div>
        </form>
      ) : null}
    </div>
  );
}

export default Cobrar;