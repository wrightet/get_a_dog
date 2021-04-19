import axios from 'axios';
import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    axios.get("https://api.thedogapi.com/v1/images/search").then(res => {
      setImgSrc(res.data);
    });
  }, []);


  return (
    <div className="App">
        <h1>test</h1>
      
      {imgSrc !== null ? <img src={imgSrc} /> : null}
    </div>
  );
}

export default App;
