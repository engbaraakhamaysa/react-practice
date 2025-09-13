import React from "react";
export default function App() {
  const Baraa = React.useState("Hello");
  console.log(Baraa);
  const [Name, setName] = React.useState("Baraa");
  //   console.log(Baraa);
  //   console.log(Name);
  //   setName("Baraaa Kh");
  //   console.log(Name);

  function Toggle() {
    setName("Baraa Khamaysa");
  }

  return (
    <div
      style={{ fontSize: "40px", textAlign: "center" }}
      //   onClick={() => setName("Baraa Khamaysa")}
      onClick={Toggle}
    >
      {Name}
    </div>
  );
}
