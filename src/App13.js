import {useState} from 'react'
function Counter(props) {
    const [count, setstate] = useState(()=>{return props.count * 2})
    return (
        <div onClick={()=>setstate(count+1)}>{count}</div>
    )
}

export default function App() {
    return (
        <div>
            <Counter count={10}/>
            <Counter count={20}/>
        </div>
    )
}