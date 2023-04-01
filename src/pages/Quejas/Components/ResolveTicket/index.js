import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import "./ResolveTicket.css";

function ResolveTicket() {
  const [id, setId] = useState('');
  const [uri, setUri] = useState('');
  const[isConnected, setIsConnected] = useState(false);
  
  useEffect(() => {
    createSigner();
    if (window.ethereum ) {
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
      <div className="ResolveTicket">
        <h2> ResolveTicket</h2>
        <div className="div-ResolveTicket">
        {isConnected ? (
          <form onSubmit={handleSubmit} className='form-ResolveTicket'>
            <label htmlFor="id" className="input-label-ResolveTicket">ID:</label>
            <input type="text" id="id" className="input-field-ResolveTicket" value={id} onChange={handleIdChange} />

            <label htmlFor="winner" className="input-label-ResolveTicket">winner:</label>
            <input type="text" id="id" className="input-field-ResolveTicket" value={id} onChange={handleIdChange} />

            <label htmlFor="Amount" className="input-label-ResolveTicket">Amount:</label>
            <input type="text" id="id" className="input-field-ResolveTicket" value={id} onChange={handleIdChange} />

            <button type="submit" className="submit-button-ResolveTicket">Enviar</button>
          </form>
        ): (
          <div>Por favor, conecta Metamask para continuar.</div>
        )}
        </div>
      </div>
  );
}

export default ResolveTicket;