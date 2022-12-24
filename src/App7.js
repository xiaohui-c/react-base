import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Content extends Component{

    static propTypes = {
        msg:PropTypes.number
    }
    static defaultProps = {
        bg:'skyblue'
    }

    render() {
        return (
            <div style = {{backgroundColor:this.props.bg}}>{this.props.msg}</div>
        )
    }
}
export default class App7 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg1: '书山有路勤为径',
            msg2: "学海无涯苦作舟",
            bg:'#cff'
        }
    }
    render() {
        return (
            <div>
                <Content msg = {this.state.msg1} bg = {this.state.bg}></Content>
                <Content msg = {this.state.msg2}>子元素</Content>
            </div>
        )
    }
}
