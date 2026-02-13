import { useState } from "react";
import API from "../api";

const AddQuote = ({ selectedMood }) => {
  const [text, setText] = useState("");

  const handleSubmit = async () => {
    if (!selectedMood || !text) return alert("Fill all fields");

    await API.post("/quotes", {
      mood: selectedMood,
      text
    });

    setText("");
    alert("Quote Added");
  };

  return (
    <>
      <textarea
        className="textarea"
        placeholder="Write your quote..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button className="button" onClick={handleSubmit}>
        Add Quote
      </button>
    </>
  );
};

export default AddQuote;