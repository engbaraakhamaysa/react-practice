import { useEffect } from "react";
import React from "react";
import Card from "./Card";

export default function App() {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setData(data.data.memes.map((item) => item.name)));
  }, []);

  const showData = data.map((item, index) => <Card name={item} key={index} />);

  return <div>{showData}</div>;
}
