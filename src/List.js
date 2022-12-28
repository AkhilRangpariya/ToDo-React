import React, { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const List = (props) => {
  const [line, setLine] = useState(false);

  const cutIt = () => {
    setLine(true);
  };
  return (
    <div className="todo_style">
      <span onClick={cutIt}>
        <DeleteForeverIcon className="deleteIcon" />
      </span>
      <li style={{ textDecoration: line ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
};

export default List;
