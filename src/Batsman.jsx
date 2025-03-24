import { useState } from "react";

export default function Batsman() {
	const [runs, setRuns] = useState(0);

	const [sixes, setSixes] = useState(0);

	const handleSingle = () => {
		const updatedRuns = runs + 1;
		setRuns(updatedRuns);
	};

	const handleSix = () => {
		const updatedRuns = runs + 6;
		const updatedSixes = sixes + 1;
		setRuns(updatedRuns);
		setSixes(updatedSixes);
	};
	return (
		<div>
			<h3>Player: Bangla Batsman</h3>
			<p>
				<small>Six: {sixes}</small>
			</p>
			{runs > 50 && <p>Your Score: 50+</p>}
			<h1>Score: {runs}</h1>
			<button onClick={handleSingle}>singles</button>
			<button onClick={() => setRuns(runs + 4)}>Four</button>
			<button onClick={handleSix}>Six</button>
		</div>
	);
}
