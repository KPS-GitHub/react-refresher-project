import classes from "./App.module.css";
import PostList from "../components/PostList";
import { Outlet } from "react-router-dom";


function Posts() {
  return (
    <>
      <Outlet />
      <div className={classes.appWrap}>
        <PostList />
      </div>
    </>

  );
}

export default Posts;



export async function loader() {
  const response = await fetch('http://localhost:8080/posts');
  const resData = await response.json();
  return resData.posts;
}