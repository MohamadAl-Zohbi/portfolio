// import { BrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/home'
import About from './pages/about'
import Skills from './pages/skills'
import Contact from './pages/contact'
import Projects from './pages/projects'

import Footer from './components/footer'
import Navbar from './components/navbar'


// 1. Create a Layout component with your navigation menu
function RootLayout() {
  return (




    <BrowserRouter>
      <Navbar />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <RootLayout />,
//     children: [
//       { path: '/', element: <Home /> },
//       { path: '/about', element: <About /> },
//       { path: '/skills', element: <Skills /> },
//       { path: '/projects', element: <Projects /> },
//       { path: '/contact', element: <Contact /> }
//     ],
//   },
// ]);


export default function App() {
  return <RootLayout />;
}
