import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import "./ViewTicket.css";

function ViewTicket() {

  const [id, setId] = useState('');
  const [uri, setUri] = useState('');

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleUriChange = (event) => {
    setUri(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //enviarTicket(id, uri);
  };

  return (
    <div className='ViewTicket'>
      <h2>ViewTicket</h2>
      <div className="div-ViewTicket">
        <form onSubmit={handleSubmit} className='form-ViewTicket'>
          <label htmlFor="id" className="input-label-ViewTicket">ID:</label>
          <input type="text" id="id" className="input-field-ViewTicket" value={id} onChange={handleIdChange} />

          <button type="submit" className="submit-button-ViewTicket">Enviar</button>
        </form>
      </div>
    </div>  
  );
}

export default ViewTicket;