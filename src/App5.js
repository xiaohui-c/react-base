import React, { Component } from 'react';

class App5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val:'春眠不觉晓'
        }
    }

    handlerChange(e) {
        this.setState({
            val:e.target.value
        })
    }
    

    render() {
        return (
            <div>
                <input type="text" value={this.state.val}  onChange={this.handlerChange.bind(this)} />
                <p>{this.state.val}</p>
            </div>
        );
    }
}

export default App5;