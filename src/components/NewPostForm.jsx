import { useState } from "react";
import Post from "./Post";
import classes from "./NewPostForm.module.css";

function NewPostForm({ allPostsProp, setAllPostsProp, toggleNewPostVisibleHandlerProp }) {
    const [newPostBody, setNewPostBody] = useState('New Post Body');
    const [newPostAuthor, setNewPostAuthor] = useState('New Post Author');

    function newPostBodyChangeHandler(event) {
        setNewPostBody(event.target.value);
    }
    function newPostAuthorChangeHandler(event) {
        setNewPostAuthor(event.target.value);
    }
    function newPostSubmitHandler(event) {
        event.preventDefault();
        // put the new post at the beginning of the allPosts array so that it shows up first in the post box
        setAllPostsProp([{ author: newPostAuthor, body: newPostBody }, ...allPostsProp]);
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