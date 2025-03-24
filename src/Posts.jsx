import { use } from "react"
import Post from "./Post";

export default function Posts({postsPromise}) {
    const posts = use(postsPromise);
    return (
        <div className="card">
            <h2>All Posts Are Here</h2>
            <h4>Posts: {posts.length}</h4>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    )
}