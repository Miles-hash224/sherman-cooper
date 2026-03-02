import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Contact from './pages/Contact';
import WhatWeDo from './pages/WhatWeDo';
import Services from './pages/Services';
import ForRent from './pages/ForRent';
import Pricing from './pages/Pricing';
import LeasedProperties from './pages/LeasedProperties';
import Resources from './pages/Resources';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-brand-charcoal bg-brand-cream overflow-x-hidden selection:bg-brand-gold/30 selection:text-brand-charcoal">
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/services" element={<Services />} />
        <Route path="/for-rent" element={<ForRent />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/leased-properties" element={<LeasedProperties />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
