import React, { useEffect, useState } from 'react';
import './Button.css';
import { ethers } from 'ethers';

function Button() {
  const [isConnected, setIsConnected] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('Conectado a MetaMask');
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
                       
        setIsConnected(true); 
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error('MetaMask no está instalado');
    }
  };

  useEffect(() => {
    connectWallet();
    if (window.ethereum ) {
      //registra constantemente cambios en el objeto 'cuenta'
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
          console.log('Cambio de cuenta detectado:', accounts[0]);
          setIsConnected(true);
        } else {
          console.log('MetaMask desconectado');
          setIsConnected(false);
        }
      });
    }
  }, [])

  return (
    <div className="Button">
      <div className='container'>
        <button className='myboton' onClick={connectWallet}>
          <p className='buttontext'>{isConnected ? 'Connected' : 'Connect Wallet'}</p> 
        </button>     
      </div>
    </div>
  );
}

export default Button;
