import React, { useEffect, useState } from 'react';
import './Form.css';
import { ethers } from 'ethers';
import rentAbi from "../../../../Contracts/rentABI.json";




// 5. completar funcion register
const rentAddress = "0xD6D59e9f8BEe9919dba3261aE9FaEDFDD6A6764a";


function Form() {
  let rentContract;
  const [Reserve, setReserve] = useState('');
  const [PrecioPorMes, setPrecioPorMes] = useState('');
  const [MinTimeToRent, setMinTimeToRent] = useState('');
  const [Advacement, setAdvacement] = useState('');
  const [MaxTimeToRent, setMaxTimeToRent] = useState('');
  const [isMetamaskConnected, setIsMetamaskConnected] = useState(false);

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

  const createSigner = async () => {
    if (window.ethereum ) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
        if (window.ethereum.selectedAddress) {
          setIsMetamaskConnected(true);
        // const provider = new ethers.providers.Web3Provider(window.ethereum);
        // const signer = provider.getSigner();
          initContract();
        }
      }
  };

  const initContract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    rentContract = new ethers.Contract(rentAddress, rentAbi, signer);
  }
  const handleReserveChange = (event) => {
    setReserve(event.target.value);
  };

  const handlePrecioPorMesChange = (event) => {
    setPrecioPorMes(event.target.value);
  };

  const handleMinTimeToRentChange = (event) => {
    setMinTimeToRent(event.target.value);
  };

  const handleAdvacementChange = (event) => {
    setAdvacement(event.target.value);
  };

  const handleMaxTimeToRentChange = (event) => {
    setMaxTimeToRent(event.target.value);
  };
     
  const register = async () => {       
    initContract();
    const reserveValue = ethers.utils.parseEther(Reserve);
    const precioPorMesValue = ethers.utils.parseEther(PrecioPorMes);
    const advacementValue = ethers.utils.parseEther(Advacement);
    
  
    try {
      const tx = await rentContract.register(
        reserveValue,
        precioPorMesValue,
        MinTimeToRent,
        advacementValue,
        MaxTimeToRent,
        ''
      );
      await tx.wait();
      alert('¡Registro exitoso!');
    } catch (error) {
      console.log(error);
      alert('¡Error al registrar la propiedad!');
    }
  
  }         
          
    return (
        <div className='DivFormRegistro'>
          {isMetamaskConnected ? (
            <form className='formRegistro'>
              <div className='formRegistro'>
                <label htmlFor="Reserve">Reserva:</label>
                <input className='registroInputs' type="text" id="Reserve" name="Reserve" value={Reserve} onChange={handleReserveChange} />
              </div>
              <div className='formRegistro'>
                <label htmlFor="PrecioPorMes">Precio por mes de la propiedad:</label>
                <input className='registroInputs' type="text" id="PrecioPorMes" name="PrecioPorMes" value={PrecioPorMes} onChange={handlePrecioPorMesChange}/>
              </div>    
              <div className='formRegistro'>
                <label htmlFor="MinTimeToRent">Cantidad minima de meses:</label>
                <input className='registroInputs' type="text" id="MinTimeToRent" name="MinTimeToRent" value={MinTimeToRent} onChange={handleMinTimeToRentChange} />
              </div>    
              <div className='formRegistro'>
                <label htmlFor="Advacement">Adelanto minimo:</label>
                <input className='registroInputs' type="text" id="Advacement" name="Advacement" value={Advacement} onChange={handleAdvacementChange} />
              </div>    
              <div className='formRegistro'>
                <label htmlFor="MaxTimeToRent">Cantidad maxima de meses:</label>
                <input className='registroInputs' type="text" id="MaxTimeToRent" name="MaxTimeToRent" value={MaxTimeToRent} onChange={handleMaxTimeToRentChange} />
              </div>    
              <button className="buttonRegister" type="button" onClick={register}>
                Registrar
              </button>
            </form>
          ) : (
            <div>Por favor, conecta Metamask para continuar.</div>
          )}
        </div>
      );
}
    
    export default Form;