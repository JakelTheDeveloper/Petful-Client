import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import CatsPage from '../Pets/CatsPage'
import DogsPage from '../Pets/DogsPage'
import AdoptionPage from '../Adoption/AdoptionPage'
import AdoptPage from '../AdoptPage/AdoptPage'
import config from '../config'
import './App.css'

class App extends Component {
    state = {
        people: [],
        user: [],
        pets: [],
        dogs: {},
        cats: {},
        count: 0,
        ready: false
    }
    componentDidMount() {
        fetch(`${config.URL}/pets/cats/next`).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        )
            .then(data => this.setState({ cats: data }))
            .catch(error => this.setState({ error }))

        fetch(`${config.URL}/pets/dogs/next`).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        )
            .then(data => this.setState({ dogs: data }))
            .catch(error => this.setState({ error }))

        fetch(`${config.URL}/people`).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        )
            .then(data => this.setState({ people: data }))
            .catch(error => this.setState({ error }))
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.cats !== this.state.cats) {
            fetch(`${config.URL}/pets/cats/next`).then((res) =>
                !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
            )
                .then(data => this.setState({ cats: data }))
                .catch(error => this.setState({ error }))
        }
        if (prevState.dogs !== this.state.dogs) {
            fetch(`${config.URL}/pets/dogs/next`).then((res) =>
                !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
            )
                .then(data => this.setState({ dogs: data }))
                .catch(error => this.setState({ error }))
        }
    }
    handleUsage(params){
        return
    }
    handleAdd = (data) => {
        let { ready,people } = this.state
        fetch(`${config.URL}/people`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),
        });
        this.setState({ people: [...people, data], ready: ready = true, user: data })
        this.handleUsage(ready)
    }

    removePerson = () => {
        let { people } = this.state
        let addedPerson = people[0]
        this.setState({ people: [...people.slice(1), addedPerson] })
        fetch(`${config.URL}/people/next`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => {
                if (!res.ok)
                    return res.json()
                        .then(e => Promise.reject(e))
            })
            .catch(error => {
                this.setState({ error: error.message })
            })
    }
    removeTheCat() {
        fetch(`${config.URL}/pets/cats/next`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => {
                if (!res.ok)
                    return res.json()
                        .then(e => Promise.reject(e))
            })
            .catch(error => {
                this.setState({ error: error.message })
            })
    }
    removeTheDog() {
        fetch(`${config.URL}/pets/dogs/next`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => {
                if (!res.ok)
                    return res.json()
                        .then(e => Promise.reject(e))
            })
            .catch(error => {
                this.setState({ error: error.message })
            })
    }

    handleCatRemove = () => {
        this.removePerson()
        this.removeTheCat()
        return fetch(`${config.URL}/pets/cats/next`).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        )
            .then(data => this.setState({ cats: data }))
            .catch(error => this.setState({ error }))
    }

    handleDogRemove = () => {
        this.removePerson()
        this.removeTheDog()
        return fetch(`${config.URL}/pets/dogs/next`).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        )
            .then(data => this.setState({ dogs: data }))
            .catch(error => this.setState({ error }))
    }

    renderMainRoutes() {
        return (
            <Switch>
                <Route exact path="/" render={(props) => (
                    <LandingPage />
                )}
                />
                <Route exact path="/adoption" render={(props) => (
                    <AdoptionPage people={this.state.people} cats={this.state.cats} dogs={this.state.dogs}
                     addPerson={this.handleAdd} ready={this.state.ready} {...props} />
                )}
                />
                <Route exact path="/adopt" render={(props) => (
                    <AdoptPage people={this.state.people} cats={this.state.cats} dogs={this.state.dogs} user={this.state.user}
                        removeDog={this.handleDogRemove} removeCat={this.handleCatRemove} {...props} />
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
                <main>{this.renderMainRoutes()}</main>
            </div>
        )
    }
}

export default App