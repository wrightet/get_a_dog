import axios from 'axios';
import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    axios.get("https://api.thedogapi.com/v1/images/search").then(res => {
      setImgSrc(res.data[0].url);
    });
  }, []);


  return (
    <div className="App">
      <header></header>
        <h1>Get a Dog!</h1>
      {console.log(imgSrc)}
      {imgSrc !== null ? <img  className='landing-image' src={imgSrc} alt=''/> : null}
      <footer>
        <ul className='footer-links'>
          <li className='link'><a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/ethan-wright-91a75270/'>LinkedIn</a></li>
          <li className='link'><a target="_blank" rel="noreferrer" href='https://github.com/wrightet/get_a_dog'>GitHub</a></li>
          <li className='link'><a target="_blank" rel="noreferrer" href='https://wrightet.github.io/ethan-wright/'>Portfolio</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;