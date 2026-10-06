import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import ScrollRestoration from './components/ScrollRestoration.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Education from './pages/Education.jsx';
import Experience from './pages/Experience.jsx';
import Projects from './pages/Projects.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import Skills from './pages/Skills.jsx';
import Credentials from './pages/Credentials.jsx';
import Resume from './pages/Resume.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollRestoration />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"                         element={<Home />} />
          <Route path="/about"                    element={<About />} />
          <Route path="/education"                element={<Education />} />
          <Route path="/experience"               element={<Experience />} />
          <Route path="/projects"                 element={<Projects />} />
          <Route path="/projects/:id"             element={<ProjectDetail />} />
          <Route path="/skills"                   element={<Skills />} />
          <Route path="/credentials"              element={<Credentials />} />
          <Route path="/resume"                   element={<Resume />} />
          <Route path="/contact"                  element={<Contact />} />
          <Route path="*"                         element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  );
}
