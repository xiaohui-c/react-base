import {useNavigate} from 'react-router-dom'


function Login() {
    const navigate = useNavigate()
    function goList() {
        navigate('/list?id=1001')
    }
        return (
            <div>
                login
                 <button onClick={goList}>跳到列表页面</button>
            </div>
        )
}

export default Login
