import { useState } from "react";

function InputField({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  function onButtonPress() {
    if (inputValue.length > 0) {
      console.log(`submitting ${inputValue.length}`);
      onSubmit(inputValue);
      setInputValue("");
    }
  }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={onButtonPress} placeholder="add a grocery item">
        add
      </button>
    </div>
  );
}

export default InputField;
