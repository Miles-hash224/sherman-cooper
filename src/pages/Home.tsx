import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';

const Home = () => {
    return (
        <main>
            <Hero />
            <Features />
            <HowItWorks />
            <Stats />
            <Testimonials />
            <Pricing />
            <FAQ />
            <CTASection />
        </main>
    );
};

export default Home;
