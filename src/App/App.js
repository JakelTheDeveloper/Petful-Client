import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import CatsPage from '../Pets/CatsPage'
import DogsPage from '../Pets/DogsPage'
import AdoptionPage from '../Adoption/AdoptionPage'
import AdoptPage from '../AdoptPage/AdoptPage'
import './App.css'

class App extends Component {
    state = {
        people: [],
        pets: [],
        dogs: [],
        cats: [],
        count: 0,
        ready: false
    }
    componentDidMount() {
        fetch(`http://localhost:8000/api/pets`)
            .then(response => {
                if (!response.ok)
                    return response.json().then(e => Promise.reject(e))
                return response.json()
            })
            .then(data => this.setState({ pets: data }))
            .catch(error => this.setState({ error }))
        fetch(`http://localhost:8000/api/dogs`)
            .then(response => {
                if (!response.ok)
                    return response.json().then(e => Promise.reject(e))
                return response.json()
            })
            //Change this line to dogs:data.value and the dog will show else it wont!!!!!
            .then(data => this.setState({ dogs: data }))
            .catch(error => this.setState({ error }))
        fetch(`http://localhost:8000/api/cats`)
            .then(response => {
                if (!response.ok)
                    return response.json().then(e => Promise.reject(e))
                return response.json()
            })
            //Change this line to cats:data.value and the cat will show else it wont!!!!!
            .then(data => this.setState({ cats: data }))
            .catch(error => this.setState({ error }))
        fetch(`http://localhost:8000/api/people`)
            .then(response => {
                if (!response.ok)
                    return response.json().then(e => Promise.reject(e))
                return response.json()
            })
            .then(data => this.setState({ people: data }))
            .catch(error => this.setState({ error }))
    }

    handleAdd = (data) => {
        let { ready } = this.state
        this.setState({ people: [...this.state.people, data], ready: ready = true })
    }

    handleRemove = (id, index) => {
        if (this.state.people.length > 0) {
            this.setState({
                people: this.state.people.filter(person => person !== id),
                // cats: this.state.cats.filter(cat => console.log(cat))
            })
        }
    }

    renderNavRoutes() {
        return (
            <div>

            </div>
        )
    }
    renderMainRoutes() {
        return (
            <Switch>
                <Route exact path="/" render={(props) => (
                    <LandingPage />
                )}
                />
                <Route exact path="/adoption" render={(props) => (
                    <AdoptionPage people={this.state.people} pets={this.state.pets} addPerson={this.handleAdd} ready={this.state.ready} />
                )}
                />
                <Route exact path="/adopt" render={(props) => (
                    <AdoptPage people={this.state.people} pets = {this.state.pets} cats={this.state.cats} dogs={this.state.dogs} removePerson={this.handleRemove} />
                )}
                />
                <Route path="/cats" render={(props) => (
                    <CatsPage data={this.state.cats} />
                )}
                />
                <Route path="/dogs" render={(props) => (
                    <DogsPage data={this.state.dogs} />
                )}
                />
            </Switch>
        )
    }
    render() {

        return (
            <div>
                {/* <nav>{this.renderNavRoutes()}</nav> */}
                <main>{this.renderMainRoutes()}</main>
            </div>
        )
    }
}

export default App