import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
// import EditItem from "./EditItem";

function Note(props) {
  const [Update, setUpdate] = useState({
    title: props.title,
    content: props.content
  });
  function handleClick() {
    props.onDelete(props.id);
  }
  // function onEditValue() {
  //   props.onChange(props);
  // }

  function editUpdate(event) {
    const { name, value } = event.target;
    setUpdate(prvValue => {
      return {
        ...prvValue,
        [name]: value
      };
    });
  }

  return (
    <div className="note" onChange={editUpdate}>
      <input
        className="heading"
        name="title"
        onchange={editUpdate}
        value={Update.title}
      />
      <input
        className="para"
        onchange={editUpdate}
        name="content"
        value={Update.content}
      />
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
      {/* <button onClick={onEditValue}>edit</button> */}
    </div>
  );
}

export default Note;
