/*
 & State and Event Handling 
 ^ Build a simple counter app with the following features
 * A Button that increases the count by 1 when clicked.
 * A button that decreases thr count by 1 when clicked.
 * A Button that resets the count to zero.
 * Display the count dynamically on the Screen.
*/

import { useState } from "react"

export default function Task1() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Task 1</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count+1)}>Count++</button>
            <button onClick={(() => setCount(count-1))}>Count--</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    ) 
}