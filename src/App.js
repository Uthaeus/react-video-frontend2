import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect, useContext } from 'react';

import { UserContext } from './store/user-context';

import RootLayout from './components/layouts/root-layout';
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
import BlogDetail from './components/blogs/blog-detail';
import EditBlog from './components/blogs/edit-blog';
import NewBlog from './components/blogs/new-blog';
import Portfolio from './pages/portfolio';
import PortfolioLayout from './components/layouts/portfolio-layout';
import PortfolioDetail from './components/portfolio/portfolio-detail';
import EditPortfolio from './components/portfolio/edit-portfolio';
import NewPortfolio from './components/portfolio/new-portfolio';

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
      },
      {
        path: '/blogs/:id',
        element: <BlogDetail />
      },
      {
        path: '/blogs/:id/edit',
        element: <EditBlog />
      },
      {
        path: '/blogs/new',
        element: <NewBlog />
      }
    ]
  },
  {
    path: '/portfolio',
    element: <PortfolioLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Portfolio />
      },
      {
        path: '/portfolio/:id',
        element: <PortfolioDetail />
      },
      {
        path: '/portfolio/:id/edit',
        element: <EditPortfolio />
      },
      {
        path: '/portfolio/new',
        element: <NewPortfolio />
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
