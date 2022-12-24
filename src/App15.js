import React, { Component, useRef, useEffect } from 'react'

 class Test extends Component {
    render() {
        return (
            <div>
                子组件
            </div>
        )
    }
}

export default function App() {
    const testRef = useRef(null)
    const h1Ref = useRef(null)
    useEffect(() => {
        console.log(testRef.current);
        console.log(h1Ref.current);
    },[])
    return (
        <div>
            <Test ref={testRef}/>
            <h1 ref={h1Ref}>父组件标题</h1>
        </div>
    )
}
