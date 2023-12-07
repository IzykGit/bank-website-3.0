import React, {useEffect} from 'react'
import './App.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import LandingPage from './pages/landingPage'

export default function App() {

  AOS.init({
    duration: 1000
  })

  useEffect(() => {
    AOS.init()
  })

  return (
    <div className="App">
      <LandingPage />
    </div>
      
  );
}


