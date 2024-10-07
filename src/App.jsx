import { useState } from "react";
import NewPostForm from "./components/NewPostForm";
import Post from "./Components/Post";
import classes from "./App.module.css";
import Modal from "./components/Modal";




function App() {
  const [newPostBody, setNewPostBody] = useState('New Post Body');
  const [newPostAuthor, setNewPostAuthor] = useState('New Post Author');
  const [allPosts, setAllPosts] = useState([{author: "Post 1 Author", body: "Post 1 Body"}, {author: "Post 2 Author", body: "Post 2 Body"}, {author: "Post 3 Author", body: "Post 3 Body"}])

  function newPostBodyChangeHandler(event) {
    setNewPostBody(event.target.value);
  }
  function newPostAuthorChangeHandler(event) {
    setNewPostAuthor(event.target.value);
  }
  function newPostSubmitHandler(event) {
    event.preventDefault();
    // put the new post at the beginning of the allPosts array so that it shows up first in the post box
    setAllPosts([{author: newPostAuthor, body: newPostBody}, ...allPosts]);
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
    <div className={classes.appWrap}>
      <Modal>
        <NewPostForm onBodyChange={newPostBodyChangeHandler} onAuthorChange={newPostAuthorChangeHandler} onSubmit={newPostSubmitHandler} />
      </Modal>
      <div className={classes.newPostBox}>
        <Post key='new-post' author={newPostAuthor} body={newPostBody} newPost={true} />
      </div>
      <div className={classes.postBox}>
        {allPosts.map((post,i) => <Post key={`post-${i}`} author={post.author} body={post.body} />)}
      </div>
    </div>
    
  );
}

export default App;
