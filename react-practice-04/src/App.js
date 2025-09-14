import React from "react";

export default function App() {
  const [fName, setfNaem] = React.useState("");
  const [lName, setlNaem] = React.useState("");
  const [Email, setEmail] = React.useState("");

  console.log(fName);
  console.log(lName);
  console.log(Email);

  return (
    <div>
      <form action="">
        <label htmlFor="1">First Name :</label>
        <input
          type="text"
          id="1"
          placeholder="First Name"
          value={fName}
          required
          onChange={(e) => setfNaem(e.target.value)} // hear only e or event
        />

        <label htmlFor="2">Last Name :</label>
        <input
          type="text"
          id="2"
          placeholder="Last Name"
          value={lName}
          required
          onChange={(e) => setlNaem(e.target.value)}
        />

        <label htmlFor="3">Email :</label>
        <input
          type="email"
          id="3"
          placeholder="Email"
          value={Email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
