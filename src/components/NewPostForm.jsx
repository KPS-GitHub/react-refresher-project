import { useState } from "react";
import Post from "./Post";
import classes from "./NewPostForm.module.css";

function NewPostForm({ setAllPostsProp, toggleNewPostVisibleHandlerProp }) {
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

        // add new post to the allPosts prop so that it displays on the page immediately
        setAllPostsProp((allPostsProp) => {
            // note: unshift() returns the length of the new array - I was originally trying to put the below line as the return statement, but that was resulting in allPosts state var to be set to the length of the posts data array instead of the posts data array itself
            allPostsProp.unshift({body: postBody, author: postAuthor});
            return (
                allPostsProp
            )
        })

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
        toggleNewPostVisibleHandlerProp();
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
                <button type="submit" >Submit</button>
            </form>
            <div className={classes.newPostBox}>
                <Post key='new-post' author={newPostAuthor} body={newPostBody} newPost={true} />
            </div>
        </>
    );
}

export default NewPostForm;