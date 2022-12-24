import { useState,useContext,createContext } from 'react'

const Context = createContext()
function ComA() {
   const count = useContext(Context)
    return (
        <div>
            this is ComA{count}
             <ComC/>
        </div>
    )
}

function ComC() {
    const count = useContext(Context)
    return (
        <div>
            this is ComC{count}
        </div>
    )
}

export default function App() {
    const [count,setCount] = useState(0)
    return (
        <Context.Provider value={count}>
        <div>
            <ComA></ComA>
            <button onClick={()=>{setCount(count+1)}}>增加</button>
        </div>
        </Context.Provider>
    )
}