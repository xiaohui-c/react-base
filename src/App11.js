import { useState, useEffect } from 'react'

function App() {

    useEffect(() => {
     document.title = 1  
    },[])
    const [count, setCount] = useState(0)
    return (
        <div>
            <div onClick={() => setCount(count + 1)}>{count}</div>
        </div>
    )
}

export default App