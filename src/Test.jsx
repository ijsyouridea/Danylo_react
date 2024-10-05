import "./styles.css";

export default function App() {
  const list = ["apple", "banana", "lemon"];

  return (
    <ul>
      {list.map((item) => (
        <Counter value={item} />
      ))}
    </ul>
  );
}

function Counter(props) {
  return <li>{props.value}</li>;
}
