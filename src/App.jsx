import { useEffect, useState } from "react";
import NewPostForm from "./components/NewPostForm";
import Post from "./components/Post";
import classes from "./App.module.css";
import Modal from "./components/Modal";
import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";





function App() {
  const [isNewPostVisible, setIsNewPostVisible] = useState(false);
  const [allPosts, setAllPosts] = useState([]);

  function toggleNewPostVisibleHandler() {
    setIsNewPostVisible(!isNewPostVisible);
  }


  // conditional rendering of new post modal
  let newPostContent;
  if (isNewPostVisible) {
    newPostContent =
      <Modal toggleNewPostVisibleHandler={toggleNewPostVisibleHandler}>
        <NewPostForm allPostsProp={allPosts} setAllPostsProp={setAllPosts} toggleNewPostVisibleHandlerProp={toggleNewPostVisibleHandler} />
      </Modal>;
  }

  return (
    <div className={classes.appWrap}>
      <MainHeader toggleNewPostVisibleHandler={toggleNewPostVisibleHandler} />
      {newPostContent}
      {/* alternative approach to conditional rendering of new post modal */}
      {/* {isNewPostVisible &&
      <>
        <Modal toggleNewPostVisibleHandler={toggleNewPostVisibleHandler}>
          <NewPostForm onBodyChange={newPostBodyChangeHandler} onAuthorChange={newPostAuthorChangeHandler} onSubmit={newPostSubmitHandler} />
        </Modal>
      </>
    } */}

        <PostList allPostsProp={allPosts} setAllPostsProp={setAllPosts}/>

    </div>

  );
}

export default App;
