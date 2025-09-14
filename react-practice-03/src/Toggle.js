import React from "react";
export default function Toggle() {
  const Baraa = React.useState("Hello");
  console.log(Baraa);
  const [Name, setName] = React.useState("Yes");

  //   console.log(Baraa);
  //   console.log(Name);
  //   setName("Baraaa Kh");
  //   console.log(Name);

  function Togle() {
    setName((value) => (value === "Yes" ? "No" : "Yes"));
  }
  return (
    <div style={{ fontSize: "40px" }} onClick={Togle}>
      {Name}
    </div>
  );
}
