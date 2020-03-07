import React from "react";

function Person (props) {
console.log(props);

    return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>{props.height}</p>
      <p>{props.mass}</p>
      <p>{props.hairColor}</p>
      <p>{props.skinColor}</p>
      <p>{props.eyeColor}</p>
      <p>{props.birthYear}</p>
      <p>{props.gender}</p>
      <p>{props.homeworld}</p>
      
    </div>

    )
}

export default Person;