/*
 & useState and Conditional Rendering
 ^ Create a "Show/Hide Text" app:
 * Use useState to manage the visibility of a text message.
 * A button should toggle between "Show" and "Hide" text.
 * When the text is visible it should say: "Hello, React Learner!"
 * When hidden, nothing should be displayed.
 */

import { useState } from "react"

export default function Task2 () {

    const [visibility, setVisibility] = useState(true);

    return (
        <div>
            <h1>Task 2</h1>
            <h2>Show/Hide Text App</h2>
            {
                visibility && <h3>Hello React Learner!</h3>
            }
            <button onClick={() => setVisibility(!visibility)}>{visibility ? "Hide Text" : "Show Text"}</button>
        </div>
    )
}