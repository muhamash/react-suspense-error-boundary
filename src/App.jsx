import { Suspense, useState } from "react";
import { FadeLoader } from 'react-spinners';
import './App.css';
import Comments from "./components/Comments";
import PostSelector from "./components/PostSelector";

function App() {
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handleSelectPost = ( e ) =>
  {
    setSelectedPostId( e.target.value );
  };

  return (
    <div>
      <h1>React suspense and error boundary!!</h1>
      <div> 
        <Suspense fallback={ <FadeLoader size={200} color="#36d7b7" /> }>
          <PostSelector onSelectPost={ handleSelectPost } />
        </Suspense>
        { selectedPostId && <Comments postId={ selectedPostId } />}
      </div>
    </div>
  );
}

export default App
