import { useState} from 'react'
export function useWindowScroll() {
    const [y, setY] = useState(0)
    window.addEventListener('scroll',() => {
        setY(document.documentElement.scrollTop)
    })
    return [y]
}

