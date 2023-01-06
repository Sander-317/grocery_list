import { useState } from "react";

function InputField({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");
  const [inputNumber, setInputNumber] = useState("");

  function onButtonPress() {
    if (inputValue.length > 0 && inputNumber > 0) {
      console.log(`submitting ${inputValue.length} price ${inputNumber}`);
      onSubmit(inputValue, inputNumber);
      setInputValue("");
      setInputNumber("");
    }
  }

  return (
    <div className="input-field">
      <input
        placeholder="add a grocery item"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <input
        placeholder="add price here"
        type="number"
        value={inputNumber}
        onChange={(e) => setInputNumber(e.target.value)}
      />
      <button onClick={onButtonPress}>add</button>
    </div>
  );
}

export default InputField;
