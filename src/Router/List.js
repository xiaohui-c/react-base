import { useSearchParams } from 'react-router-dom'

function List() {
    const [params] = useSearchParams()
    const id = params.get('id')
    return (
        <div>
            列表页面
            <p>{id}</p>
        </div>
    )
}

export default List
