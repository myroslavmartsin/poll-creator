import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import PollDetails from './features/ViewPolls/components/PollDetails/PollDetails.tsx';
import CreatePoll from './features/CreatePoll/CreatePoll.tsx';
import ViewPolls from './features/ViewPolls/ViewPolls.tsx';
import { Provider } from 'react-redux';
import store from './store/index.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'create-poll', element: <CreatePoll /> },
      {
        path: 'view-polls',
        element: <ViewPolls />,
        children: [{ path: '/view-polls/:id', element: <PollDetails /> }]
      },
      { path: '', loader: () => redirect('/create-poll') }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
