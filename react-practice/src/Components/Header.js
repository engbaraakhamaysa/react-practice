import logo from "../images.jpg";

export default function Header() {
  return (
    <div>
      <ul>
        <div>
          <h1>Web Developer</h1>
          <li className="li">React.js</li>
          <li>Web</li>
          <li>three.js</li>
          <li>Node.js</li>
        </div>
        <img
          src={logo}
          alt="logo"
          style={{
            width: "500px",
            marginRight: "300px",
            marginTop: "500px",
          }}
        />
      </ul>
    </div>
  );
}
