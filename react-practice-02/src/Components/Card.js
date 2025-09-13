export default function Card(props) {
  return (
    <div style={{ width: "400px" }}>
      <div
        style={{
          backgroundImage: `url(${props.img})`,
          width: "400px",
          height: "400px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "10px",
        }}
      ></div>
      {/* <img
        src={props.img}
        alt="Img"
        style={{
          width: "400px",
        }}
    //   /> */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "0",
        }}
      >
        <h1>{props.title}</h1>{" "}
        <p style={{ color: "#717171", fontWeight: "normal" }}>
          {" "}
          <i className="fa-solid fa-star" style={{ color: "gold" }}></i>
          {props.reat}
        </p>
      </div>
      <h3 style={{ color: "gray", marginTop: "0" }}>{props.desc}</h3>
      <p>
        {props.pric}$ <span style={{ fontWeight: "normal" }}>night</span>
      </p>
    </div>
  );
}
