import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NewArticlePage } from './pages/NewArticlePage/index';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/new/article",
    element: <NewArticlePage/>
  }
]);
