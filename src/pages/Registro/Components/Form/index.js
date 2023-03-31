import React, { useEffect, useState } from 'react';
import './Form.css';
import { ethers } from 'ethers';

function Form() {
    
    
    return (
        <div>
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
    
            <button type="Button">Registrar</button>
          </form>
        </div>
      );
    }
    
    export default Form;