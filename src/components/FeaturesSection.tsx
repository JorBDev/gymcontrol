import { Card } from '@/components/ui/card';
import { Wifi, PiggyBank, MessageCircle, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Wifi,
    title: "Funciona Aunque se Caiga el Internet",
    description: "Tu negocio no para porque Claro o Movistar tengan problemas. GymControl es 100% offline.",
    color: "text-gym-blue"
  },
  {
    icon: PiggyBank,
    title: "Sin \"Impuesto al Éxito\"",
    description: "Crece de 100 a 5,000 socios y paga exactamente lo mismo: $0 adicional. No te castigamos por crecer.",
    color: "text-primary"
  },
  {
    icon: MessageCircle,
    title: "Soporte Real, en tu Idioma",
    description: "Hablas por WhatsApp directo con el desarrollador, no con un bot o un call center internacional.",
    color: "text-green-400"
  },
  {
    icon: Shield,
    title: "Tus Datos Son Tuyos, y de Nadie Más",
    description: "Tu información está segura en tu computador, no en servidores en el extranjero. Tienes el control total.",
    color: "text-gym-red"
  },
  {
    icon: Zap,
    title: "Instalación en 24 Horas",
    description: "No más esperas de semanas. Tu gimnasio está funcionando con GymControl en menos de un día.",
    color: "text-primary"
  }
];

const FeaturesSection = () => {
  return (
    <section className="section-light py-20 px-4" id="features">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground-alt">
            Hecho por un Colombiano para los{' '}
            <span className="text-primary">Gimnasios de Colombia.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entendemos los problemas reales porque los hemos vivido. Estas son las soluciones que necesitas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card-alt border border-border/20 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className={`p-4 rounded-2xl bg-background/10 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>

                <h3 className="text-xl font-bold text-card-alt-foreground leading-tight">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Colombian Flag Accent */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="flex gap-1">
              <div className="w-3 h-6 bg-primary rounded-sm"></div>
              <div className="w-3 h-6 bg-gym-blue rounded-sm"></div>
              <div className="w-3 h-6 bg-gym-red rounded-sm"></div>
            </div>
            <span className="font-semibold">Desarrollado con orgullo en Colombia</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;