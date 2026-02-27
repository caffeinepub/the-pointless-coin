import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import TickerBanner from './components/TickerBanner';
import AboutSection from './components/AboutSection';
import TokenomicsSection from './components/TokenomicsSection';
import HowToBuySection from './components/HowToBuySection';
import RoadmapSection from './components/RoadmapSection';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-foreground overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <TickerBanner />
        <AboutSection />
        <TokenomicsSection />
        <HowToBuySection />
        <RoadmapSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}
