import React from 'react';
import AppRouter from './Routing';
import { ErrorBoundary } from 'react-error-boundary';


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
        
      </ErrorBoundary>
    </div>
  );
}

export default App;
