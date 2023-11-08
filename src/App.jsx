
  import { Routes, Route } from 'react-router-dom';
  import HomePage from './pages/HomePage';
  import NavBar from './components/NavBar';
  import About from './pages/About';
  import Contact from './pages/Contact';
  import Projects from './pages/Projects';
  import Services from './pages/Services'
  function App() {

    return (
      <div className='realtive'>
        <div className='absolute w-[100%]'>
          <NavBar />
        </div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </div>
    )
  }

  export default App
