import {useWindowScroll} from './hooks/useWindowScroll'
function App() {
    const [y] = useWindowScroll()
    return (
        <div style={{ height: "2000px" }}>
            <p style={{position:"relative",top:y}}>现在距离窗口顶部高度是:{y}</p>
        </div>
    )
 }
export default App