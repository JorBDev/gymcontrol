import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { TrendingUp } from 'lucide-react';

const SavingsCalculator = () => {
  const [monthlyPayment, setMonthlyPayment] = useState([250000]);
  const [years, setYears] = useState([3]);
  const [savings, setSavings] = useState(0);
  const [animatedSavings, setAnimatedSavings] = useState(0);

  const gymControlPrice = 1495000;

  useEffect(() => {
    const totalSubscriptionCost = monthlyPayment[0] * 12 * years[0];
    const calculatedSavings = totalSubscriptionCost - gymControlPrice;
    setSavings(calculatedSavings);
  }, [monthlyPayment, years]);

  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0;
      const end = savings;
      const duration = 1000;
      const increment = end / (duration / 16);

      const animate = () => {
        if (end >= 0) {
          start += increment;
          if (start < end) {
            setAnimatedSavings(Math.floor(start));
            requestAnimationFrame(animate);
          } else {
            setAnimatedSavings(end);
          }
        } else {
          start -= Math.abs(increment);
          if (start > end) {
            setAnimatedSavings(Math.ceil(start));
            requestAnimationFrame(animate);
          } else {
            setAnimatedSavings(end);
          }
        }
      };

      if (end !== 0) animate();
    }, 100);

    return () => clearTimeout(timer);
  }, [savings]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const subscriptionTotal = monthlyPayment[0] * 12 * years[0];
  const subscriptionHeight = Math.min((subscriptionTotal / 20000000) * 200, 200);
  const gymControlHeight = Math.min((gymControlPrice / 20000000) * 200, 200);

  return (
    <section id="calculator" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
            Tu Dinero, Tus Reglas.{' '}
            <span className="text-primary">Descubre el Ahorro Real.</span>
          </h2>
        </div>

        <Card className="p-8 md:p-12 feature-card">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Controls */}
            <div className="space-y-8">
              <div>
                <label className="block text-lg font-semibold mb-4 text-foreground">
                  ¿Cuánto pagas al mes por tu software actual?
                </label>
                <div className="space-y-4">
                  <Slider
                    value={monthlyPayment}
                    onValueChange={setMonthlyPayment}
                    max={800000}
                    min={70000}
                    step={5000}
                    className="w-full"
                  />
                  <div className="text-center">
                    <span className="text-2xl font-bold text-primary">
                      {formatCurrency(monthlyPayment[0])}
                    </span>
                    <span className="text-muted-foreground ml-2">/ mes</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-lg font-semibold mb-4 text-foreground">
                  Período de comparación
                </label>
                <div className="space-y-4">
                  <Slider
                    value={years}
                    onValueChange={setYears}
                    max={10}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="text-center">
                    <span className="text-2xl font-bold text-primary">
                      {years[0]} {years[0] === 1 ? 'año' : 'años'}
                    </span>
                  </div>
                </div>
              </div>

              <div className={`${animatedSavings >= 0 ? 'bg-primary/10 border-primary/20' : 'bg-destructive/10 border-destructive/20'} border rounded-xl p-6 text-center animate-fade-in relative overflow-hidden`}>
                <div className="relative z-10 text-center">
                  <TrendingUp className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {animatedSavings >= 0 ? 'Tu Ahorro Total' : 'Costo Adicional'}
                  </h3>
                  <div className={`text-4xl md:text-5xl font-black animate-counter ${animatedSavings >= 0 ? 'text-primary' : 'text-destructive'
                    }`}>
                    {formatCurrency(Math.abs(animatedSavings))}
                  </div>
                  <p className="text-white/80 text-lg">
                    En {years[0]} {years[0] === 1 ? 'año' : 'años'}
                  </p>
                  {animatedSavings < 0 && (
                    <p className="text-white/60 text-sm mt-2">
                      GymControl tiene un costo inicial mayor
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-center text-foreground">
                Comparación de Costos
              </h3>

              <div className="flex items-end justify-center gap-8 h-64">
                {/* Subscription Bar */}
                <div className="flex flex-col items-center">
                  <div
                    className="bg-destructive w-16 rounded-t-lg transition-all duration-1000 flex items-end justify-center"
                    style={{ height: `${subscriptionHeight}px` }}
                  >
                    <div className="text-white text-xs font-bold p-2 text-center">
                      Suscripción
                    </div>
                  </div>
                  <div className="mt-2 text-center pb-4">
                    <div className="text-sm font-semibold text-foreground">Software Actual</div>
                    <div className="text-lg font-bold text-destructive">
                      {formatCurrency(subscriptionTotal)}
                    </div>
                  </div>
                </div>

                {/* GymControl Bar */}
                <div className="flex flex-col items-center">
                  <div
                    className="bg-primary w-16 rounded-t-lg transition-all duration-1000 flex items-end justify-center"
                    style={{ height: `${gymControlHeight}px` }}
                  >
                    {/* <div className="text-primary-foreground text-xs font-bold p-2 text-center">
                      GymControl
                    </div> */}
                  </div>
                  <div className="mt-2 text-center">
                    <div className="text-sm font-semibold text-foreground">GymControl</div>
                    <div className="text-lg font-bold text-primary">
                      {formatCurrency(gymControlPrice)}
                    </div>
                    <div className="text-xs text-muted-foreground">Pago único</div>
                  </div>
                </div>
              </div>


              {/* CTA */}
              <div className="text-center">
                <Button
                  className="w-full cta-button"
                  onClick={() => window.open('https://wa.me/573013207669', '_blank')}
                >
                  Quiero Agendar mi Demo Gratuita
                </Button>
                <p className="text-sm text-secondary mt-3">
                  ⭐ Demo personalizada • Sin compromiso • 100% gratis
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SavingsCalculator;