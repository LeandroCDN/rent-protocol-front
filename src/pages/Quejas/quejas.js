import ResolveTicket from "./Components/ResolveTicket";
import TicketForm from "./Components/TicketForm";
import ViewTicket from "./Components/ViewTikect";
import "./quejas.css";
import logo from '../Quejas/Rectangle108.png';

function Quejas() {
    return (
        <div className="quejas">
            <div className="container-logo"><img className="logo-quejas" src={logo} /></div>
            <div>
              <h1>Seguimiento de quejas y  reclamos</h1>
                <div className="quejasforms">
                    <TicketForm />
                    <ViewTicket />
                    <ResolveTicket />
                </div>  
            </div>
            
        </div>
    );
}

export default Quejas;