import React, { useEffect, useState } from "react";
import axios from "axios";

const NoteList = ({ list }) => {
  const deleteNotes = async (id) => {
    await axios.delete(`http://localhost:3033/note/${id}`);
  };

  const updateNotes = async (note, color, id) => {
    const red = "red";
    const item = {
      note: note,
      color: red,
    };
    await axios.put(`http://localhost:3033/note/${id}`, item);
  };
  useEffect(() => {
    updateNotes();
  }, [list]);

  return (
    <div>
      {list.map(function (data) {
        return (
          <div>
            <span style={{ backgroundColor: `${data.color}` }}>
              {data.note}
            </span>

            <button
              onClick={() => deleteNotes(data._id)}
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            >
              delete
            </button>
            <button
              onClick={() => updateNotes(data.note, data._id)}
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            >
              update
            </button>
            <label>
              pick color
              <select
                onClick={() => updateNotes(data.note, data._id)}
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
