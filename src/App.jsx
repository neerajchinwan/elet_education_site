import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import EventDetails from './pages/EventDetails'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Nominate from './pages/Nominate'
import Awards2026 from './pages/Awards2026'
import Vote2026 from './pages/Vote2026'
import VoteResults from './pages/VoteResults'
import Privacy from './pages/Privacy'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }) }, [pathname])
  return null
}

export default function App() {
  return <><ScrollToTop/><Navbar/><main><Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/events" element={<Events/>}/>
    <Route path="/events/:slug" element={<EventDetails/>}/>
    <Route path="/careers" element={<Careers/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/nominate" element={<Nominate/>}/>
    <Route path="/awards-2026" element={<Awards2026/>}/>
    <Route path="/vote" element={<Vote2026/>}/>
    <Route path="/vote/results" element={<VoteResults/>}/>
    <Route path="/privacy" element={<Privacy/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes></main><Footer/></>
}
