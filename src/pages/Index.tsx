import HeroSection from '@/components/HeroSection';
import SavingsCalculator from '@/components/SavingsCalculator';
import FeaturesSection from '@/components/FeaturesSection';
import LaunchOfferSection from '@/components/LaunchOfferSection';
// import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
// import SoftwareCarousel from '@/components/SoftwareCarousel';

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <HeroSection />
      <SavingsCalculator />
      <FeaturesSection />
      {/* <SoftwareCarousel /> */}
      <LaunchOfferSection />
      {/* <TestimonialsSection /> // TODO: Descomentar cuando se tenga el primer cliente */}
      <Footer />
    </div>
  );
};

export default Index;