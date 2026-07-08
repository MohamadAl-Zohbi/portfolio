import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/navbar';

// 1. Create a Layout component with your navigation menu
function RootLayout() {
  return (
    <>
      <Navbar />

      <main style={{ padding: '20px' }}>

        <Outlet />

      </main>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
    ],
  },
]);


export default function App() {
  return <RouterProvider router={router} />;
}
