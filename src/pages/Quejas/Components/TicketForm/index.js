import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import "./TicketForm.css";

function TicketForm() {
  const [id, setId] = useState('');
  const [uri, setUri] = useState('');
  const[isConnected, setIsConnected] = useState(false);
  
  //utilizamos esto para verificar la coneccion con metamastk
  useEffect(() => {
    createSigner();
    //si tiene wallet
    if (window.ethereum ) {
      //registra constantemente cambios en el objeto 'cuenta'
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
          setIsConnected(true);
        } else {
          setIsConnected(false);
        }
      });
    }
  }, []);

  const createSigner = async () => {
    if (window.ethereum ) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      if (window.ethereum.selectedAddress) {
        setIsConnected(true);
        // const provider = new ethers.providers.Web3Provider(window.ethereum);
        // const signer = provider.getSigner();
      }
    }
  };

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
      {isConnected ? (
        <form onSubmit={handleSubmit} className='form-ticketform'>
          <label htmlFor="id" className="input-label-ticketform">ID:</label>
          <input type="text" id="id" className="input-field-ticketform" value={id} onChange={handleIdChange} />

          <label htmlFor="uri" className="input-label-ticketform">URI:</label>
          <input type="text" id="uri" className="input-field-ticketform" value={uri} onChange={handleUriChange} />

          <button type="submit" className="submit-button-ticketform">Enviar</button>
        </form>
      ): (
        <div>Por favor, conecta Metamask para continuar.</div>
      )}
      </div>
    </div>
  );
}

export default TicketForm;