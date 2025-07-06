import { use, useState } from "react";
import { random,sum } from "./helper";
import Ticket from "./Ticket";
import Form from "./form";
function Lottery({n,WinSum}){
    let [ticket,setTicket]=useState(random(n));
    let isWin= sum(ticket)==WinSum;
    let newticketButton=()=>{
        setTicket(random(3));
    }
    return(
<div>
    {/* <h1>Lottery!</h1>
    <div>
       <Ticket ticke={ticket}></Ticket>

    </div>
    <button onClick={newticketButton} >Buy New Ticket</button>
    <h2>{isWin&&"Congrats You Won!"}</h2> */}
<Form></Form>
</div>)
}
export default Lottery