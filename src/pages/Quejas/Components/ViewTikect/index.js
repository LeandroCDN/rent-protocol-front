import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import rentAbi from "../../../../Contracts/rentABI.json";
import "./ViewTicket.css";


const rentAddress = "0x88B620F77d640bC95b881e64f65444BBEd58E4e9";

function ViewTicket() {
  let rentContract;
  const [id, setId] = useState('');
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
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        initContract(signer);
      }
    }
  };

  const initContract = async (signer) => {
    rentContract = new ethers.Contract(rentAddress, rentAbi, signer);
  }

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //enviarTicket(id, uri); llamar al contrato
  };

  return (
    <div className='ViewTicket'>
      <h2>ViewTicket</h2>
      <div className="div-ViewTicket">
      {isConnected ? (
        <form onSubmit={handleSubmit} className='form-ViewTicket'>
          <label htmlFor="id" className="input-label-ViewTicket">ID:</label>
          <input type="text" id="id" className="input-field-ViewTicket" value={id} onChange={handleIdChange} />

          <button type="submit" className="submit-button-ViewTicket">Enviar</button>
        </form>
      ): (
        <div>Por favor, conecta Metamask para continuar.</div>
      )}
      </div>
    </div>  
  );
}

export default ViewTicket;