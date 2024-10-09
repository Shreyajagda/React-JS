import React, { Component } from 'react'

export default class Classcom extends Component {

    constructor(props){
        super()
        this.state = {count : 0}
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    reset = () => {
        this.setState({
            count: 0
        })
    }

  render() {
    return (
        <div className='container'>
        <h1>Counter</h1>
        <h2 className='counter'>{this.state.count}</h2>
        <div className="buttons">
            <button className='button' onClick={this.increment}>
                <i> Increment </i>
            </button>
            <button className='button' onClick={this.decrement}>
                <i> Decrement </i>
            </button>
            <button className='button' onClick={this.reset}>
                <i> Reset</i>
            </button>
        </div>
    </div>
    )
  }
}
