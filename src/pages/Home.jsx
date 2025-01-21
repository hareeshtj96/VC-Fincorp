import React from 'react'
import Header from '../components/header/Header';
import HeroSection from '../components/body/HeroSection';
import Features from '../components/body/Features';
import Testimonials from '../components/body/Testimonials';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <div>

    <header className='sticky top-0 z-50'>
      <Header />
    </header>

 
    <main>
      <HeroSection />
      <Features />
      <Testimonials />
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
  )
}

export default Home
