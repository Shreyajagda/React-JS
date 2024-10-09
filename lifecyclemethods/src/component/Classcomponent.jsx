import React, { Component } from 'react'

export default class Classcomponent extends Component {
    
    constructor(props){
        super()
        this.state= {
            count :0
        }
    }

    increment = ()=> {
        this.setState({
            count: this.state.count+1
        })
    }

    componentDidMount(){
        console.log("mounted");
    }
    componentDidUpdate(){
        console.log("Updating");
        
    }
  render() {
    return (
        <div>
        <h1>Counter</h1>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.increment}>Increment</button>
    </div>
    )
  }
}
