import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Code2, Zap, Globe, Rocket, CheckCircle2, Award, TrendingUp } from 'lucide-react';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import CookieConsent from '@/components/CookieConsent';
import { useAnalytics } from '@/hooks/useAnalytics';

export default function Home() {
  const [language, setLanguage] = useState<'pt' | 'en' | 'es'>('pt');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  const translations = {
    pt: {
      agency: 'AGÊNCIA DE DESIGN WEB',
      title: 'Transformamos Ideias em Experiências Digitais',
      subtitle: 'Criamos landing pages, websites e aplicações web que geram resultados reais para seu negócio',
      cta: 'COMEÇAR PROJETO',
      portfolio: 'Portfólio',
      services: 'Serviços',
      about: 'Sobre',
      contact: 'Contato',
      language: 'Idioma',
      portuguese: 'Português',
      english: 'English',
      spanish: 'Español',
      
      // Services
      webDesign: 'Design Web',
      webDesignDesc: 'Interfaces modernas e intuitivas que impressionam',
      development: 'Desenvolvimento',
      developmentDesc: 'Código limpo, performático e escalável',
      seo: 'SEO & Marketing',
      seoDesc: 'Tráfego orgânico e leads qualificados',
      ecommerce: 'E-commerce',
      ecommerceDesc: 'Lojas online que vendem 24/7',
      
      // Stats
      projects: 'Projetos Entregues',
      clients: 'Clientes Satisfeitos',
      awards: 'Prêmios Recebidos',
      yearsExp: 'Anos de Experiência',
      
      // CTA
      ready: 'Pronto para transformar seu negócio?',
      contact_us: 'Entre em Contato',
      
      // Footer
      rights: '© 2026 JBrasil Labs. Todos os direitos reservados.',
    },
    en: {
      agency: 'WEB DESIGN AGENCY',
      title: 'We Transform Ideas into Digital Experiences',
      subtitle: 'We create landing pages, websites and web applications that generate real results for your business',
      cta: 'START PROJECT',
      portfolio: 'Portfolio',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      language: 'Language',
      portuguese: 'Português',
      english: 'English',
      spanish: 'Español',
      
      webDesign: 'Web Design',
      webDesignDesc: 'Modern and intuitive interfaces that impress',
      development: 'Development',
      developmentDesc: 'Clean, performant and scalable code',
      seo: 'SEO & Marketing',
      seoDesc: 'Organic traffic and qualified leads',
      ecommerce: 'E-commerce',
      ecommerceDesc: 'Online stores that sell 24/7',
      
      projects: 'Projects Delivered',
      clients: 'Satisfied Clients',
      awards: 'Awards Received',
      yearsExp: 'Years of Experience',
      
      ready: 'Ready to transform your business?',
      contact_us: 'Get in Touch',
      
      rights: '© 2026 JBrasil Labs. All rights reserved.',
    },
    es: {
      agency: 'AGENCIA DE DISEÑO WEB',
      title: 'Transformamos Ideas en Experiencias Digitales',
      subtitle: 'Creamos landing pages, sitios web y aplicaciones web que generan resultados reales para su negocio',
      cta: 'COMENZAR PROYECTO',
      portfolio: 'Portafolio',
      services: 'Servicios',
      about: 'Acerca de',
      contact: 'Contacto',
      language: 'Idioma',
      portuguese: 'Português',
      english: 'English',
      spanish: 'Español',
      
      webDesign: 'Diseño Web',
      webDesignDesc: 'Interfaces modernas e intuitivas que impresionan',
      development: 'Desarrollo',
      developmentDesc: 'Código limpio, performante y escalable',
      seo: 'SEO y Marketing',
      seoDesc: 'Tráfico orgánico y leads calificados',
      ecommerce: 'E-commerce',
      ecommerceDesc: 'Tiendas en línea que venden 24/7',
      
      projects: 'Proyectos Entregados',
      clients: 'Clientes Satisfechos',
      awards: 'Premios Recibidos',
      yearsExp: 'Años de Experiencia',
      
      ready: '¿Listo para transformar tu negocio?',
      contact_us: 'Ponte en Contacto',
      
      rights: '© 2026 JBrasil Labs. Todos los derechos reservados.',
    }
  };

  const t = translations[language];
  const { trackConversions } = useAnalytics();

  // Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw animated gradient lines
      const time = Date.now() * 0.0001;
      for (let i = 0; i < 5; i++) {
        const x1 = Math.sin(time + i) * canvas.width * 0.5 + canvas.width * 0.5;
        const y1 = Math.cos(time + i) * canvas.height * 0.5 + canvas.height * 0.5;
        const x2 = Math.sin(time + i + 2) * canvas.width * 0.5 + canvas.width * 0.5;
        const y2 = Math.cos(time + i + 2) * canvas.height * 0.5 + canvas.height * 0.5;

        const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
        gradient.addColorStop(0, 'rgba(0, 255, 0, 0)');
        gradient.addColorStop(0.5, `rgba(0, 255, 0, ${0.1 + Math.sin(time) * 0.05})`);
        gradient.addColorStop(1, 'rgba(0, 255, 0, 0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCTA = () => {
    trackConversions.clickCTA('hero_cta');
  };

  useEffect(() => {
    trackConversions.sectionView('hero');
  }, [trackConversions]);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />

      {/* Cursor Glow */}
      <div
        className="fixed w-64 h-64 bg-gradient-to-r from-green-400/20 to-cyan-400/20 rounded-full blur-3xl pointer-events-none z-10"
        style={{
          left: `${mousePos.x - 128}px`,
          top: `${mousePos.y - 128}px`,
          transition: 'all 0.1s ease-out'
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center backdrop-blur-lg bg-black/40 border-b border-green-400/10">
        <div className="flex items-center gap-3">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663592718664/78X7KokukcPL2cgDYSVZao/jbrasil_labs_logo_new-nx43sj3i24Saf5KkxbkWtL.webp"
            alt="JBrasil Labs"
            className="h-10 w-auto opacity-50 hover:opacity-100 transition-opacity duration-300"
          />
          <span className="text-sm font-bold text-green-400">JBrasil Labs</span>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#portfolio" className="hover:text-green-400 transition-colors">{t.portfolio}</a>
            <a href="#services" className="hover:text-green-400 transition-colors">{t.services}</a>
            <a href="#about" className="hover:text-green-400 transition-colors">{t.about}</a>
          </div>

          {/* Language Selector */}
          <div className="relative group">
            <button className="text-sm font-medium hover:text-green-400 transition-colors flex items-center gap-2">
              {language.toUpperCase()}
            </button>
            <div className="absolute right-0 mt-2 w-32 bg-black/90 border border-green-400/30 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
              {['pt', 'en', 'es'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang as 'pt' | 'en' | 'es')}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-green-400/20 transition-colors"
                >
                  {translations[lang as 'pt' | 'en' | 'es'].language === 'Idioma' ? translations[lang as 'pt' | 'en' | 'es'].portuguese : translations[lang as 'pt' | 'en' | 'es'][lang as 'pt' | 'en' | 'es' === 'pt' ? 'portuguese' : lang === 'en' ? 'english' : 'spanish']}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-8 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-block px-4 py-2 border border-green-400/30 rounded-full text-sm text-green-400 font-medium">
            {t.agency}
          </div>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight">
            {t.title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={handleCTA}
              className="px-8 py-4 bg-gradient-to-r from-green-400 to-cyan-400 text-black font-bold rounded hover:shadow-lg hover:shadow-green-400/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              {t.cta} <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 border-t border-green-400/10">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-400">500+</div>
              <div className="text-sm text-gray-400">{t.projects}</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-400">98%</div>
              <div className="text-sm text-gray-400">{t.clients}</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-400">12+</div>
              <div className="text-sm text-gray-400">{t.yearsExp}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-20 text-center">Nossos Serviços</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Code2, title: t.webDesign, desc: t.webDesignDesc },
              { icon: Rocket, title: t.development, desc: t.developmentDesc },
              { icon: TrendingUp, title: t.seo, desc: t.seoDesc },
              { icon: Globe, title: t.ecommerce, desc: t.ecommerceDesc }
            ].map((service, i) => (
              <div
                key={i}
                className="p-8 border border-green-400/20 rounded-lg hover:border-green-400/50 transition-all duration-300 group cursor-pointer"
              >
                <service.icon className="w-12 h-12 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8 border border-green-400/20 rounded-lg p-16">
          <h2 className="text-4xl font-bold">{t.ready}</h2>
          <p className="text-xl text-gray-300">{t.subtitle}</p>
          <button
            onClick={handleCTA}
            className="px-8 py-4 bg-gradient-to-r from-green-400 to-cyan-400 text-black font-bold rounded hover:shadow-lg hover:shadow-green-400/50 transition-all duration-300 inline-flex items-center gap-2"
          >
            {t.contact_us} <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-green-400/10 py-12 px-8">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
          {t.rights}
        </div>
      </footer>

      {/* Components */}
      <CookieConsent />
      <WhatsAppWidget phoneNumber="5511999999999" message="Olá! Gostaria de saber mais sobre os serviços da JBrasil Labs." />

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
