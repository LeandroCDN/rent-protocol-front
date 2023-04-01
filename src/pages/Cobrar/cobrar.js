import './cobrar.css';
import ima from './Ellipse1.png';
import { ethers } from 'ethers';
import rentAbi from "../../Contracts/rentABI.json";
import React, { useEffect, useState } from 'react';

const rentAddress = "0xD6D59e9f8BEe9919dba3261aE9FaEDFDD6A6764a";


function Cobrar() {
  const [showForm, setShowForm] = useState(false);
  const [id, setId] = useState('');
  const [rentContract, setRentContract] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  
  const handleClick = () => {
    setShowForm(true);
  };

  const createSigner = async () => {
    if (window.ethereum ) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      if (window.ethereum.selectedAddress) {
        setIsConnected(true);
        initContract();
      }
    }
  };

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

  const initContract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const rentContract = new ethers.Contract(rentAddress, rentAbi, signer);
    setRentContract(rentContract);
  }

  const getDataBlockchain = async (event)=> {
    initContract();
    event.preventDefault();
    const seeAmount = await rentContract.calculatePayment(0);
    console.log(seeAmount);
  }

  return (
    <div className='back'>
      <div className='divv'>
        <img className='divvv marge' src={ ima }  alt='casita'/>
      <input type='input' className='entrada' value={id} onChange={(event) => setId(event.target.value)} placeholder='ID Propiedad' />
      <button className='boton'  onClick={getDataBlockchain} disabled= {!id} >Mostrar Formulario</button>
      </div>
      {showForm ? (
        <form className='formu'>
            <div> 
              <p>Estado de propiedad: xxx</p>
              <p>Fecha de alquiler: xx/xx/xx</p>
              <p>Monto total: $xxx</p>
              <input className='marge' type='submit'value='Retirar importe'/>
            </div>
        </form>
      ) : null}
    </div>
  );
}

export default Cobrar;