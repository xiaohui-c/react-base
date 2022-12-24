import { useState, useEffect } from 'react'
function Test() {
    useEffect(() => {
     let timer =  setInterval(() => {
           console.log(1);
       }, 1000); 
        return () => {
            clearInterval(timer)
        }
    },[])
    return (
        <div>测试数据</div>
    )
}
export default function App() {
    const [flag,setFlag] = useState(true)
    return (
        <div>
            {flag ? <Test /> : null}
            <button onClick={()=>{setFlag(!flag)}}>切换</button>
        </div>
    )
}