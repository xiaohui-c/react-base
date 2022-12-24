import React, { Component } from 'react'

export default class App10 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num:0
        }
    }
    HandlerChange(e) {
        this.setState({
            num:e.target.value
        })
        if (e.target.value > 10) {
            alert('warning!!!')
        }
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.HandlerChange.bind(this)} />
                <p>{this.state.num}</p>
            </div>
        )
    }
}
