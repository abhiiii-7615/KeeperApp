import React from "react";

function CreateArea(props) {
  var Arr = props.arr.NoteArr;
  var setArr = props.arr.setNoteArr;
  const [titleText, setTitleText] = React.useState("");
  const [noteText, setNoteText] = React.useState("");

  function updateTitleText(event) {
    setTitleText(event.target.value);
  }

  function updateNoteText(event) {
    setNoteText(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();
    const newNote = {
      ind: Arr.length,
      title: titleText,
      content: noteText,
    };
    setArr([...Arr, newNote]);
    setTitleText("");
    setNoteText("");
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={titleText}
          onChange={updateTitleText}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={noteText}
          onChange={updateNoteText}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
