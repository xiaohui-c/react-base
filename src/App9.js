import React, { Component } from 'react'
class Child extends Component{
    handlerChange() {
        this.props.numberChange(1)
    }
    
    
    render() {
        return (
            <button onClick={this.handlerChange.bind(this)}>增加</button>
        )
    }
}
export default class App9 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num:20
        }
        console.log('constructor');
    }

    UNSAFE_componentWillMount() {
        console.log("在挂载数据之前需要执行的代码");
    }
    componentDidMount() {
        console.log("在挂载数据完成之后需要执行的代码");
    }
    
    numberChange(value) {
        console.log(value);
        this.setState({
           num: this.state.num + value
        })
    }
    render() {
        console.log('render');
        return (
            <div>
                <Child numberChange={this.numberChange.bind(this)}/>
                <p>{this.state.num}</p>
            </div>
        )
    }
}
