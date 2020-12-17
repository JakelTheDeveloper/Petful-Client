import React from 'react'

function Pet (props) {
   
    return(
        <div>
            <img src={props.image} alt = 'cat'/>
            <ul>
                <li>Name: {props.name}</li>
                <li>Age: {props.age}</li>
                <li>Breed: {props.breed}</li>
                <li>Gender: {props.gender}</li>
                <li>Description: {props.description}</li>
                <li>Story: {props.story}</li>
            </ul>
        </div>
    )
}

export default Pet