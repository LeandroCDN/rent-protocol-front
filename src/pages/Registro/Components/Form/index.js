import React, { useEffect, useState } from 'react';
import './Form.css';
import { ethers } from 'ethers';

// 1. Crear states necesarios : is conected
// 2. crear constantes : rentAddress
// 3. importar ABIS necesarios
// 4. initContract (new ethers.Contract())
// 5. completar funcion register

function Form() {
    const[isMetamaskConnected, setIsMetamaskConnected] = useState(false);

    useEffect(() => {
        const checkMetamaskConnection = async () => {
          if (typeof window.ethereum !== 'undefined') {
            try {
              await window.ethereum.request({ method: 'eth_requestAccounts' });
              setIsMetamaskConnected(true);
            } catch (error) {
              setIsMetamaskConnected(false);
            }
          } else {
            setIsMetamaskConnected(false);
          }
        };
    
        checkMetamaskConnection();
      }, []);
    
     
    const register = async () => {       
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();       
    }         
          
    return (
        <div>
          {isMetamaskConnected ? (
            <form>
              <div>
                <label htmlFor="Reserve">Reserva:</label>
                <input type="text" id="Reserve" name="Reserve" />
              </div>
              <div>
                <label htmlFor="PrecioPorMes">Precio por mes de la propiedad:</label>
                <input type="text" id="PrecioPorMes" name="PrecioPorMes" />
              </div>
    
              <div>
                <label htmlFor="MinTimeToRent">Cantidad minima de meses:</label>
                <input type="text" id="MinTimeToRent" name="MinTimeToRent" />
              </div>
    
              <div>
                <label htmlFor="Advacement">Adelanto minimo:</label>
                <input type="text" id="Advacement" name="Advacement" />
              </div>
    
              <div>
                <label htmlFor="MaxTimeToRent">Cantidad maxima de meses:</label>
                <input type="text" id="MaxTimeToRent" name="MaxTimeToRent" />
              </div>
    
              <button type="button" onClick={register}>
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