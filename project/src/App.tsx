import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Stores from './components/Stores';
import Reviews from './components/Reviews';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Stores />
      <Reviews />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
