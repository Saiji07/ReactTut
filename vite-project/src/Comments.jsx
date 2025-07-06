import { useState } from "react";
import Form from "./form";
function Comments() {
  const [stores, setStores] = useState([
    {
      username: "John Doe",
      remark: "Great service!",
      rating: 5,
    },
    {
      username: "Jane Smith",
      remark: "Good quality.",
      rating: 4,
    },
    {
      username: "Alice Brown",
      remark: "Could be better.",
      rating: 3,
    },
  ]);
 
let addnewComment=(comment)=>{
setStores((currComm)=>[...currComm,comment]);
};
  return (
    <>
    <div>
      {stores.map((store, index) => (
        <div key={index} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <p><strong>Username:</strong> {store.username}</p>
          <p><strong>Remark:</strong> {store.remark}</p>
          <p><strong>Rating:</strong> {store.rating}</p>
        </div>
      ))}
    </div>
<hr></hr>

<Form addnewComment={addnewComment}></Form>
    </>
  );
}

export default Comments;
