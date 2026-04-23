import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Zap, TrendingUp, Shield } from 'lucide-react';

export default function Home() {
  const whatsappLink = "https://wa.me/message/UFGRJBVOAYWQN1";
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mouseVelocity, setMouseVelocity] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const orbitElementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newX = e.clientX;
      const newY = e.clientY;

      // Calculate velocity
      const vx = newX - lastMousePos.current.x;
      const vy = newY - lastMousePos.current.y;
      setMouseVelocity({ x: vx, y: vy });

      setMousePos({ x: newX, y: newY });
      lastMousePos.current = { x: newX, y: newY };

      // Orbit effect for elements
      if (orbitElementsRef.current) {
        orbitElementsRef.current.forEach((el, idx) => {
          if (el) {
            const angle = (idx * Math.PI * 2) / orbitElementsRef.current.length;
            const distance = 150 + Math.sin(Date.now() / 1000 + idx) * 30;
            const x = Math.cos(angle) * distance + (newX - window.innerWidth / 2) * 0.05;
            const y = Math.sin(angle) * distance + (newY - window.innerHeight / 2) * 0.05;
            el.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
          }
        });
      }
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

    document.querySelectorAll('[data-scroll-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" className="animate-pulse">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#00ff00" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Cursor glow with velocity */}
      <div
        className="fixed w-48 h-48 bg-gradient-to-r from-green-400/30 via-yellow-400/20 to-red-400/30 rounded-full blur-3xl pointer-events-none z-0"
        style={{
          left: `${mousePos.x - 96}px`,
          top: `${mousePos.y - 96}px`,
          transition: 'all 0.05s ease-out',
          opacity: Math.min(1, 0.3 + Math.sqrt(mouseVelocity.x ** 2 + mouseVelocity.y ** 2) / 1000),
        }}
      />

      {/* Orbit elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          ref={(el) => {
            if (el) orbitElementsRef.current[0] = el;
          }}
          className="absolute top-1/2 left-1/2 w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400"
        />
        <div
          ref={(el) => {
            if (el) orbitElementsRef.current[1] = el;
          }}
          className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400"
        />
        <div
          ref={(el) => {
            if (el) orbitElementsRef.current[2] = el;
          }}
          className="absolute top-1/2 left-1/2 w-2 h-2 bg-red-400 rounded-full shadow-lg shadow-red-400"
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-4 flex justify-between items-center backdrop-blur-md bg-black/30 border-b border-green-400/10">
        <div className="flex items-center">
          <img src="/manus-storage/jbrasil_labs_logo_e6323550.png" alt="JBrasil Labs" className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity" />
        </div>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative px-6 py-2 font-bold overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-yellow-400 group-hover:from-yellow-400 group-hover:to-red-400 transition-all duration-300"></div>
          <span className="relative z-10 text-black flex items-center gap-2">
            COMEÇAR
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20">
        <div className="max-w-5xl mx-auto text-center" data-scroll-animate>
          <div className="mb-6 animate-fade-in">
            <span className="text-xs font-black text-green-400 tracking-widest">DESENVOLVIMENTO WEB</span>
          </div>

          <h1 className="text-8xl md:text-9xl font-black leading-tight mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Landing Pages
            <br />
            <span className="bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 bg-clip-text text-transparent">Que Vendem</span>
          </h1>

          <p className="text-2xl text-slate-300 mb-12 max-w-3xl mx-auto animate-fade-in font-light" style={{ animationDelay: '0.2s' }}>
            A partir de <span className="text-green-400 font-black">R$ 450</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 px-10 py-4 font-black text-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-yellow-400 group-hover:from-yellow-400 group-hover:to-red-400 transition-all duration-300"></div>
              <span className="relative z-10 text-black flex items-center gap-2">
                SOLICITAR ORÇAMENTO
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-24 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {[
              { number: '500+', label: 'Projetos' },
              { number: '98%', label: 'Satisfação' },
              { number: '24/7', label: 'Suporte' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center" data-scroll-animate>
                <div className="text-4xl font-black text-green-400 mb-2">{stat.number}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-32 px-4 border-t border-green-400/10">
        <div className="container max-w-6xl mx-auto">
          <div className="mb-20" data-scroll-animate>
            <h2 className="text-6xl md:text-7xl font-black">
              O que você
              <br />
              <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">recebe</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Design Futurista',
                desc: 'Interfaces que convertem',
                Icon: Zap,
                color: 'text-green-400',
              },
              {
                title: 'SEO Integrado',
                desc: 'Tráfego orgânico garantido',
                Icon: TrendingUp,
                color: 'text-yellow-400',
              },
              {
                title: 'Suporte Contínuo',
                desc: 'Sempre disponível para você',
                Icon: Shield,
                color: 'text-red-400',
              },
            ].map((service, idx) => {
              const { Icon, color } = service;
              return (
                <div
                  key={idx}
                  className="relative p-8 border border-green-400/20 hover:border-green-400/50 transition-all group backdrop-blur-sm bg-green-400/5 hover:bg-green-400/10"
                  data-scroll-animate
                >
                  <Icon className={`w-12 h-12 mb-4 ${color} group-hover:scale-110 transition-transform`} />
                  <h3 className="text-xl font-black mb-2">{service.title}</h3>
                  <p className="text-slate-400 text-sm">{service.desc}</p>
                  <div className="absolute top-0 right-0 w-1 h-12 bg-gradient-to-b from-green-400 to-transparent group-hover:h-full transition-all duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Digital Identity Section */}
      <section className="relative py-32 px-4 border-t border-green-400/10 bg-gradient-to-br from-green-400/5 via-transparent to-yellow-400/5">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div data-scroll-animate>
              <h2 className="text-6xl md:text-7xl font-black mb-8">
                Sua Identidade
                <br />
                <span className="bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 bg-clip-text text-transparent">Digital</span>
              </h2>
              <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                No mundo digital, sua presença online é o primeiro contato com seus clientes. Uma identidade visual forte e profissional não é luxo, é necessidade.
              </p>
              <p className="text-lg text-slate-400 mb-8">
                Sabemos que tempo é dinheiro. Por isso, entregamos sua landing page em menos de 48 horas.
              </p>
              <div className="flex items-center gap-4 p-6 border border-green-400/30 bg-green-400/5 backdrop-blur-sm">
                <div className="text-5xl font-black text-green-400">R$ 450</div>
                <div>
                  <div className="text-sm font-black text-yellow-400">IDENTIDADE DIGITAL COMPLETA</div>
                  <div className="text-xs text-slate-400">Em menos de 48 horas</div>
                </div>
              </div>
            </div>
            <div data-scroll-animate className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-yellow-400/20 blur-3xl rounded-full"></div>
              <div className="relative space-y-6">
                {[
                  { icon: '⚡', title: 'Rápido', desc: 'Entrega em 48 horas' },
                  { icon: '🎯', title: 'Efetivo', desc: 'Convertendo visitantes' },
                  { icon: '🔒', title: 'Seguro', desc: 'SSL e backup inclusos' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 border border-yellow-400/20 bg-yellow-400/5 backdrop-blur-sm hover:border-yellow-400/50 transition-all" data-scroll-animate style={{ animationDelay: `${idx * 100}ms` }}>
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <h3 className="font-black text-white">{item.title}</h3>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-32 px-4 border-t border-green-400/10">
        <div className="container max-w-4xl mx-auto">
          <div className="mb-20" data-scroll-animate>
            <h2 className="text-6xl md:text-7xl font-black">
              Preço
              <br />
              <span className="bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">Simples</span>
            </h2>
          </div>

          <div className="relative p-12 border border-red-400/30 bg-gradient-to-br from-red-400/5 to-yellow-400/5 backdrop-blur-sm" data-scroll-animate>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-400 flex items-center justify-center">
              <span className="text-black font-black text-sm">$</span>
            </div>

            <h3 className="text-3xl font-black mb-4">Landing Page Profissional</h3>

            <div className="mb-10">
              <div className="text-6xl font-black">
                R$ <span className="bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">450</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10">
              {[
                'Landing page responsiva',
                'Design personalizado',
                'Otimizado para SEO',
                'Certificado SSL',
                'Manutenção incluída',
                'Integração WhatsApp',
                'Performance otimizada',
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-green-400"></div>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 px-8 bg-gradient-to-r from-green-400 to-yellow-400 text-black font-black text-center hover:from-yellow-400 hover:to-red-400 transition-all"
            >
              COMEÇAR AGORA
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-32 px-4 border-t border-green-400/10">
        <div className="container max-w-6xl mx-auto">
          <div className="mb-20" data-scroll-animate>
            <h2 className="text-6xl md:text-7xl font-black">
              Como
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">funciona</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Conversa', desc: 'Entendemos seus objetivos' },
              { step: '02', title: 'Design', desc: 'Criamos seu design único' },
              { step: '03', title: 'Desenvolvimento', desc: 'Desenvolvemos com qualidade' },
              { step: '04', title: 'Lançamento', desc: 'Sua página gera resultados' },
            ].map((item, idx) => (
              <div key={idx} className="relative" data-scroll-animate>
                <div className="text-5xl font-black text-slate-700 mb-4">{item.step}</div>
                <h4 className="text-xl font-black mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.desc}</p>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-px bg-gradient-to-r from-green-400 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 px-4 border-t border-green-400/10">
        <div className="container max-w-4xl mx-auto">
          <div className="relative p-16 border border-green-400/30 bg-gradient-to-br from-green-400/5 to-yellow-400/5 backdrop-blur-sm text-center" data-scroll-animate>
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              Pronto para
              <br />
              <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">começar?</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8">Transforme seus visitantes em clientes com uma landing page que realmente vende.</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-12 py-4 bg-gradient-to-r from-green-400 to-yellow-400 text-black font-black hover:from-yellow-400 hover:to-red-400 transition-all"
            >
              VAMOS CONVERSAR
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        [data-scroll-animate] {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        [data-scroll-animate][data-visible='true'] {
          opacity: 1;
          transform: translateY(0);
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Smooth scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #00ff00, #ffff00, #ff0000);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #ffff00, #ff0000, #00ff00);
        }
      `}</style>
    </div>
  );
}
