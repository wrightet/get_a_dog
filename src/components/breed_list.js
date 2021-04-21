import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
function BreedList(){
    const [breeds, setBreeds] = useState([])
    useEffect(() => {
        axios.get('https://api.thedogapi.com/v1/breeds/').then(res => setBreeds(res.data))
    }, {});
    console.log('breeds', breeds)

    return(
        <div className='breeds_list'>
           
                {breeds.map(dog => (
                    // <li key={dog.id}>{dog.name}</li>
                    
                    <Link key={dog.id} className='dog-link' to={`/${dog.id}`}><div className='indiv-dog-breed' key={dog.id}>{dog.name}</div></Link>
                    
                ))}
           
        </div>
    )
}

export default BreedList;