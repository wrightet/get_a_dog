import React,  {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css';
function DogShow() {
    const [dog, setDog] = useState({});
    useEffect(() => {
        axios.get('https://api.thedogapi.com/v1/breeds/1').then(res => setDog(res.data))
    }, []);
    console.log('dog',dog)
    return (
    <div className='dog_facts'>
        <ul>
                {/* <li><img src={`https://api.thedogapi.com/v1/images/${dog.reference_image_id}`} alt=""></img></li> */}
                <li className='dog_fact_el'>{dog.name}</li>
                <li className='dog_fact_el'>Bred For:{dog.bred_for}</li>
                <li className='dog_fact_el'>Breed Group: {dog.breed_group}</li>
                <li className='dog_fact_el'>Place of Origin: {dog.origin}</li>
                <li className='dog_fact_el'>Life Span: {dog.life_span}</li>
                {/* <li className='dog_fact_el'>Imperial: {dog.height.imperial} inches</li>
                <li className='dog_fact_el'>Metric: {dog.height.metric} cm</li>
                <li className='dog_fact_el'>Imperial: {dog.weight.imperial} lbs</li>
                <li className='dog_fact_el'>Metric: {dog.weight.metric} kg</li> */}
                
        </ul>
    </div>
    )
}

export default DogShow;