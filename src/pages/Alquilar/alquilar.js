import React, { useState, useEffect } from 'react';

function Alquilar() {
  const [propertyId, setPropertyId] = useState('');
  const [propertyDetails, setPropertyDetails] = useState(null);
  const [showAlquilarButton, setShowAlquilarButton] = useState(false);

  useEffect(() => {
    const showAlquilarButtonFromStorage = localStorage.getItem('showAlquilarButton');
    setShowAlquilarButton(showAlquilarButtonFromStorage === 'true');
  }, []);

  const handlePropertyIdChange = (event) => {
    setPropertyId(event.target.value);
  }

  const handleVerClick = () => {
   
    setPropertyDetails({
      propietario: 'Lorem ipsum',
      reserva: 'Lorem ipsum',
      precio: 'Lorem ipsum',
      plazoMinimoDeAlquiler: 'Lorem ipsum',
      adelanto: 'Lorem ipsum'
    });
    setShowAlquilarButton(true);
    localStorage.setItem('showAlquilarButton', true);
  }

  const handleAlquilarClick = () => {
    
  }

  return (
    <div>
      <h1>Bienvenido a la página de Alquilar</h1>
      <label htmlFor="property-id-input">Ingrese el ID de la propiedad:</label>
      <input type="text" id="property-id-input" value={propertyId} onChange={handlePropertyIdChange} />
      <br />
      <button onClick={handleVerClick}>Ver</button>
      <br />
      {propertyDetails && (
        <div>
          <p>Propietario: {propertyDetails.propietario}</p>
          <p>Reserva: {propertyDetails.reserva}</p>
          <p>Precio: {propertyDetails.precio}</p>
          <p>Plazo mínimo de alquiler: {propertyDetails.plazoMinimoDeAlquiler}</p>
          <p>Adelanto: {propertyDetails.adelanto}</p>
        </div>
      )}
      {showAlquilarButton && <button onClick={handleAlquilarClick}>Alquilar</button>}
    </div>
  );
}

export default Alquilar;
