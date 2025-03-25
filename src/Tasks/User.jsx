export default function User({ user }) {
	return (
		<ul className="card">
			<li>Username: {user?.username}</li>
			<li>Company: {user?.company?.name}</li>
			<li>City: {user?.address?.city}</li>
		</ul>
	);
}
