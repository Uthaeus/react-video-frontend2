import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './components/root-layout';
import Homepage from './pages/homepage';
import AboutPage from './pages/aboutpage';
import ContactPage from './pages/contactpage';
import SignUp from './components/auth/sign-up';
import SignIn from './components/auth/sign-in';
import UserPage from './pages/userpage';
import NewPost from './components/posts/new-post';
import PostDetail from './components/posts/post-detail';
import EditPost from './components/posts/edit-post';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
      {
        path: 'sign-up',
        element: <SignUp />
      },
      {
        path: 'sign-in',
        element: <SignIn />
      },
      {
        path: '/userpage',
        element: <UserPage />
      },
      {
        path: '/posts/new',
        element: <NewPost />
      },
      {
        path: '/posts/:id',
        element: <PostDetail />
      },
      {
        path: '/posts/:id/edit',
        element: <EditPost />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
