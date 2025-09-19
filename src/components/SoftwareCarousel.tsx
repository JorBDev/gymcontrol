import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Monitor, Smartphone, Tablet } from 'lucide-react';
import { Card } from '@/components/ui/card';

const softwareImages = [
  {
    id: 1,
    title: "Dashboard Principal",
    description: "Vista completa de tu gimnasio con estadísticas en tiempo real",
    image: "/software-dashboard.svg",
    icon: Monitor,
    features: ["Estadísticas en tiempo real", "Control de membresías", "Gestión de pagos"]
  },
  {
    id: 2,
    title: "Gestión de Socios",
    description: "Administra fácilmente todos los miembros de tu gimnasio",
    image: "/software-members.svg",
    icon: Smartphone,
    features: ["Registro rápido", "Historial completo", "Estados de membresía"]
  },
  {
    id: 3,
    title: "Reportes y Analytics",
    description: "Analiza el rendimiento de tu negocio con reportes detallados",
    image: "/software-reports.svg",
    icon: Tablet,
    features: ["Reportes automáticos", "Gráficos interactivos", "Exportar datos"]
  }
];

const SoftwareCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % softwareImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % softwareImages.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + softwareImages.length) % softwareImages.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="section-light py-20 px-4" id="software-gallery">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground-alt">
            Conoce{' '}
            <span className="text-primary">GymControl</span>{' '}
            en Acción
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre cómo nuestro software puede transformar la gestión de tu gimnasio
            con una interfaz intuitiva y funciones poderosas.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <Card className="bg-card-alt border border-border/20 overflow-hidden">
            <div className="relative h-[600px] md:h-[500px]">
              {/* Slides */}
              <div className="relative w-full h-full overflow-hidden">
                {softwareImages.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                      index === currentSlide ? 'translate-x-0' : 
                      index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                    }`}
                  >
                    <div className="grid md:grid-cols-2 h-full">
                      {/* Image Side */}
                      <div className="relative bg-gradient-to-br from-primary/10 to-gym-blue/10 flex items-center justify-center p-8">
                        <div className="relative w-full max-w-md">
                          {/* Software screenshot */}
                          <div className="aspect-video bg-background rounded-lg shadow-2xl border border-border/20 overflow-hidden">
                            <img 
                              src={slide.image} 
                              alt={`Captura de pantalla de ${slide.title}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          {/* Decorative elements */}
                          <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-20"></div>
                          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gym-blue rounded-full opacity-30"></div>
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="flex flex-col justify-center p-8 md:p-12 space-y-6">
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-primary/10">
                              <slide.icon className="w-6 h-6 text-primary" />
                            </div>
                            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                              Funcionalidad {slide.id}
                            </span>
                          </div>
                          
                          <h3 className="text-3xl font-bold text-card-alt-foreground">
                            {slide.title}
                          </h3>
                          
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            {slide.description}
                          </p>
                        </div>

                        {/* Features List */}
                        <div className="space-y-3">
                          {slide.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="text-card-alt-foreground font-medium">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Colombian Flag Accent */}
                        <div className="flex items-center gap-2 pt-4">
                          <div className="flex gap-1">
                            <div className="w-2 h-4 bg-primary rounded-sm"></div>
                            <div className="w-2 h-4 bg-gym-blue rounded-sm"></div>
                            <div className="w-2 h-4 bg-gym-red rounded-sm"></div>
                          </div>
                          <span className="text-sm text-muted-foreground font-medium">
                            Desarrollado en Colombia
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 hover:bg-background border border-border/20 rounded-full flex items-center justify-center text-foreground hover:text-primary transition-all duration-200 hover:scale-110 shadow-lg"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 hover:bg-background border border-border/20 rounded-full flex items-center justify-center text-foreground hover:text-primary transition-all duration-200 hover:scale-110 shadow-lg"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </Card>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 gap-3">
            {softwareImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? 'bg-primary scale-125'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-4 w-full bg-muted-foreground/10 rounded-full h-1 overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300 ease-out"
              style={{ width: `${((currentSlide + 1) / softwareImages.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            ¿Listo para ver GymControl en tu gimnasio?
          </p>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
            Solicitar Demo Gratuita
          </button>
        </div>
      </div>
    </section>
  );
};

export default SoftwareCarousel;
