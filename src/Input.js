import React from 'react';
import { useState } from 'react';
import './App.css';

function Input({setInputValue}) {


  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  }

  return (
    <div className="inner">
      <h1>URL Shortener</h1>
      <div className="inputs">
          <input
          type="text"
          placeholder="Paste a link to shorten it..."
          value={value}
          onChange={e => setValue(e.target.value)}
          />
          <button onClick={handleClick}>Shorten</button>
      </div>
    </div>
  );

}

export default Input;