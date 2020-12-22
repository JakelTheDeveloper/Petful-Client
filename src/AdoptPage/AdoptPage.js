import React, { Component } from 'react'
import Pet from '../Pets/Pet'
import Person from '../People/Person'
import CatsPage from '../Pets/CatsPage'

class AdoptPage extends Component {

    state = {
        data: [],
        cats:this.props.cats,
        count:0,
        error: null
    }

//    componentDidMount(){
//     this.intervalId = setInterval(() => {
//         let currentCount = this.state.count + 1;
//         this.setState({ count: currentCount });
//         if(this.state.count === 5){
//             let decision = Math.floor(Math.random() * Math.floor(2));
//             let pet;
//             if(decision === 0){
//                 pet = this.props.cats
//             }else{
//                 if(decision === 1){
//                     pet = this.props.dogs
//                 }
//             }
//             let currentCount = 0;
//             this.setState({ count: currentCount });
//             this.props.removePerson(this.props.people[0],pet.name)
//         }
//     },1000)
//    }

   componentWillUnmount(){
    clearInterval(this.intervalId)
   }

    render() {
        let cats = [this.props.cats.value][0]
        let dog = [this.props.dogs]
        let cat = [this.props.cats]
        let thisData = [this.props.people]
        let data = thisData[0]
       
        return (
            <div>
                {this.state.count}
                {data.map((data, index) =>
                    <Person key={index} id ={index} name={data.name}
                    />)}
                <h2>Available Pets</h2>
                <div className="container">
                    <div className="pets">
                        {dog.map((pet, index) =>
                            <Pet key={index} id ={index} name={pet.name} gender={pet.gender} age={pet.age} breed={pet.breed}
                                story={pet.story} description={pet.description} image={pet.imageURL}
                            />)}
                            
                        {cat.map((pet, index) =>
                            <Pet key={index} id ={index} name={pet.name} gender={pet.gender} age={pet.age} breed={pet.breed}
                                story={pet.story} description={pet.description} image={pet.imageURL}
                            />
                             )}
                    </div>
                </div>
            </div>
        )

    }
}

export default AdoptPage