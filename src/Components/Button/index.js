import React, { useState } from 'react';
import './Button.css';

function Button() {

  return (
    <div className="Button">
      <div className='container'>
        <button className='myboton'>
          <p className='buttontext'>connectWallet</p> 
        </button>     
      </div>
    </div>
  );
}

export default Button;