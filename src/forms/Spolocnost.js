// Spolocnost.js
import React from "react";

export default function Spolocnost(props) {
  const { id, name } = props;

  return (
    <div>
      Spolocnost
      <div>Id: {id}</div>
      <div>Name: {name}</div>
    </div>
  );
}
