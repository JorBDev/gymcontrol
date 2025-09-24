import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star, Users, Shield, Crown } from 'lucide-react';

const LaunchOfferSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden" id="precios">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Crown className="w-4 h-4" />
            Programa de Clientes Fundadores
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
            Únete como{' '}
            <span className="text-primary">Cliente Fundador</span>{' '}
            de GYMCONTROL
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Estoy buscando exactamente <strong>5 gimnasios socios</strong> para ser los primeros en implementar GymControl en Colombia.
            A cambio de un precio excepcional, solo pido tu feedback honesto y testimonio.
          </p>
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
                  <div className="text-sm text-muted-foreground">70% para iniciar, 30% a 35 días</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <div className="font-semibold text-foreground">Garantía de Implementación</div>
                  <div className="text-sm text-muted-foreground">90 días de garantía total</div>
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
                <Star className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <div className="font-semibold text-foreground">Capacitación personalizada</div>
                  <div className="text-sm text-muted-foreground">Sesión de 1-2 horas incluida</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Button
            className="cta-button text-xl px-12 py-6 w-full md:w-auto"
            onClick={() => window.open('https://wa.me/573145416559?text=Hola,%20quiero%20ser%20parte%20del%20Programa%20de%20Clientes%20Fundadores%20de%20GymControl', '_blank')}
          >
            Quiero Ser Cliente Fundador
          </Button>

          <p className="text-sm text-muted-foreground mt-4">
            Solo 5 cupos disponibles • Programa exclusivo para gimnasios visionarios
          </p>
        </Card>

        {/* Urgency Elements */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { number: "1", label: "Cupos ya ocupados", color: "text-primary" },
            { number: "4", label: "Cupos restantes", color: "text-destructive" },
            { number: "Inversión Segura", label: "", color: "text-gym-blue" }
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