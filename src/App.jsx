import { useEffect, useState } from "react";
import NewPostForm from "./components/NewPostForm";
import Post from "./components/Post";
import classes from "./App.module.css";
import Modal from "./components/Modal";
import MainHeader from "./components/MainHeader";




function App() {
  const [isNewPostVisible, setIsNewPostVisible] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch('http://localhost:8080/posts');
      const resData = await response.json();
      setAllPosts(resData.posts);
      setIsFetching(false);
    }

    fetchPosts();
  }, []);

  function toggleNewPostVisibleHandler() {
    setIsNewPostVisible(!isNewPostVisible);
  }


  // conditional rendering of new post modal
  let newPostContent;
  if (isNewPostVisible) {
    newPostContent =
      <Modal toggleNewPostVisibleHandler={toggleNewPostVisibleHandler}>
        <NewPostForm setAllPostsProp={setAllPosts} toggleNewPostVisibleHandlerProp={toggleNewPostVisibleHandler} />
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

      <div className={classes.postBox}>
        {!isFetching 
          ? allPosts.map((post) => <Post key={`post-${post.body}`} author={post.author} body={post.body} />)
          : <p>Loading posts...</p>
        }
      </div>
    </div>

  );
}

export default App;
