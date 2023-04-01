import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import "./TicketForm.css";

function TicketForm() {
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
    <div className="TicketForm">
      <h2>TicketForm</h2>
      <div className="div-ticketform">
        <form onSubmit={handleSubmit} className='form-ticketform'>
          <label htmlFor="id" className="input-label-ticketform">ID:</label>
          <input type="text" id="id" className="input-field-ticketform" value={id} onChange={handleIdChange} />

          <label htmlFor="uri" className="input-label-ticketform">URI:</label>
          <input type="text" id="uri" className="input-field-ticketform" value={uri} onChange={handleUriChange} />

          <button type="submit" className="submit-button-ticketform">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default TicketForm;