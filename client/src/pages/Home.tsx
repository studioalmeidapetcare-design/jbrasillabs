import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Code2, Shield, TrendingUp, Rocket, CheckCircle2, Globe, MapPin } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export default function Home() {
  const whatsappLink = "https://wa.me/message/UFGRJBVOAYWQN1";
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [language, setLanguage] = useState('pt');
  const [showMenu, setShowMenu] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([] as Particle[]);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  const translations = {
    pt: {
      sitemap: 'Mapa do Site',
      home: 'Início',
      services: 'Serviços',
      pricing: 'Preços',
      process: 'Processo',
      language: 'Idioma',
      portuguese: 'Português',
      english: 'English',
      spanish: 'Español',
      webDevelopment: 'DESENVOLVIMENTO WEB PROFISSIONAL',
      landingPages: 'Landing Pages',
      thatSell: 'Que Vendem',
      description: 'Design futurista, SEO otimizado e conversão garantida. Sua presença digital começa aqui.',
      requestQuote: 'SOLICITAR ORÇAMENTO',
      projects: 'Projetos Entregues',
      satisfaction: 'Satisfação',
      fastDelivery: 'Entrega Rápida',
      whatYouGet: 'O que você recebe',
      everything: 'Tudo que sua empresa precisa para dominar o digital',
      futuristicDesign: 'Design Futurista',
      futuristicDesc: 'Interfaces modernas que impressionam e convertem seus visitantes em clientes',
      seoIntegrated: 'SEO Integrado',
      seoDesc: 'Otimizado para Google desde o início. Tráfego orgânico garantido',
      support24: 'Suporte 24/7',
      supportDesc: 'Sempre disponível para ajudar. Sua página nunca fica offline',
      digitalIdentity: 'Sua Identidade Digital',
      identityText: 'No mundo digital, sua presença online é o primeiro contato com seus clientes. Uma identidade visual forte e profissional não é luxo, é necessidade. Sabemos que tempo é dinheiro. Por isso, entregamos sua landing page em menos de 48 horas.',
      fast: 'Rápido',
      fastDesc: 'Entrega em 48 horas',
      effective: 'Efetivo',
      effectiveDesc: 'Convertendo visitantes',
      secure: 'Seguro',
      secureDesc: 'SSL e backup inclusos',
      completeIdentity: 'IDENTIDADE DIGITAL COMPLETA',
      inLessThan48: 'Em menos de 48 horas',
      howItWorks: 'Como funciona',
      conversation: 'Conversa',
      understandObjectives: 'Entendemos seus objetivos',
      design: 'Design',
      createUnique: 'Criamos seu design único',
      development: 'Desenvolvimento',
      developWithQuality: 'Desenvolvemos com qualidade',
      launch: 'Lançamento',
      pageGeneratesResults: 'Sua página gera resultados',
      readyToStart: 'Pronto para começar?',
      transformVisitors: 'Transforme seus visitantes em clientes com uma landing page que realmente vende.',
      letsChat: 'VAMOS CONVERSAR',
      allRightsReserved: 'Todos os direitos reservados.',
      begin: 'COMEÇAR'
    },
    en: {
      sitemap: 'Sitemap',
      home: 'Home',
      services: 'Services',
      pricing: 'Pricing',
      process: 'Process',
      language: 'Language',
      portuguese: 'Português',
      english: 'English',
      spanish: 'Español',
      webDevelopment: 'PROFESSIONAL WEB DEVELOPMENT',
      landingPages: 'Landing Pages',
      thatSell: 'That Sell',
      description: 'Futuristic design, optimized SEO and guaranteed conversion. Your digital presence starts here.',
      requestQuote: 'REQUEST QUOTE',
      projects: 'Projects Delivered',
      satisfaction: 'Satisfaction',
      fastDelivery: 'Fast Delivery',
      whatYouGet: 'What you get',
      everything: 'Everything your company needs to dominate the digital world',
      futuristicDesign: 'Futuristic Design',
      futuristicDesc: 'Modern interfaces that impress and convert your visitors into customers',
      seoIntegrated: 'Integrated SEO',
      seoDesc: 'Optimized for Google from the start. Organic traffic guaranteed',
      support24: '24/7 Support',
      supportDesc: 'Always available to help. Your page never goes offline',
      digitalIdentity: 'Your Digital Identity',
      identityText: 'In the digital world, your online presence is the first contact with your customers. A strong and professional visual identity is not a luxury, it is a necessity. We know that time is money. That is why we deliver your landing page in less than 48 hours.',
      fast: 'Fast',
      fastDesc: 'Delivery in 48 hours',
      effective: 'Effective',
      effectiveDesc: 'Converting visitors',
      secure: 'Secure',
      secureDesc: 'SSL and backups included',
      completeIdentity: 'COMPLETE DIGITAL IDENTITY',
      inLessThan48: 'In less than 48 hours',
      howItWorks: 'How it works',
      conversation: 'Conversation',
      understandObjectives: 'We understand your objectives',
      design: 'Design',
      createUnique: 'We create your unique design',
      development: 'Development',
      developWithQuality: 'We develop with quality',
      launch: 'Launch',
      pageGeneratesResults: 'Your page generates results',
      readyToStart: 'Ready to start?',
      transformVisitors: 'Transform your visitors into customers with a landing page that really sells.',
      letsChat: 'LETS CHAT',
      allRightsReserved: 'All rights reserved.',
      begin: 'BEGIN'
    },
    es: {
      sitemap: 'Mapa del Sitio',
      home: 'Inicio',
      services: 'Servicios',
      pricing: 'Precios',
      process: 'Proceso',
      language: 'Idioma',
      portuguese: 'Português',
      english: 'English',
      spanish: 'Español',
      webDevelopment: 'DESARROLLO WEB PROFESIONAL',
      landingPages: 'Páginas de Destino',
      thatSell: 'Que Venden',
      description: 'Diseño futurista, SEO optimizado y conversión garantizada. Tu presencia digital comienza aquí.',
      requestQuote: 'SOLICITAR PRESUPUESTO',
      projects: 'Proyectos Entregados',
      satisfaction: 'Satisfacción',
      fastDelivery: 'Entrega Rápida',
      whatYouGet: 'Lo que recibes',
      everything: 'Todo lo que tu empresa necesita para dominar el mundo digital',
      futuristicDesign: 'Diseño Futurista',
      futuristicDesc: 'Interfaces modernas que impresionan y convierten tus visitantes en clientes',
      seoIntegrated: 'SEO Integrado',
      seoDesc: 'Optimizado para Google desde el inicio. Tráfico orgánico garantizado',
      support24: 'Soporte 24/7',
      supportDesc: 'Siempre disponible para ayudarte. Tu página nunca se desconecta',
      digitalIdentity: 'Tu Identidad Digital',
      identityText: 'En el mundo digital, tu presencia en línea es el primer contacto con tus clientes. Una identidad visual fuerte y profesional no es un lujo, es una necesidad. Sabemos que el tiempo es dinero. Por eso entregamos tu página de destino en menos de 48 horas.',
      fast: 'Rápido',
      fastDesc: 'Entrega en 48 horas',
      effective: 'Efectivo',
      effectiveDesc: 'Convirtiendo visitantes',
      secure: 'Seguro',
      secureDesc: 'SSL y copias de seguridad incluidas',
      completeIdentity: 'IDENTIDAD DIGITAL COMPLETA',
      inLessThan48: 'En menos de 48 horas',
      howItWorks: 'Cómo funciona',
      conversation: 'Conversación',
      understandObjectives: 'Entendemos tus objetivos',
      design: 'Diseño',
      createUnique: 'Creamos tu diseño único',
      development: 'Desarrollo',
      developWithQuality: 'Desarrollamos con calidad',
      launch: 'Lanzamiento',
      pageGeneratesResults: 'Tu página genera resultados',
      readyToStart: 'Listo para comenzar?',
      transformVisitors: 'Transforma tus visitantes en clientes con una página de destino que realmente vende.',
      letsChat: 'HABLEMOS',
      allRightsReserved: 'Todos los derechos reservados.',
      begin: 'COMENZAR'
    }
  };

  const t = translations[language as keyof typeof translations];

  // Initialize particles
  useEffect(() => {
    const particleCount = 50;
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.3
      });
    }
    setParticles(newParticles);
  }, []);

  // Animate particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      setParticles(prevParticles => {
        return prevParticles.map(particle => {
          let newX = particle.x + particle.vx;
          let newY = particle.y + particle.vy;
          let newVx = particle.vx;
          let newVy = particle.vy;

          // Bounce off edges
          if (newX < 0 || newX > canvas.width) newVx *= -1;
          if (newY < 0 || newY > canvas.height) newVy *= -1;

          newX = Math.max(0, Math.min(canvas.width, newX));
          newY = Math.max(0, Math.min(canvas.height, newY));

          // Draw particle
          ctx.fillStyle = `rgba(0, 255, 0, ${particle.opacity})`;
          ctx.beginPath();
          ctx.arc(newX, newY, particle.size, 0, Math.PI * 2);
          ctx.fill();

          // Draw connections
          prevParticles.forEach(otherParticle => {
            const dx = newX - otherParticle.x;
            const dy = newY - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              ctx.strokeStyle = `rgba(0, 255, 0, ${(1 - distance / 150) * 0.2})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(newX, newY);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          });

          return {
            ...particle,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy
          };
        });
      });

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

  // Mouse move handler
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', 'true');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated particles canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex justify-between items-center backdrop-blur-lg bg-black/40 border-b border-green-400/20">
        <div className="flex items-center gap-2">
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663592718664/78X7KokukcPL2cgDYSVZao/jbrasil_labs_logo_new-nx43sj3i24Saf5KkxbkWtL.webp" 
            alt="JBrasil Labs" 
            className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300" 
          />
        </div>
        
        <div className="flex items-center gap-4">
          {/* Sitemap Menu */}
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="flex items-center gap-2 px-4 py-2 text-green-400 hover:text-green-300 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">{t.sitemap}</span>
            </button>
            {showMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-black/90 border border-green-400/50 rounded-lg overflow-hidden backdrop-blur-lg">
                <a href="#home" className="block px-4 py-3 text-gray-300 hover:text-green-400 hover:bg-green-400/10 transition-colors text-sm">
                  {t.home}
                </a>
                <a href="#services" className="block px-4 py-3 text-gray-300 hover:text-green-400 hover:bg-green-400/10 transition-colors text-sm">
                  {t.services}
                </a>
                <a href="#process" className="block px-4 py-3 text-gray-300 hover:text-green-400 hover:bg-green-400/10 transition-colors text-sm">
                  {t.process}
                </a>
              </div>
            )}
          </div>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              className="flex items-center gap-2 px-4 py-2 text-green-400 hover:text-green-300 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>
            {showLanguageMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-black/90 border border-green-400/50 rounded-lg overflow-hidden backdrop-blur-lg">
                <button
                  onClick={() => {
                    setLanguage('pt');
                    setShowLanguageMenu(false);
                  }}
                  className="w-full text-left px-4 py-3 text-gray-300 hover:text-green-400 hover:bg-green-400/10 transition-colors text-sm"
                >
                  {t.portuguese}
                </button>
                <button
                  onClick={() => {
                    setLanguage('en');
                    setShowLanguageMenu(false);
                  }}
                  className="w-full text-left px-4 py-3 text-gray-300 hover:text-green-400 hover:bg-green-400/10 transition-colors text-sm"
                >
                  {t.english}
                </button>
                <button
                  onClick={() => {
                    setLanguage('es');
                    setShowLanguageMenu(false);
                  }}
                  className="w-full text-left px-4 py-3 text-gray-300 hover:text-green-400 hover:bg-green-400/10 transition-colors text-sm"
                >
                  {t.spanish}
                </button>
              </div>
            )}
          </div>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative px-6 py-2 font-bold text-sm overflow-hidden rounded"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-400 group-hover:from-cyan-400 group-hover:to-green-400 transition-all duration-300"></div>
          <span className="relative z-10 text-black flex items-center gap-2">
            {t.begin}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </a>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <div
            data-animate
            className="mb-6 inline-block px-4 py-2 border border-green-400/50 rounded-full text-green-400 text-sm font-medium opacity-0 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            ✨ {t.webDevelopment}
          </div>

          <h1
            data-animate
            className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight opacity-0 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="text-white">{t.landingPages}</span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
              {t.thatSell}
            </span>
          </h1>

          <p
            data-animate
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            {t.description}
          </p>

          <div
            data-animate
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 font-bold text-lg overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-400 group-hover:from-cyan-400 group-hover:to-green-400 transition-all duration-300"></div>
              <span className="relative z-10 text-black flex items-center justify-center gap-2">
                {t.requestQuote}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>

          {/* Stats */}
          <div
            data-animate
            className="grid grid-cols-3 gap-8 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="border border-green-400/30 rounded-lg p-6 backdrop-blur-sm bg-green-400/5 hover:bg-green-400/10 transition-colors">
              <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-400 text-sm">{t.projects}</div>
            </div>
            <div className="border border-cyan-400/30 rounded-lg p-6 backdrop-blur-sm bg-cyan-400/5 hover:bg-cyan-400/10 transition-colors">
              <div className="text-3xl font-bold text-cyan-400 mb-2">98%</div>
              <div className="text-gray-400 text-sm">{t.satisfaction}</div>
            </div>
            <div className="border border-green-400/30 rounded-lg p-6 backdrop-blur-sm bg-green-400/5 hover:bg-green-400/10 transition-colors">
              <div className="text-3xl font-bold text-green-400 mb-2">48h</div>
              <div className="text-gray-400 text-sm">{t.fastDelivery}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            data-animate
            className="text-center mb-16 opacity-0 animate-fade-in"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              {t.whatYouGet}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: t.futuristicDesign,
                desc: t.futuristicDesc,
                color: "green"
              },
              {
                icon: TrendingUp,
                title: t.seoIntegrated,
                desc: t.seoDesc,
                color: "cyan"
              },
              {
                icon: Shield,
                title: t.support24,
                desc: t.supportDesc,
                color: "green"
              }
            ].map((service, idx) => (
              <div
                key={idx}
                data-animate
                className={`border rounded-xl p-8 backdrop-blur-sm opacity-0 animate-fade-in transition-all duration-300 hover:scale-105 ${
                  service.color === "green"
                    ? "border-green-400/30 bg-green-400/5 hover:bg-green-400/10"
                    : "border-cyan-400/30 bg-cyan-400/5 hover:bg-cyan-400/10"
                }`}
                style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
              >
                <service.icon
                  className={`w-12 h-12 mb-4 ${
                    service.color === "green" ? "text-green-400" : "text-cyan-400"
                  }`}
                />
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div
            data-animate
            className="border border-green-400/50 rounded-2xl p-12 backdrop-blur-sm bg-green-400/5 opacity-0 animate-fade-in"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              {t.digitalIdentity}
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              {t.identityText}
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Rocket, label: t.fast, desc: t.fastDesc },
                { icon: TrendingUp, label: t.effective, desc: t.effectiveDesc },
                { icon: Shield, label: t.secure, desc: t.secureDesc }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <item.icon className="w-10 h-10 text-green-400 mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-1">{item.label}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            data-animate
            className="text-center mb-16 opacity-0 animate-fade-in"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              {t.howItWorks}
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "01", title: t.conversation, desc: t.understandObjectives },
              { num: "02", title: t.design, desc: t.createUnique },
              { num: "03", title: t.development, desc: t.developWithQuality },
              { num: "04", title: t.launch, desc: t.pageGeneratesResults }
            ].map((step, idx) => (
              <div
                key={idx}
                data-animate
                className="border border-green-400/30 rounded-xl p-6 backdrop-blur-sm bg-green-400/5 opacity-0 animate-fade-in text-center"
                style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
              >
                <div className="text-4xl font-black text-green-400 mb-4">{step.num}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div
            data-animate
            className="opacity-0 animate-fade-in"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              {t.readyToStart}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {t.transformVisitors}
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block px-10 py-5 font-bold text-lg overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-400 group-hover:from-cyan-400 group-hover:to-green-400 transition-all duration-300"></div>
              <span className="relative z-10 text-black flex items-center gap-2">
                {t.letsChat}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-green-400/20 py-12 px-4 mt-24">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2026 JBrasil Labs. {t.allRightsReserved}</p>
        </div>
      </footer>

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

        [data-animate][data-visible="true"] {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
