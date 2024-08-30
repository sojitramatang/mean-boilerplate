import { Link } from "react-router-dom"
import useCount from "../store/useCount"


export default function About() {
    const count = useCount((state) => state.count)
    const increment = useCount((state) => state.increment)
    const decrement = useCount((state) => state.decrement)
    const reset = useCount((state) => state.reset)
    const update = useCount((state) => state.update)

    return (
        <div>
            <Link to="/faq">FAQ</Link>
            <h1>About</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <p>{count}</p>
            <button onClick={reset}>Reset</button>
            <button onClick={() => update(5)}>Update to 5</button>
        </div>
    )
}