import HeroSection from '@/components/HeroSection';
import SavingsCalculator from '@/components/SavingsCalculator';
import FeaturesSection from '@/components/FeaturesSection';
import LaunchOfferSection from '@/components/LaunchOfferSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <HeroSection />
      <SavingsCalculator />
      <FeaturesSection />
      <LaunchOfferSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;