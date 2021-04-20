import axios from 'axios';
import './App.css';
import React, {useEffect, useState} from 'react';
import BreedList from './components/breed_list';
import DogShow from './components/dog_show';
import { Route, HashRouter} from 'react-router-dom';

function App() {
  const [imgSrc, setImgSrc] = useState(null);
 

  useEffect(() => {
    axios.get("https://api.thedogapi.com/v1/images/search").then(res => {
      setImgSrc(res.data[0].url);
    });   
  }, []);


  return (
    <HashRouter>
    <div className="App">
      <header></header>
      <div className='greeting-bar'>
        <h1>Get a Dog!</h1>
        {imgSrc !== null ? <img className='landing-image' src={imgSrc} alt='' /> : null}
        <a href="#" className='new_pic' onClick={() => axios.get("https://api.thedogapi.com/v1/images/search").then(res => {
          setImgSrc(res.data[0].url);
        })}>New Picture</a>
      </div>
    
       <Route exact path='/' component={BreedList}/>
       <Route exact path='/:id' component={DogShow}/>
      
    
      <footer>
        <ul className='footer-links'>
          <li className='link'><a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/ethan-wright-91a75270/'>LinkedIn</a></li>
          <li className='link'><a target="_blank" rel="noreferrer" href='https://github.com/wrightet/get_a_dog'>GitHub</a></li>
          <li className='link'><a target="_blank" rel="noreferrer" href='https://wrightet.github.io/ethan-wright/'>Portfolio</a></li>
        </ul>
      </footer>
    </div>
    </HashRouter>
  );
}

export default App;
