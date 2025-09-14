import React from "react";

export default function Star() {
  const [Star, setStar] = React.useState("black");

  function Color() {
    setStar((v) => !v);
  }
  return (
    <div>
      <i
        className="fa-solid fa-star"
        onClick={Color} // or onClick = {() => setStar((v) => !v)}
        style={{ color: Star ? "" : "gold" }}
      ></i>
    </div>
  );
}
