import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import VersionsSection from './components/VersionsSection';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <section id="features">
            <FeaturesSection />
          </section>
          <section id="versions">
            <VersionsSection />
          </section>
          <section id="download">
            <DownloadSection />
          </section>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
