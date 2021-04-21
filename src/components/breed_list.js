import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
function BreedList(){
    const [breeds, setBreeds] = useState([])
    const [start, setStart] = useState(0);
    const [last, setLast] = useState(25);
    useEffect(() => {
        axios.get('https://api.thedogapi.com/v1/breeds/').then(res => setBreeds(res.data))
    }, []);
    // console.log('breeds', breeds)
    function forward(){
        setLast(last + 25 > 176 ? 176 : last + 25)
        setStart(start + 25 > 151 ? 151 : start + 25)
    }
    function previous(){
        setLast( last - 25 < 25 ? 25 : last - 25)
        setStart(start - 25 < 0 ? 0 : start - 25)
    }
    console.log(start, last)
    return(
        <div className='breeds_list'>
            <button className='forward-back' onClick={previous}>Prev</button>
            <button className='forward-back' onClick={forward}>Next</button>
                {breeds.slice(start,last).map(dog => (
                    // <li key={dog.id}>{dog.name}</li>
                    
                    <Link key={dog.id} className='dog-link' to={`/${dog.id}`}><div className='indiv-dog-breed' key={dog.id}>{dog.name}</div></Link>
                    
                ))}

               
           
        </div>
    )
}

export default BreedList;