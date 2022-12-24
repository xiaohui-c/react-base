import React from 'react'

let list = [1,2,3,4]
export default class App3 extends React.Component {
    render() {
        return (
            list.map((value, key) => {
                return <p key = {key} >{value}</p>
            })
        )
    }
}