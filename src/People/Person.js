import React from 'react'
import './Person.css'

function Person (props) {
   
    return(
        <div className = "people_container">
            <ul className = 'ul'>
                <li className = 'li'>{props.name}</li>
            </ul>   
        </div>
    )
}

export default Person