import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Dashboard } from './pages/Dashboard';

const AppLayout = () => (
  <Layout>
    <Outlet />
  </Layout>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: 'habits',
        element: <div>Habits Coming Soon</div>
      },
      {
        path: 'tasks',
        element: <div>Tasks Coming Soon</div>
      },
      {
        path: 'rewards',
        element: <div>Rewards Coming Soon</div>
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;