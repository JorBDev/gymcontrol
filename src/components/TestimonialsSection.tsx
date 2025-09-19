import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Rodríguez",
    gym: "FitZone Medellín",
    location: "Medellín, Antioquia",
    quote: "En 6 meses ya recuperé la inversión. Lo que más me gusta es que funciona aunque se vaya la luz o el internet. Mi gimnasio nunca para.",
    rating: 5,
    avatar: "CR"
  },
  {
    name: "María Fernanda López",
    gym: "Gimnasio Fuerza Total",
    location: "Bogotá, Cundinamarca",
    quote: "Dejé de pagar $450,000 mensuales por un software que se caía cada semana. GymControl ha sido la mejor decisión que he tomado.",
    rating: 5,
    avatar: "ML"
  },
  {
    name: "Andrés Mejía",
    gym: "PowerFit Studio",
    location: "Cali, Valle del Cauca",
    quote: "El soporte es increíble. Cuando tengo una duda, hablo directo por WhatsApp y me responden al instante. Es como tener un desarrollador personal.",
    rating: 5,
    avatar: "AM"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section-light py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground-alt">
            Gimnasios que ya tomaron la{' '}
            <span className="text-primary">Decisión Inteligente.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Únete a los dueños de gimnasios que ya están ahorrando millones y durmiendo tranquilos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card-alt border border-border/20 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-card-alt-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-card-alt-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.gym}
                  </div>
                  <div className="text-xs text-gym-yellow">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Social Proof */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full">
            <div className="flex -space-x-2">
              {['JM', 'LR', 'SC', 'MG', 'AP'].map((initial, i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold border-2 border-background-alt"
                >
                  {initial}
                </div>
              ))}
            </div>
            <span className="text-sm font-semibold">+47 gimnasios ya confían en GymControl</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;