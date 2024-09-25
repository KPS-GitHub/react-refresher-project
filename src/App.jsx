import Post from "./Components/Post";

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <div id="post-box">
        <Post title="Test Title from props" body="test body from props" />
      </div>
    </>
    
  );
}

export default App;
