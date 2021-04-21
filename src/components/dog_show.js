import React,  {useState, useEffect} from 'react';
// import {gql, useQuery} from '@apollo/client';
import axios from 'axios';
import '../App.css';
// const GET_DOG = gql`
//     query getDog{
//         id: ID!
//         name: String!
//         life_span: String!
//         origin: String!
//         weight: String!
//         height: String!
//     }
// `
function DogShow() {
    // const { id, name, life_span, origin, weight, height} = useQuery(getDog);
    const [dog, setDog] = useState({});
    const href  = window.location.href.split('/');
    const id = href[href.length - 1];
    useEffect(() => {
    
        axios.get(`https://api.thedogapi.com/v1/breeds/${id}`)
        .then(
            res => setDog({
                name:res.data.name,
                life_span:res.data.life_span,
                origin:res.data.origin,
                weight:res.data.weight.imperial,
                height:res.data.height.imperial,
                bred_for: res.data.bred_for,
                breed_group: res.data.breed_group,
                image: res.data.reference_image_id
                // res

            }
                ))
    }, []);
    console.log(dog);
    return (
    <div className='dog_facts'>
        <ul>
                <li><img src={`https://cdn2.thedogapi.com/images/${dog.image}.jpg`} alt=""></img></li>
                <li className='dog_fact_el'>{dog.name}</li>
                <li className='dog_fact_el'>Bred For:{dog.bred_for}</li>
                <li className='dog_fact_el'>Breed Group: {dog.breed_group}</li>
                <li className='dog_fact_el'>Place of Origin: {dog.origin}</li>
                <li className='dog_fact_el'>Life Span: {dog.life_span}</li>
                 <li className='dog_fact_el'>Height: {dog.height} inches</li>
                <li className='dog_fact_el'>Weight: {dog.weight} lbs</li> 
                
                
        </ul>
    </div>
    )
}


export default DogShow;