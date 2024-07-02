import './App.css';
import Hero from './components/Hero/Hero';
import About from './components/about/About';
import Clients from './components/clients/Clients';
import Projects from './components/projects/Projects';
import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Hero />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/clients',
      element: <Clients />,
    },
    {
      path: '/projects',
      element: <Projects />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
