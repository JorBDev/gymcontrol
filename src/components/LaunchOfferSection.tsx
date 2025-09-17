import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Clock, Users, Shield } from 'lucide-react';

const LaunchOfferSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Clock className="w-4 h-4" />
            Oferta por Tiempo Limitado
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
            Una Oferta Irrepetible para los{' '}
            <span className="text-primary">Primeros Gimnasios.</span>
          </h2>
        </div>

        <Card className="feature-card p-8 md:p-12 text-center">
          {/* Pricing */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-2xl text-muted-foreground line-through">
                $2,990,000 COP
              </span>
              <div className="bg-destructive text-white px-3 py-1 rounded-full text-sm font-bold">
                50% OFF
              </div>
            </div>
            
            <div className="text-6xl md:text-7xl font-black text-primary mb-2">
              $1,495,000
            </div>
            
            <div className="text-xl text-muted-foreground mb-6">
              Pago único • Sin mensualidades • Tuyo para siempre
            </div>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <div className="font-semibold text-foreground">Pago flexible en 2 cuotas</div>
                  <div className="text-sm text-muted-foreground">70% al inicio, 30% al finalizar</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <div className="font-semibold text-foreground">Garantía de Implementación</div>
                  <div className="text-sm text-muted-foreground">90 días para estar 100% operativo</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <div className="font-semibold text-foreground">6 meses de soporte incluidos</div>
                  <div className="text-sm text-muted-foreground">WhatsApp directo con el desarrollador</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <div className="font-semibold text-foreground">Migración de datos gratuita</div>
                  <div className="text-sm text-muted-foreground">Traemos toda tu información actual</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Button 
            className="cta-button text-xl px-12 py-6 w-full md:w-auto"
            onClick={() => window.open('https://wa.me/573001234567?text=Hola,%20quiero%20agendar%20mi%20demo%20de%20GymControl%20y%20bloquear%20la%20oferta%20de%20lanzamiento', '_blank')}
          >
            Agendar Mi Demo y Bloquear Oferta
          </Button>

          <p className="text-sm text-muted-foreground mt-4">
            Solo para los primeros 50 gimnasios • Oferta válida hasta el 31 de diciembre
          </p>
        </Card>

        {/* Urgency Elements */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { number: "47", label: "Gimnasios ya registrados", color: "text-primary" },
            { number: "3", label: "Cupos restantes esta semana", color: "text-destructive" },
            { number: "15", label: "Días restantes de oferta", color: "text-gym-blue" }
          ].map((stat, index) => (
            <Card key={index} className="feature-card p-6 text-center">
              <div className={`text-3xl font-black ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LaunchOfferSection;