import Card from "./Components/Card.js";
import { data } from "./data.js";

export default function App() {
  console.log(data);
  const dataShow = data.map((el) => (
    <Card
      key={el.id} // key={index} or Use Map prpret index he start to 1 finshed to length data el.id or index
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
