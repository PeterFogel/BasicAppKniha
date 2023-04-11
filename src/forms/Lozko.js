import React from "react";

export default function Lozko(props) {
  const { id, name } = props;

  return (
    <div>
      Lozko
      <div>Prop1: {id}</div>
      <div>Prop2: {name}</div>
    </div>
  );
}
