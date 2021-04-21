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
            <ul>
                {breeds.map(dog => (
                    // <li key={dog.id}>{dog.name}</li>
                    <li key={dog.id}>
                        <Link className='dog_link' to={`/${dog.id}`}>{dog.name}<img src={dog.reference_image_id} alt="" className="dog-photo" />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BreedList;