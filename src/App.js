import React, { Component } from 'react'
import Pet from './Pet'

class App extends Component {
    state = {
        screenData: [],
        data: [],
        error: null
    }
    renderData() {
        return (
            <div>
                <p className="confirm">Are You Sure?</p>
                <button onClick={this.handleDelete} className="NavBtn">Yes</button>
                <button onClick={this.setConfirm} className="NavBtn">No</button>
            </div>
        )
    }
    componentDidMount() {
        fetch(`http://localhost:8000/api/cats`)
            .then(response => {
                if (!response.ok)
                    return response.json().then(e => Promise.reject(e))
                return response.json()
            })
            .then(data => this.setState({data:data.first.value}))
            .catch(error => this.setState({ error }))
    }
    render() {

        let thisData = [this.state.data]
        console.log("data:", thisData)
        let screenData
        return (
            <div>
                {thisData.map((data,index) =>
                    <Pet key = {index} name={data.name} gender={data.gender} age={data.age} breed={data.breed}
                        story={data.story} description={data.description} image  = {data.imageURL}
                    />)}
            </div>
        )
    }
}

export default App