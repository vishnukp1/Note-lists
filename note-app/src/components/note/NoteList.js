import React, { useEffect, useState } from "react";
import axios from "axios";

const NoteList = ({ list }) => {
  const deleteNotes = async (id) => {
    await axios.delete(`http://localhost:3033/note/${id}`);
  };

  const updateNotes = async (note,id,color) => {
 
    const item = {
      note: note,
      color: color,
    };
    await axios.put(`http://localhost:3033/note/${id}`, item);
  };
  useEffect(() => {
    updateNotes();
  }, []);

  return (
    <div>
      {list.map(function (data) {
        return (
          <div key={data._id}>
            <span style={{ backgroundColor: `${data.color}` }}>
              {data.note}
            </span>

            <button
              onClick={() => deleteNotes(data._id)}
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            >
              delete
            </button>
           
            <label>
              pick color
              <select
               onChange={(e) => updateNotes(data.note, data._id, e.target.value)}
                className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                name="selectedFruit"
              >
                <option value="red">red</option>
                <option value="yellow">yellow</option>
                <option value="green">green</option>
              </select>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default NoteList;
