import { use } from "react";
import User from "./User";

export default function Users({ userPromise }) {
	const users = use(userPromise);
	console.log(users);
	if (!users.length) {
		return <p>Error Fetching Users..</p>;
	}
	return (
		<div>
			{users.map((user) => (
				<User key={user.id} user={user}></User>
			))}
		</div>
	);
}
