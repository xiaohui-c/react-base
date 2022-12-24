import React, { Component } from 'react'

export default class App4 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num:120
        }
    }

    add() {
        this.setState({
            num:this.state.num+1
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.num}</p>
                <button onClick={this.add.bind(this)}>增加</button>
            </div>
        )
    }
}
