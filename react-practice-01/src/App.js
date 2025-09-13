import Cards from "./Components/Cards";
import { data } from "./data";

export default function App() {
  console.log(data);
  const showData = data.map((el) => <Cards title={el.title} desc={el.desc} />);
  console.log(showData);
  return (
    <div>
      {showData}
      {/* <Cards title={"Title 1"} desc={"Desc 1"} />
      <Cards title={"Title 2"} desc={"Desc 2"} />
      <Cards title={"Title 3"} desc={"Desc 3"} />
      <Cards title={"Title 4"} d esc={"Desc 4"} /> */}
    </div>
  );
}
