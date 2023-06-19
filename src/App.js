import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './components/root-layout';
import Homepage from './pages/homepage';
import AboutPage from './pages/aboutpage';
import ContactPage from './pages/contactpage';
import SignUp from './components/auth/sign-up';
import SignIn from './components/auth/sign-in';
import UserPage from './pages/userpage';

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
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
