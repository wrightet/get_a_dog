import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function BreedList(){
    const [breed, setBreeds] = useState([])
    useEffect(() => {
        axios.get('https://api.thedogapi.com/v1/breeds/').then(res => setBreeds(res.data))

    }, []);
    let count = 0;
    return(
        <div className='breeds_list'>
            <ul>
                {breed.map(dog => (
                    <li key={count++}>{dog.name}</li>
                    // <li key={count++}><Link to='/dog_show'>{dog.name}</Link></li>
                ))}
            </ul>
        </div>
    )
}

export default BreedList;