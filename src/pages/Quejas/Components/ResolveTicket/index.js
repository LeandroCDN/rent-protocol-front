import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import rentAbi from "../../../../Contracts/rentABI.json";
import "./ResolveTicket.css";

const rentAddress = "0xD6D59e9f8BEe9919dba3261aE9FaEDFDD6A6764a";

function ResolveTicket() {
  let rentContract;
  const [id, setId] = useState('');
  const [winner, setWinner] = useState('');
  const [amount, setAmount] = useState('');
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
    // eslint-disable-next-line
  }, []);

  const createSigner = async () => {
    if (window.ethereum ) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      if (window.ethereum.selectedAddress) {
        setIsConnected(true);
        initContract();
      }
    } 
  };
  const initContract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    rentContract = new ethers.Contract(rentAddress, rentAbi, signer);
  }

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleWinnerChange = (event) => {
    setWinner(event.target.value);
  };
  
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    initContract();
    const result = await rentContract.resolveTicket(id,winner,amount);
    console.log(result);
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
            <input type="text" id="winner" className="input-field-ResolveTicket" value={winner} onChange={handleWinnerChange} />

            <label htmlFor="amount" className="input-label-ResolveTicket">Amount:</label>
            <input type="text" id="amount" className="input-field-ResolveTicket" value={amount} onChange={handleAmountChange} />

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