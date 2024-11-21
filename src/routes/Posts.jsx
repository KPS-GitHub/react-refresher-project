import { useEffect, useState } from "react";
import NewPostForm from "../components/NewPost/NewPostForm";
import classes from "./App.module.css";
import Modal from "../components/UI/Modal";
import PostList from "../components/PostList";


function Posts() {
  const [allPosts, setAllPosts] = useState([]);

  return (
    <div className={classes.appWrap}>
        <PostList allPostsProp={allPosts} setAllPostsProp={setAllPosts}/>
    </div>

  );
}

export default Posts;
