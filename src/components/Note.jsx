import React from "react";
function Note(props) {
  var Arr = props.obj.NoteArr;
  var setArr = props.obj.setNoteArr;

  function deleteItem() {
    setArr(Arr.filter((item) => item.ind !== props.id));
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteItem}>DELETE</button>
    </div>
  );
}

export default Note;
