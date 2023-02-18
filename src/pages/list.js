import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../todoContext";
import "../todo.scss";
import Item from "./item";

const List = () => {
  const { data } = useContext(MyContext);
  console.log(data);
  return (
    <div class="todo">
      <h2>Todolist (6)</h2>
      <ul>
        {data.map((obj) => (
          <Item key={obj.id} itemValue = {obj}/>
        ))}
      </ul>
      <Link to="/write">할일등록</Link>
    </div>
  );
};

export default List;
