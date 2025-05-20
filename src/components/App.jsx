import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [NoteArr, setNoteArr] = React.useState([]);
  function createNode(node) {
    return (
      <Note
        key={node.ind}
        id={node.ind}
        title={node.title}
        content={node.content}
        obj={{ NoteArr, setNoteArr }}
      />
    );
  }
  const obj = { NoteArr, setNoteArr };
  return (
    <div>
      <Header />
      <CreateArea arr={obj} />
      {NoteArr.map(createNode)}
      <Footer />
    </div>
  );
}

export default App;
