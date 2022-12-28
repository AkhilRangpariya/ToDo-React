import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import List from "./List.js";

const ToDoList = () => {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  const listOfItems = () => {
    setNewItem((olditems) => {
      return [...olditems, item];
    });
    setItem(" ");
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List </h1>
          <br />
          <input
            type="text"
            value={item}
            placeholder="Add a List"
            onChange={itemEvent}
          />
          <Button className="newBtn" onClick={listOfItems}>
            <AddIcon />
          </Button>
          <br />
          <ol>
            {newItem.map((val, index) => {
              return <List key={index} text={val} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
