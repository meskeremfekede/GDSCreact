import React from "react";

function Usecard(props) {
    return (
       <div className="user-card" style={{ backgroundColor: "green", padding: "10px", margin: "10px", borderRadius: "5px", color: "white" }}>
           <h3>Name: {props.name}</h3>
           <p>Age: {props.age}</p>
           <p>Email: {props.email}</p>
       </div>
    );
}

export default Usecard;

