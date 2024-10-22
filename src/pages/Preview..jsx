import "../styles.css";
import { useState, useEffect } from "react";
import Form from "../components/Form";
import Square from "../components/Square";
import { useParams } from "react-router-dom";

const apiUrl = "https://m8d6t6-3000.csb.app";

export default function Preview() {
  const { id } = useParams();
  const [squareList, setSquareList] = useState([]);

  useEffect(() => {
    if (id) {
      fetch(apiUrl + "/api/picture/" + id)
        .then((res) => res.json())
        .then((result) => {
          setSquareList(result);
        });
    }
  }, [id]); //componentDidMount

  return (
    <div className="container">
      <div className="container">
        {squareList.map((el, index) => (
          <Square key={index} el={el} />
        ))}
      </div>
    </div>
  );
}
