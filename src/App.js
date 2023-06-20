import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect, useContext } from 'react';

import { UserContext } from './store/user-context';

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
import ErrorPage from './components/error/errorpage';
import BlogLayout from './components/layouts/blog-layout';
import Blogs from './pages/blogs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
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
  },
  {
    path: '/blogs',
    element: <BlogLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Blogs />
      }
    ]
  }
]);

function App() {
  const { user, loginUser } = useContext(UserContext);

  useEffect(() => {
    let token = localStorage.getItem('practice-token');

    if (token && !user) {
      fetch('http://localhost:4000/check_user', {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
      .then(res => {
        if (!res.ok) {
          throw Error('Could not fetch data for that resource');
        }
        return res.json();
      })
      .then(data => {
        console.log('user detail data: ', data)
        loginUser(data);
      })
      .catch(err => console.log('user detail error: ', err));
    }
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
