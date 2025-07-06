import { useState } from "react";


function Count()
{
    const [count, setCount] = useState(0);
    let incCount=()=>{
        setCount(count+1);
    };
return(
    <>
    <h3>Count {count}</h3>
    <button onClick={incCount}>Increase Count</button>
    </>
);
}
export default Count