import "./styles.css";
import { useState } from "react";

export default function App() {
  const [show, setShow] = useState(false);
  const [color, setColor] = useState("#ff0000");
  const [width, setWidth] = useState(40);
  const [height, setHeight] = useState(40);

  return (
    <div>
      {show ? (
        <>
          <input
            type="number"
            placeholder="Enter width"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </>
      ) : (
        <button onClick={() => setShow(true)}>Add Element</button>
      )}

      <div
        style={{
          backgroundColor: color,
          width: width + "px",
          height: height + "px",
          position: "absolute",
        }}
      ></div>
    </div>
  );
}
