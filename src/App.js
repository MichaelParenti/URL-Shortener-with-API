import React from 'react';
import { useState } from 'react';
import './App.css';
import ShortenUrl from './URL';
import Input from './Input';

function FinalUrl() {


  const [inputValue, setInputValue] = useState("")


  //const input = "https://api.shrtco.de/v2/shorten?url=" + {value};


  return (
    <div className="container">
      <Input setInputValue={setInputValue} />
      <ShortenUrl inputValue={inputValue} />
    </div>
  );
}

export default FinalUrl;;
