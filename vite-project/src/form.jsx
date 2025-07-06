import { useState } from "react";

import { useFormik } from 'formik';

function Form({addnewComment}){
    let [comment,setComment]=useState({
        username:"",
        remark:"",
        rating:5
    })
    let handleData=(event)=>{
        const { name, value } = event.target; // Extract name and value from the event
        setComment((prevComment) => ({
            ...prevComment,
            [name]: value, // Update the specific field dynamically
        }));
    };
    let handlesubmit=(event)=>{
event.preventDefault();
addnewComment(comment);

    };
return( 
<>

<form onSubmit={handlesubmit}>
    <label htmlFor="username">UserName </label>
    <input placeholder="ENTER USER NAME"
    id="username"
    name="username"
    value={comment.username}
    onChange={handleData}
    ></input>
    <br></br> <br></br>
    <label htmlFor="remark">Remark </label>
    <textarea placeholder="Add Comments" id="remark" name="remark" value={comment.remark}
    onChange={handleData}
    ></textarea>
    <br></br> <br></br>
    <label htmlFor="rating">Rating </label>
    <input name="rating" id="rating" min={1} max={5} value={comment.rating}
    onChange={handleData}></input>
    <br></br> <br></br>
    <button>Submit</button>
</form>
</>
);
}
export default Form;