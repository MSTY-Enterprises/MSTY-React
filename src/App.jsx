import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Loading from './components/elements/Loading';

// Lazy load pages
const Home = lazy(() => import('./components/pages/Home'));
const About = lazy(() => import('./components/pages/About'));
const Services = lazy(() => import('./components/pages/Services'));
const Service = lazy(() => import('./components/pages/Service'));
const Blog = lazy(() => import('./components/pages/Blog'));
const BlogsPage = lazy(() => import('./components/pages/BlogsPage'));
const Career = lazy(() => import('./components/pages/Career'));
const Contact = lazy(() => import('./components/pages/Contact'));
const Layout = lazy(() => import('./components/pages/Layout'));
const NotFound = lazy(() => import('./components/pages/NotFound'));
const Projects = lazy(() => import('./components/pages/Projects'));

const route = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loading />}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/services',
        element: (
          <Suspense fallback={<Loading />}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: '/service/:service',
        element: (
          <Suspense fallback={<Loading />}>
            <Service />
          </Suspense>
        )
      },
      {
        path: '/contact',
        element: (
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: '/blogs',
        element: (
          <Suspense fallback={<Loading />}>
            <BlogsPage />
          </Suspense>
        ),
      },
      {
        path: '/blogs/:slug',
        element: (
          <Suspense fallback={<Loading />}>
            <Blog />
          </Suspense>
        ),
      },
      {
        path: '/career',
        element: (
          <Suspense fallback={<Loading />}>
            <Career />
          </Suspense>
        ),
      },
      {
        path: '/projects',
        element: (
          <Suspense fallback={<Loading />}>
            <Projects />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<Loading />}>
        
        <NotFound />
      </Suspense>
    ),
  },
]);

function App() {
  return (

    <RouterProvider router={route} />
     
    
  );

}

export default App;

