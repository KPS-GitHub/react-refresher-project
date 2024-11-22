import { useState } from "react";
import Post from "../../components/Post";
import classes from "./NewPostForm.module.css";
import { Link } from "react-router-dom";

function NewPostForm({ allPosts, setAllPosts }) {
    const [newPostBody, setNewPostBody] = useState('New Post Body');
    const [newPostAuthor, setNewPostAuthor] = useState('New Post Author');

    function newPostBodyChangeHandler(event) {
        setNewPostBody(event.target.value);
    }
    function newPostAuthorChangeHandler(event) {
        setNewPostAuthor(event.target.value);
    }

    // send new post to backend
    function newPostSubmitHandler(event) {
        event.preventDefault();
        // grab input values
        const postBody = event.target.body.value;
        const postAuthor = event.target.name.value;
        // send new post to backend
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify({
                "body": postBody,
                "author": postAuthor
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        // update the allPosts state array with the new post so that it displays on the page immediately
        setAllPosts((allPosts) => [{ body: postBody, author: postAuthor }, ...allPosts]);

        // reset the new post state values
        setNewPostBody('New Post Body');
        setNewPostAuthor('New Post Author');
        // clear the form input values
        const form = event.target;
        const inputs = form.querySelectorAll("input, textarea, select");
        inputs.forEach(input => {
            if (input.type !== "button" && input.type !== "submit" && input.type !== "reset") {
                input.value = "";
            }
            if (input.tagName.toLowerCase() === "select") {
                input.selectedIndex = 0;
            }
        });
    }


    return (
        <>
            <form onSubmit={newPostSubmitHandler} className={classes.form}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" required rows={3} onChange={newPostBodyChangeHandler} />
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" required onChange={newPostAuthorChangeHandler} />
                </p>
                <div className={classes.actions}>
                    <Link to="..">Cancel</Link>
                    <button type="submit" >Submit</button>
                </div>
            </form>
            <div className={classes.newPostBox}>
                <Post key='new-post' author={newPostAuthor} body={newPostBody} newPost={true} />
            </div>
        </>
    );
}

export default NewPostForm;