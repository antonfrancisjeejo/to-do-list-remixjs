import { useState } from "react";

const InputArea = ({ addItems }) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const addItem = () => {
    if (inputText.trim() === "") {
      alert("Please enter some input");
      return;
    }
    addItems(inputText.trim());
    setInputText("");
  };

  return (
    <div className="inputField">
      <input
        placeholder="What you want to do?"
        value={inputText}
        onChange={handleChange}
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default InputArea;
