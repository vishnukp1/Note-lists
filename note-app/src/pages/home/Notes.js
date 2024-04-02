import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NoteList from "../../components/note/NoteList";

const Notes = () => {
  const navigate = useNavigate();
  const [list, setlist] = useState([]);
  const userRef = useRef();

  const getNotes = async () => {
    const response = await axios.get("http://localhost:3033/note");

    const data = response.data.data;

    setlist(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      note: userRef.current.note.value,
    
    };

    await axios.post("http://localhost:3033/note", userData);

    getNotes();
  };
  useEffect(() => {
    getNotes();
  },[]);
 
  return (
    <div className="ml-20 mt-10">
       
      <form  ref={userRef} onSubmit={handleSubmit}>
        <input
          className="text-sm w-100 px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          name="note"
          placeholder="Name .."
        />
        
        <button
          type="submit"
          className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
        >
          submit
        </button>
      </form>
      <NoteList list={list} />
      </div>
   
  );
};

export default Notes;
