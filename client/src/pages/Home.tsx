'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Code2, Zap, Shield, TrendingUp, Rocket, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const whatsappLink = "https://wa.me/message/UFGRJBVOAYWQN1";
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mouseVelocity, setMouseVelocity] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const orbitElementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newX = e.clientX;
      const newY = e.clientY;

      const vx = newX - lastMousePos.current.x;
      const vy = newY - lastMousePos.current.y;
      setMouseVelocity({ x: vx, y: vy });

      setMousePos({ x: newX, y: newY });
      lastMousePos.current = { x: newX, y: newY };

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

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-hidden">
      {/* Grid background */}
      <div className="fixed inset-0 z-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#00ff00" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Cursor glow */}
      <div
        className="fixed w-64 h-64 bg-gradient-to-r from-green-400/40 via-cyan-400/30 to-green-400/40 rounded-full blur-3xl pointer-events-none z-0"
        style={{
          left: `${mousePos.x - 128}px`,
          top: `${mousePos.y - 128}px`,
          transition: 'all 0.05s ease-out',
          opacity: Math.min(1, 0.4 + Math.sqrt(mouseVelocity.x ** 2 + mouseVelocity.y ** 2) / 1000),
        }}
      />

      {/* Orbit elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          ref={(el) => {
            if (el) orbitElementsRef.current[0] = el;
          }}
          className="absolute top-1/2 left-1/2 w-4 h-4 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
        />
        <div
          ref={(el) => {
            if (el) orbitElementsRef.current[1] = el;
          }}
          className="absolute top-1/2 left-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
        />
        <div
          ref={(el) => {
            if (el) orbitElementsRef.current[2] = el;
          }}
          className="absolute top-1/2 left-1/2 w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex justify-between items-center backdrop-blur-lg bg-black/40 border-b border-green-400/20">
        <div className="flex items-center gap-2">
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663592718664/78X7KokukcPL2cgDYSVZao/jbrasil_labs_logo_new-nx43sj3i24Saf5KkxbkWtL.webp" 
            alt="JBrasil Labs" 
            className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300" 
          />
        </div>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative px-6 py-2 font-bold text-sm overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-400 group-hover:from-cyan-400 group-hover:to-green-400 transition-all duration-300"></div>
          <span className="relative z-10 text-black flex items-center gap-2">
            COMEÇAR
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <div
            data-animate
            className="mb-6 inline-block px-4 py-2 border border-green-400/50 rounded-full text-green-400 text-sm font-medium opacity-0 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            ✨ DESENVOLVIMENTO WEB PROFISSIONAL
          </div>

          <h1
            data-animate
            className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight opacity-0 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="text-white">Landing Pages</span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
              Que Vendem
            </span>
          </h1>

          <p
            data-animate
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            Design futurista, SEO otimizado e conversão garantida. Sua presença digital começa aqui.
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
                SOLICITAR ORÇAMENTO
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
              <div className="text-gray-400 text-sm">Projetos Entregues</div>
            </div>
            <div className="border border-cyan-400/30 rounded-lg p-6 backdrop-blur-sm bg-cyan-400/5 hover:bg-cyan-400/10 transition-colors">
              <div className="text-3xl font-bold text-cyan-400 mb-2">98%</div>
              <div className="text-gray-400 text-sm">Satisfação</div>
            </div>
            <div className="border border-green-400/30 rounded-lg p-6 backdrop-blur-sm bg-green-400/5 hover:bg-green-400/10 transition-colors">
              <div className="text-3xl font-bold text-green-400 mb-2">48h</div>
              <div className="text-gray-400 text-sm">Entrega Rápida</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            data-animate
            className="text-center mb-16 opacity-0 animate-fade-in"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              O que você <span className="text-green-400">recebe</span>
            </h2>
            <p className="text-gray-400 text-lg">Tudo que sua empresa precisa para dominar o digital</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: "Design Futurista",
                desc: "Interfaces modernas que impressionam e convertem seus visitantes em clientes",
                color: "green"
              },
              {
                icon: TrendingUp,
                title: "SEO Integrado",
                desc: "Otimizado para Google desde o início. Tráfego orgânico garantido",
                color: "cyan"
              },
              {
                icon: Shield,
                title: "Suporte 24/7",
                desc: "Sempre disponível para ajudar. Sua página nunca fica offline",
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
              Sua Identidade Digital
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              No mundo digital, sua presença online é o primeiro contato com seus clientes. Uma identidade visual forte e profissional não é luxo, é necessidade. Sabemos que tempo é dinheiro. Por isso, entregamos sua landing page em menos de 48 horas.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: Rocket, label: "Rápido", desc: "Entrega em 48 horas" },
                { icon: TrendingUp, label: "Efetivo", desc: "Convertendo visitantes" },
                { icon: Shield, label: "Seguro", desc: "SSL e backup inclusos" }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <item.icon className="w-10 h-10 text-green-400 mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-1">{item.label}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-black/50 border border-green-400/30 rounded-lg p-6 text-center">
              <div className="text-4xl font-black text-green-400 mb-2">R$ 450</div>
              <div className="text-gray-300">IDENTIDADE DIGITAL COMPLETA</div>
              <div className="text-sm text-gray-400 mt-2">Em menos de 48 horas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div
            data-animate
            className="text-center mb-16 opacity-0 animate-fade-in"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              Preço <span className="text-green-400">Simples</span>
            </h2>
          </div>

          <div
            data-animate
            className="border border-green-400/50 rounded-2xl p-12 backdrop-blur-sm bg-green-400/5 opacity-0 animate-fade-in"
          >
            <h3 className="text-3xl font-bold mb-6">Landing Page Profissional</h3>
            <div className="text-5xl font-black text-green-400 mb-8">R$ 450</div>

            <ul className="space-y-4 mb-12">
              {[
                "Landing page responsiva",
                "Design personalizado",
                "Otimizado para SEO",
                "Certificado SSL",
                "Manutenção incluída",
                "Integração WhatsApp",
                "Performance otimizada"
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full px-8 py-4 font-bold text-lg overflow-hidden rounded-lg block text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-400 group-hover:from-cyan-400 group-hover:to-green-400 transition-all duration-300"></div>
              <span className="relative z-10 text-black flex items-center justify-center gap-2">
                COMEÇAR AGORA
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            data-animate
            className="text-center mb-16 opacity-0 animate-fade-in"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              Como <span className="text-green-400">funciona</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Conversa", desc: "Entendemos seus objetivos" },
              { num: "02", title: "Design", desc: "Criamos seu design único" },
              { num: "03", title: "Desenvolvimento", desc: "Desenvolvemos com qualidade" },
              { num: "04", title: "Lançamento", desc: "Sua página gera resultados" }
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
              Pronto para <span className="text-green-400">começar?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transforme seus visitantes em clientes com uma landing page que realmente vende.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block px-10 py-5 font-bold text-lg overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-400 group-hover:from-cyan-400 group-hover:to-green-400 transition-all duration-300"></div>
              <span className="relative z-10 text-black flex items-center gap-2">
                VAMOS CONVERSAR
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-green-400/20 py-12 px-4 mt-24">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2026 JBrasil Labs. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
