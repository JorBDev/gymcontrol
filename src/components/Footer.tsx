import { MessageCircle, Mail, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="gym-logo text-2xl">
              <span className="text-primary">GYM</span>
              <span className="text-foreground">CONTROL</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              El software de gestión para gimnasios hecho en Colombia.
              Pago único, funciona offline, soporte directo.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Contacto</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>+57 300 123 4567</span>
              </a>
              <a
                href="mailto:contacto@gymcontrol.co"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>contacto@gymcontrol.co</span>
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Producto</h3>
            <div className="space-y-3 text-sm">
              <a href="#features" className="block text-muted-foreground hover:text-primary transition-colors">
                Características
              </a>
              <a href="#precios" className="block text-muted-foreground hover:text-primary transition-colors">
                Precios
              </a>
              <a href="#calculator" className="block text-muted-foreground hover:text-primary transition-colors">
                Demo
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Soporte
              </a>
            </div>
          </div>

          {/* Social & Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            <div className="space-y-2 text-xs text-muted-foreground">
              <a href="#" className="block hover:text-primary transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="block hover:text-primary transition-colors">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 GymControl. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex gap-1">
              <div className="w-3 h-4 bg-primary rounded-sm"></div>
              <div className="w-3 h-4 bg-gym-blue rounded-sm"></div>
              <div className="w-3 h-4 bg-gym-red rounded-sm"></div>
            </div>
            <span>Hecho por JorBDev con ❤️ en Colombia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;