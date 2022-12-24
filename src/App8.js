import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Child extends Component{
    static contextTypes = {
        value:PropTypes.string
    }
    render() {
        return (
            <div>{this.context.value}</div>
        )
    }
}
class Mom extends Component{
    render() {
        return (
            <Child/>
        )
    }
}
export default class App8 extends Component {
    static childContextTypes = {
        value:PropTypes.string
    }
    getChildContext() {
        return {
            value:"书山有路勤为径"
        }
    }
    render() {
        return (
            <Mom/>
        )
    }
}
