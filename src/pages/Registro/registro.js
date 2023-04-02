import Form from "./Components/Form";
import img from "./Rectangle108.png";
import "./registro.css";

function Registro() {
    
  return (
      <div className="registro">
        <h1>Bienvenido a la página de Registro</h1>
        <div className="divRegisterElements">
          <img className='divImagen-registro' src={ img }  alt='casita'/>   
          <Form className='formRegistro'/> 
        </div>
      </div>
    );
  }
  
  export default Registro;

  
  
  
  
  
  
  
  
  
  
  
  