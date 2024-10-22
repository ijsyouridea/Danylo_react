import { useState } from "react";
export default function Container() {
  const [color, setColor] = useState("black");
  return (
    <div>
      <ToggleButton color="blue" colorToToggle={color} />
      <ToggleButton color="yellow" colorToToggle={color} />
      <ToggleButton color="pink" colorToToggle={color} />
      <ToggleButton color="wheet" colorToToggle={color}>
        color
      </ToggleButton>
      <ToggleButton color="violet" height="50px" colorToToggle={color}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </ToggleButton>
    </div>
  );
}

function ToggleButton({
  color,
  colorToToggle = "green",
  children,
  height = "40px",
}) {
  //(props)
  //   const { color, colorToToggle = "green" } = props;
  const [value, setValue] = useState(1);
  return (
    <button
      style={{
        backgroundColor: value ? color : colorToToggle,
        height: height,
      }}
      onClick={() => setValue(!value)}
    >
      {children || `toggle color ${value.toString()}`}
    </button>
  );
}
