import { Button } from '@/components/ui/button';
import heroImage from '@/assets/gym-dashboard-hero.png';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="gym-logo text-4xl md:text-5xl">
            <span className="text-primary">GYM</span>
            <span className="text-foreground">CONTROL</span>
          </h1>
        </div>

        {/* Hero Title */}
        <h2 className="hero-title mb-8 max-w-5xl mx-auto">
          Deja de Pagar $10-18 Millones Cada 3 Años en Software para Gimnasio
        </h2>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
          Mientras <strong className="text-destructive">AgendaPro, Trainingym y el Software promedio</strong> te atan a suscripciones infinitas,{' '}
          <strong className="text-primary">GymControl es tuyo para siempre</strong> con un pago único.
          <br className="hidden md:block" />
          Descubre cuánto estás perdiendo.
        </p>

        {/* CTA Button */}
        <Button
          onClick={scrollToCalculator}
          className="cta-button text-xl px-12 py-6 group animate-glow"
        >
          Calcula tu Ahorro Ahora
          <ArrowDown className="ml-2 w-6 h-6 group-hover:translate-y-1 transition-transform" />
        </Button>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>100% Offline</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>Pago Único</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>Soporte Directo</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>Hecho en Colombia</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;