/*
 & API Data Fetching with useEffect
 ^ Create a user list application:
 * Fetch and display data from the JSON placeholder API
 * Display User Name Company name and a City in a list
 * Show a loading state when fetching data
 * Show an error message if the API request fails.
*/

import { Suspense } from "react";
import Users from "./Users";

const fetchUsers = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = res.json();
	return data;
};

export default function Task3() {
	const userPromise = fetchUsers();
	return (
		<div>
			<h1>Task 3</h1>
			<Suspense fallback={<h2>Loading Users...</h2>}>
				<Users userPromise={userPromise}></Users>
			</Suspense>
		</div>
	);
}
