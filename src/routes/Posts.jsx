import { useState } from "react";
import classes from "./App.module.css";
import PostList from "../components/PostList";
import { Outlet } from "react-router-dom";


function Posts() {
  const [allPosts, setAllPosts] = useState([]);

  return (
    <>
      <Outlet context={{ allPosts, setAllPosts }} />
      <div className={classes.appWrap}>
        <PostList allPostsProp={allPosts} setAllPostsProp={setAllPosts} />
      </div>
    </>

  );
}

export default Posts;
