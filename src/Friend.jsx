export default function Friend({friend}) {
    const {name, email, phone} = friend;
    return (
        <div className="card">
            <h4>Name: {name}</h4>
            <h5>Email: {email}</h5>
            <h5>Phone: {phone}</h5>
        </div>
    )
}