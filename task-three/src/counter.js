import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const Increment = () => setCount(prevCount => prevCount + 1);
    const Decrement = () => setCount(prevCount => prevCount - 1);
    const Reset = () => setCount(0);

    return (
        <div className="counter">
            <h2>Counter App</h2>
            <p>{count}</p>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement} disabled={count === 0}>-</button>
            <button onClick={Reset}>Reset</button>
        </div>
    );
}

