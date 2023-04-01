import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import rentAbi from "../../../../Contracts/rentABI.json";
import "./ViewTicket.css";

const rentAddress = "0xD6D59e9f8BEe9919dba3261aE9FaEDFDD6A6764a";

function ViewTicket() {
  let rentContract;
  const [id, setId] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [ticketData, setTicketData] = useState(null);
  
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

  const handleSubmit = async (event) => {
    initContract();
    event.preventDefault();
    const result = await rentContract.ticketdata(id);
    const ticketDataObject = {
      from: result.from,
      startTicketDate: result.startTicketDate,
      ticketUri: result.tikectUri,
      lastResult: result.lastResult,
      lastAmountResult: result.lastAmountResult
    };
    setTicketData(ticketDataObject);
    console.log(result);
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
      {ticketData && (
        <div>
          <p>From: {ticketData.from}</p>
          <p>StartTicketDate: {ticketData.startTicketDate}</p>
          <p>TicketUri: {ticketData.ticketUri}</p>
          <p>LastResult: {ticketData.lastResult}</p>
          <p>LastAmountResult: {ticketData.lastAmountResult}</p>
        </div>
      )}
      </div>
    </div>  
  );
}

export default ViewTicket;