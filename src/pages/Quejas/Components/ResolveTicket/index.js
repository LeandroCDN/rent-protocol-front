import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import "./ResolveTicket.css";

function ResolveTicket() {
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
      <div className="ResolveTicket">
        <h2> ResolveTicket</h2>
        <div className="div-ResolveTicket">
          <form onSubmit={handleSubmit} className='form-ResolveTicket'>
            <label htmlFor="id" className="input-label-ResolveTicket">ID:</label>
            <input type="text" id="id" className="input-field-ResolveTicket" value={id} onChange={handleIdChange} />

            <label htmlFor="winner" className="input-label-ResolveTicket">winner:</label>
            <input type="text" id="id" className="input-field-ResolveTicket" value={id} onChange={handleIdChange} />

            <label htmlFor="Amount" className="input-label-ResolveTicket">Amount:</label>
            <input type="text" id="id" className="input-field-ResolveTicket" value={id} onChange={handleIdChange} />

            <button type="submit" className="submit-button-ResolveTicket">Enviar</button>
          </form>
        </div>
      </div>
  );
}

export default ResolveTicket;