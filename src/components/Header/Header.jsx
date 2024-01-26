import reactImg from "../../assets/react-core-concepts.png";
import './Header.css';

const reactDesc = ["Fundamental", "Crucial", "Core"];

export default function Header() {
  let r = genRandomInt(2);
  console.log(r);
  const desc = reactDesc[r];

  return (
    <header>
      <img src={reactImg} />  
      <h1>React Essentials</h1>
      <p>
        {desc} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}

function genRandomInt(tot) {
  return Math.floor(Math.random() * (tot + 1));
}
