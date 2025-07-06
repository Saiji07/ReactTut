import { use } from "react";
import { useState } from "react";

function Form()
{
    // let {name,setName}=useState("shraddha");
    // let updateName=(event)=>{
    //     setName(event.target.value);
    // }
    let [formdata,setFormdata]=useState({
        fullname:" ",
        username:" "
    });
    let handleChange=(event)=>{
        console.log(event.target.name);
// setFormdata({event.target.name:event.target.value});
let feildname=event.target.name;
let feildvalue=event.target.value;
setFormdata((currdata)=>{
    currdata[feildname]=feildvalue;
    return{...currdata};
});

    };
    let handleSubmit=(event)=>{
        event.preventDefault();
    }

return(
   <form onSubmit={handleSubmit}>
    <label htmlFor="fullname" >Enter name</label>
    <input id="fullname" onChange={handleChange} placeholder="Enter name:" value={formdata.fullname} name="fullname">
    </input>
    <br></br>
    <label htmlFor="username" >Username</label>
    <input id="username" onChange={handleChange} placeholder="Enter Username:" value={formdata.username} name="username">
    </input>
    <button>Submit</button>
   </form>
);
}
export default Form;