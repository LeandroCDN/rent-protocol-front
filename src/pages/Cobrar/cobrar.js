import './cobrar.css';
import ima from './Ellipse1.png';
import { ethers } from 'ethers';
import rentAbi from "../../Contracts/rentABI.json";
import React, { useEffect, useState } from 'react';

const rentAddress = "0xD6D59e9f8BEe9919dba3261aE9FaEDFDD6A6764a";


function Cobrar() {
  const [id, setId] = useState('');
  const [rentContract, setRentContract] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [property, setProperty] = useState('');
  


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
    const seeAmount = await rentContract.calculatePayment(id);
    console.log(seeAmount);
    setWithdrawAmount(parseFloat(ethers.utils.formatEther(seeAmount).toString()).toFixed(2));
    const dataProperty = await rentContract.registerPropertyData(id);
    console.log(dataProperty);
    const dataPropertyObject = {
      renter: (dataProperty.renter).toString(),
      status: dataProperty.state == 0 ? 'Free' : dataProperty.state == 1 ? "Rented" : "Stopped",
      price: parseFloat(((ethers.utils.formatEther(dataProperty.pricePerSecond)* (86400*30))).toString()).toFixed(2)
    }
    setProperty(dataPropertyObject);
  }

  const claimPayment = async (event)=> {
    initContract();
    event.preventDefault();
    const claim = await rentContract.claimPayment(id, {gasLimit: 300000});
    console.log(claim);
  }

  return (
    <div className='back'>
      <div className='divddiv'>
        <input type='input' className='entrada' value={id} onChange={(event) => setId(event.target.value)} placeholder='ID Propiedad (usar 0)' />
        <button className='boton' onClick={getDataBlockchain} disabled= {!id} >Buscar</button>
        <img className='div-imagen marge' src={ ima }  alt='casita'/>   
      </div>
        <form className='formu'>
          <div className='form-div'> 

            <p>Monto a retirar: </p>
            <div className='textBox'><strong>{withdrawAmount}</strong></div>              
            <p>Renter: </p>
            <div className='textBox'><strong>{property.renter}</strong></div>
            <p>Estado: </p>
            <div className='textBox'><strong>{property.status}</strong></div>
            <p>Precio por mes: </p>
            <div className='textBox'><strong>{property.price}</strong></div>
            <button className='boton' onClick={claimPayment} >Retirar importe</button>

          </div>
        </form>
    </div>
  );
}

export default Cobrar;

// Tarea button: 
// 1: crear una función para llamar a la función de blockchain llamada claimPayment(id)
// 2: al tocar al botón llamar a la función del paso 1