import React, {useState} from "react";
import Header from "./Header";
// import notes from "../notes";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){

  const [notes, setNotes] = useState([]);

  function addNote(newNote){
    setNotes((prevNotes)=>{
      return [...prevNotes, newNote]  
    });
  }
  function deleteNote(id){
    setNotes(prevNote=>{
      return prevNote.filter((notes, index)=>{
        return index !==id;
      })
    });
  }
  function editNote(edit){
    setNotes((prev)=>{
      return [...prev, edit];
    });

  }




  return (<div>
    <Header />
    <CreateArea onAdd={addNote} />
    {notes.map((noteItem, index) => {
      return (
        <Note
          key ={index}
          id ={index} 
          title={noteItem.title}
          content={noteItem.content}
          onChecked={deleteNote}
          onEditNote={editNote}
        />
      );
    })}

    {/* <Note key={1} title="Note title" content="Note content" /> */}
    <Footer />
  </div>)
}

export default App;