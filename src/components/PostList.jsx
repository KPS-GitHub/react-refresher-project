import classes from "./PostList.module.css";
import Post from "./Post";
import { useLoaderData } from "react-router-dom";


function PostList() {
    const posts = useLoaderData();

    return (
        <div className={classes.postBox}>
            {
                posts && posts.length > 0 &&
                posts.map((post) => <Post key={`post-${post.body}`} id={post.id} author={post.author} body={post.body} />)
            }
            {
                posts.length === 0 && (
                    <div style={{ textAlign: 'center', color: 'white' }}>
                        <h2>There are no posts yet.</h2>
                        <p>Start adding some!</p>
                    </div>
                )
            }
        </div>
    )
}

export default PostList;