import axios from 'axios';
import './App.css';
import React, {useEffect} from 'react';

function App() {
  useEffect(() => {getPic()})
  function getPic() {
   return axios.get('https://api.thedogapi.com/v1/images/search')
    .then(ans => ans.data[0].url);
  };
  return (
    <div className="App">
        <h1>test</h1>
        <img src={getPic()} alt="" ></img>

    </div>
  );
}

export default App;
