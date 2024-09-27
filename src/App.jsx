import Post from "./Components/Post";

const postData = [{title: "Post 1 Title", body: "Post 1 Body"}, {title: "Post 2 Title", body: "Post 2 Body"}, {title: "Post 3 Title", body: "Post 3 Body"}]

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <div id="post-box">
        {postData.map((post) => <Post title={post.title} body={post.body} />)}
      </div>
    </>
    
  );
}

export default App;
