import TicketNum from "./TicketNum";
function Ticket({ticke}){
    return(
       <div>
        {ticke.map((num,idx)=>(
            <TicketNum num={num} key={idx}></TicketNum>
        ))}
       </div>
    );
}
export default Ticket;