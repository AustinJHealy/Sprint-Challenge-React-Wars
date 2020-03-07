import React from "react";
import styled from "styled-components";

function Person (props) {
console.log(props);

const Paragraph = styled.p`
    color: red;
    border: 5px dotted blue;
    font-size: 1rem;
    font-family: Tahoma, Geneva, sans-serif;
    border-radius: 10px;
    margin: 2% 10%;
    padding: 1%;
`

    return (
    <div className="person">
      <h1>{props.name}</h1>
      <Paragraph>{props.height}</Paragraph>
      <Paragraph>{props.mass}</Paragraph>
      <Paragraph>{props.hairColor}</Paragraph>
      <Paragraph>{props.skinColor}</Paragraph>
      <Paragraph>{props.eyeColor}</Paragraph>
      <Paragraph>{props.birthYear}</Paragraph>
      <Paragraph>{props.gender}</Paragraph>
     
      
    </div>

    )
}

export default Person;