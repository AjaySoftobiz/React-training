import React, { Component } from 'react'
import './person.css'

export class Person extends Component {
    

    render() {
        return (
            <div className="person">
                <h1 onClick={this.props.click}>Hello i am {this.props.name}</h1>
                <input value={this.props.name} type="text" onChange={this.props.change} />
            </div>
        )
    }
}

export default Person
