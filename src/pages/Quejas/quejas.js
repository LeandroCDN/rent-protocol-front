import ResolveTicket from "./Components/ResolveTicket";
import TicketForm from "./Components/TicketForm";
import ViewTicket from "./Components/ViewTikect";
import "./quejas.css";

function Quejas() {
    return (
        <div className="quejas">
            <h1>Bienvenido a la página de Quejas</h1>
            <div className="quejasforms">
                <TicketForm />
                <ViewTicket />
                <ResolveTicket />
            </div>
        </div>
    );
}

export default Quejas;