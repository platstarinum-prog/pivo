import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-900 font-body">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Gallery />
      <Reviews />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
