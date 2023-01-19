import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function ShortenUrl({inputValue}) {

  const [shortenLink, setShortenLink] = useState("Result");
  const [error, setError] = useState(false);
  
  const fetchData = async () => {
      try {
          const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
          setShortenLink(res.data.result.full_short_link);
        } catch (err) {
            setError(err);
        } finally {
            
        }
    }
    
    useEffect(() => {
        if(inputValue.length) {
            fetchData();
        }
    }, [inputValue]);
    
    console.log(shortenLink);

    return (
      <>
        {shortenLink && (
          <div className="output">
            <h3>{shortenLink}</h3>
          </div>   
        )}
      </>
    
    );
  
}

export default ShortenUrl;