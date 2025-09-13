import Card from "./Components/Card.js";
import { data } from "./data.js";

export default function App() {
  console.log(data);
  const dataShow = data.map((el) => (
    <Card
      img={el.imgUrl}
      title={el.title}
      desc={el.desc}
      pric={el.pric}
      reat={el.reat}
    />
  ));
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        flexWrap: "wrap",
      }}
    >
      {dataShow}
    </div>
  );
}
