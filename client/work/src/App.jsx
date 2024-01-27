import React from "react";
import Layout from "./components/layout";
import Public from './components/Public';
import Login from './features/auth/Login';
import DashLayout from './components/DashLayout';
import Welcome from './features/auth/Welcome';
import NotesList from './features/notes/NotesList';
import UsersList from './features/users/UserList';

import { RouterProvider, createBrowserRouter } from "react-router-dom";


function App() {
  const router = createBrowserRouter([
       {
        // Main Routes
        path: '/',
        element: <Layout />,
        children: [
          { path: '/', element: <Public /> },
          { path: 'login', element: <Login /> },

          // Dash Routes
          {
            path: 'dash',
            element: <DashLayout />,
            children: [
              { path: '', element: <Welcome /> },
              { path: 'notes', element: <NotesList /> },
              { path: 'users', element: <UsersList /> },
            ],
          },
        ],
      },

      // Other Routes
    //  { path: '/other', element: <OtherComponent /> },

  ]);
  
  return <RouterProvider router={router} />;
}

export default App;