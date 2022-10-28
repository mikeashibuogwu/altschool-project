import React from 'react';
import User from './User';
import AppRouter from './Routing';
import Sample from './Sample';
import { ErrorBoundary, useErrorHandler} from 'react-error-boundary';


function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  );
}



function App() {
return (
    <div className="App">
      <AppRouter />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Sample />
      </ErrorBoundary>
    </div>
  );
}

export default App;
