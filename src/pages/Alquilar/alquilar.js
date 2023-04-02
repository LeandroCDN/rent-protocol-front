import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import rentAbi from "../../Contracts/rentABI.json";
import ercAbi from "../../Contracts/rentABI.json";
import "./alquilar.css";


const rentAddress = "0xD6D59e9f8BEe9919dba3261aE9FaEDFDD6A6764a";
const ierc20Address = "0x1e688D81DaA26FffCA805A4De3c6Bb9D6F7D9373";

function Alquilar() {
  const [propertyId, setPropertyId] = useState('');
  const [alquilar, setAlquilar] = useState('approve');
  const [propertyDetails, setPropertyDetails] = useState(null);
  const [showAlquilarButton, setShowAlquilarButton] = useState(false);
  const [cantOfMonth, setCantOfMonth] = useState('');
  const [rentContract, setRentContract] = useState('');
  const [ercContract, setErcContract] = useState('');
  const [IsMetamaskConnected, setIsMetamaskConnected] = useState('');

  
  const createSigner = async () => {
    if (window.ethereum ) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
        if (window.ethereum.selectedAddress) {
          setIsMetamaskConnected(true);
          initContract();
        }
      }
  };
  
  useEffect(() => {
    createSigner();
    //si tiene wallet
      if (window.ethereum ) {
      //registra constantemente cambios en el objeto 'cuenta'
        window.ethereum.on('accountsChanged', (accounts) => {
          if (accounts.length > 0) {
            setIsMetamaskConnected(true);
              } else {
            setIsMetamaskConnected(false);
        }
      });
    }
  }, []);

  const initContract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const rentContract = new ethers.Contract(rentAddress, rentAbi, signer);
    const ercContract = new ethers.Contract(ierc20Address, ercAbi, signer);
    setRentContract(rentContract);
    setErcContract(ercContract);
  }


  const handlePropertyIdChange = (event) => {
    setPropertyId(event.target.value);
  }

  const handleCantOfMonthChange = (event) => {
    setCantOfMonth(event.target.value);
  }

  const handleVerClick = async () => {
    initContract();
    const result = await rentContract.registerPropertyData(propertyId);
    const owner = await rentContract.ownerOf(propertyId);
    console.log(result);

    setPropertyDetails({
      propietario: owner,
      state: result.state,
      reserva: ethers.utils.formatEther(result.reserve).toString(),
      precio: ethers.utils.formatEther(result.price).toString(),
      plazoMinimoDeAlquiler: result.minTimeToRent   ,
      adelanto: result.advancement,
      tiempoMaximo: result.maxTimeToRent
    });
    setShowAlquilarButton(true);
    localStorage.setItem('showAlquilarButton', true);
  }
  


  const handleAlquilarClick = async () => {
    initContract();
    const tx = await ercContract.approve(rentAddress,"200", {gasLimit:300000});
    setAlquilar('Approving...');
    await tx.wait().then(async () => {
      const result = await rentContract.newRent(propertyId, cantOfMonth);
      setAlquilar('Renting...');
    })
    // console.log(result.toString())
  }

  return (
    <div className='alquilar'>
      <h1>Bienvenido a la página de Alquilar</h1>
      <label htmlFor="id" >Ingrese el ID de la propiedad:</label>
      <input type="text" className="entradaAlquilar" id="id" value={propertyId} onChange={handlePropertyIdChange} placeholder='ID Propiedad (usar 0)'/>
      <br />
      <button onClick={handleVerClick}>Ver</button>
      <br />
      {propertyDetails && (
        <div>
          <label htmlFor="cantOfMonth">Ingrese cantidad de meses:</label>
          <input type="text" id="cantOfMonth" value={cantOfMonth} onChange={handleCantOfMonthChange} />
          <p>Propietario: {propertyDetails.propietario}</p>
          <p>Stado: {propertyDetails.state}</p>
          <p>Reserva: {propertyDetails.reserva}</p>
          <p>Precio: {propertyDetails.precio}</p>
          <p>Plazo mínimo de alquiler: {propertyDetails.plazoMinimoDeAlquiler}</p>
          <p>Adelanto: {propertyDetails.adelanto} meses</p>
          <p>Tiempo maximo de renta: {propertyDetails.tiempoMaximo}</p>
          {showAlquilarButton && <button onClick={handleAlquilarClick}>{alquilar}</button>}
        </div>
      )}
    </div>
  );
}

export default Alquilar;
