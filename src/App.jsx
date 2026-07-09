import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/About';
import "./App.css";
import Footer from './components/footer'
import Navbar from './components/navbar';

// 1. Create a Layout component with your navigation menu
function RootLayout() {
  return (
    <>
      <Navbar />

      <Outlet />
      <Footer />

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
