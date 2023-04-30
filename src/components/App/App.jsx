import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle';
import { lazy } from 'react';

import SharedLayout from 'components/SharedLayout/SharedLayout';
import { AppStyled } from './App.styled';

const HomePage = lazy(() => import('pages/HomePage'));
const TweetsPage = lazy(() => import('pages/TweetsPage'));
const NoMatchPage = lazy(() => import('pages/NoMatchPage'));

const basename = '/tweets_task_goit';

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
    <AppStyled className="app">
      <RouterProvider router={router} />
      <GlobalStyle />
    </AppStyled>
  );
}
