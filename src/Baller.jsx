import { useState } from "react"

export default function Baller() {
    const [over, setOver] = useState(0);
    const [balls, setBalls] = useState(0);
    const handleBall = () => {
        if (balls % 6 === 0 && balls != 0) {
            setOver(over+1);
            setBalls(0);
        } else {
            setBalls(balls+1);
        }
    }
    return (
        <div>
            <h2>Baller: Bangla Baller</h2>
            <p>Over: {over}</p>
            <h1>Balls: {balls}</h1>
            <button onClick={handleBall}>Add Ball</button>
            <button onClick={() => alert("White ball")}>White Ball</button>
            <button onClick={() => alert("No Ball")}>No Ball</button>
        </div>
    )
}