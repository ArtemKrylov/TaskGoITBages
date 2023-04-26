import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle';
import { lazy } from 'react';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import TweetsPage from 'pages/TweetsPage/TweetsPage';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const NoMatchPage = lazy(() => import('pages/NoMatchPage/NoMatchPage'));

const basename = '/magicTweets/';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SharedLayout />} errorElement={<NoMatchPage />}>
      <Route index element={<HomePage />} />
      <Route path="/tweets" element={<TweetsPage />} />
      <Route path="*" element={<NoMatchPage />} />
    </Route>
  ),
  { basename }
);

export default function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
      <GlobalStyle />
    </div>
  );
}
