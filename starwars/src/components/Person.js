import React from "react";

function Person (props) {

console.log(props);
    return (
    <div className="person">
      <h1>{props.data}</h1>
      
    </div>

    )
}

export default Person;