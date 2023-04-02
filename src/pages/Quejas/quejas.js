import ResolveTicket from "./Components/ResolveTicket";
import TicketForm from "./Components/TicketForm";
import ViewTicket from "./Components/ViewTikect";
import "./quejas.css";
// import logo from '../Quejas/Rectangle108.png';

function Quejas() {
    return (
        <div className="quejas">            
            <h1>Seguimiento de quejas y  reclamos</h1>
            <div className="quejasforms">
                <TicketForm className= "box"/>
                <ViewTicket />
                <ResolveTicket />
            </div>             
        </div>
    );
}

export default Quejas;