import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

let Home = lazy(() => import('./Home'));
let ErrorPage = lazy(() => import('./ErrorPage'));

const AppRouter = () => (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
  
  export default AppRouter;