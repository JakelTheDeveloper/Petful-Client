import React, { Component } from 'react'
import './LandPage.css'
import { Link } from 'react-router-dom'


class LandingPage extends Component{
    
    state = {
        data: [],
        error: null
    }

    render(){
        return (
            <div>
                <section>
                    <article>
                    Thank you for taking a chance at adopting a pet!<br/> You can choose to adopt a cat, dog, or both,<br/>
                    but you have to adopt the pets in the order in which they came in.
                    </article>
                </section>
                <img src ='https://d17fnq9dkz9hgj.cloudfront.net/uploads/2019/09/iStock-1090668790-632x422.jpg' width="600" height="400" alt = "dog adopt me"/>
                <br/>
                <Link to="/adoption" >
                <button>Start Adoption</button>
                </Link>
            </div>
        )
    }
}

export default LandingPage