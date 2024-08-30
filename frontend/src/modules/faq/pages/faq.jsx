import Store from '@/store'
import { Link } from 'react-router-dom'
import { getCoffee } from './../services/getCoffee'
import { useEffect, useState } from 'react'

export default function Faq() {
    const {count} = Store.about()
    const [isLoading, setIsLoading] = useState(true)
    const [coffee, setCoffee] = useState(null)

    useEffect(() => {
        getCoffee().then((response) => {
            setCoffee(response.data)
            setIsLoading(false)
        })
    }, [])


    return (
        <div>
            <Link to="/about">about</Link>
            {
                isLoading ? <p>Loading...</p> : coffee.map(c => <p key={c.title}>{c.title}</p>)
            }
            <h1>FAQ</h1>
            <p>{count}</p>
        </div>
    )
}