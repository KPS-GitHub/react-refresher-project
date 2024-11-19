import { useEffect, useState } from "react";
import classes from "./PostList.module.css";
import Post from "./Post";

function PostList({ allPostsProp, setAllPostsProp }) {
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true);
            const response = await fetch('http://localhost:8080/posts');
            const resData = await response.json();
            setAllPostsProp(resData.posts);
            setIsFetching(false);
        }

        fetchPosts();
    }, []);

    return (
        <div className={classes.postBox}>
            {isFetching && <p>Loading posts...</p>}
            {
                !isFetching && allPostsProp.length > 0 &&
                allPostsProp.map((post) => <Post key={`post-${post.body}`} author={post.author} body={post.body} />)
            }
            {
                !isFetching && allPostsProp.length === 0 && (
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