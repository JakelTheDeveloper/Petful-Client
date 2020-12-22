import React from 'react'
import './Pet.css'

function Pet (props) {
   
    return(
        <div>
            <img src={props.image} alt = 'cat' width = '250px' height = '200px'/>
            <div className = "pets_container">
            <ul className = 'ul'>
                <li className = 'li'>Name: {props.name}</li>
                <li className = 'li'>Age: {props.age}</li>
                <li className = 'li'>Breed: {props.breed}</li>
                <li className = 'li'>Gender: {props.gender}</li>
                <li className = 'li'>Description: {props.description}</li>
                <li className = 'li'>Story: {props.story}</li>
            </ul>
            </div>
        </div>
    )
}

export default Pet