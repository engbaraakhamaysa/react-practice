/* Here Creat A Root Name is App And Export it to Index.js  */
export default function App() {
  return (
    <div>
      <h1>He</h1>
      <h2>IM</h2>
      <h3>Baraa</h3>

      <img
        src={require("./images.jpg")}
        alt="Logo"
        width="200px"
        style={{
          width: "200px",
          marginRight: "200px",
        }}
      />
    </div>
  );
}
