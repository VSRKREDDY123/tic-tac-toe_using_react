import React from "react";

export default function Square(props) {
  const style =
    props.value === "X"
      ? { color: "red" }
      : props.value === "O"
      ? { color: "blue" }
      : {};

  return (
    <button className="square" style={style} onClick={props.onSquareClick}>
      {props.value}
    </button>
  );
}
