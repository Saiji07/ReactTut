
import { useState } from "react";
function Like()
{
    let [isLiked,setIsLiked]=useState(false);
    let togel=()=>{
        setIsLiked(!isLiked);
    }
return(
<>

<p onClick={togel}> {isLiked?<i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i> }</p>
</>
);
}
export default Like