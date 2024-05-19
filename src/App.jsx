import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { FadeLoader, PuffLoader } from 'react-spinners';
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
        <ErrorBoundary fallback={ <h1 className={ "error-text" }>Error!!</h1> }>
          <Suspense fallback={ <FadeLoader size={ 200 } color="#36d7b7" /> }>
            <PostSelector onSelectPost={ handleSelectPost } />
          </Suspense>
          { selectedPostId && <Suspense fallback={ <PuffLoader size={ 200 } color="#36d7b7" /> }>
            <Comments postId={ selectedPostId } />
          </Suspense> }
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App
