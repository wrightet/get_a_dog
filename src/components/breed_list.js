import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
function BreedList(){
    const [breeds, setBreeds] = useState([])
    useEffect(() => {
        axios.get('https://api.thedogapi.com/v1/breeds/').then(res => setBreeds(res.data))
    }, []);
    console.log('breeds', breeds)
    return(
        <div className='breeds_list'>
           
                {breeds.map(dog => (
                    // <li key={dog.id}>{dog.name}</li>
                    
                     <div><Link to={`/${dog.id}`}></Link>{dog.name}</div>
                    
                ))}
           
        </div>
    )
}

export default BreedList;