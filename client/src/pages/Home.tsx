import { useEffect, useRef, useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Home() {
  const whatsappLink = "https://wa.me/message/UFGRJBVOAYWQN1";
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorGlow, setCursorGlow] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setCursorGlow({ x: e.clientX, y: e.clientY });

      // Parallax effect for floating elements
      if (floatingElementsRef.current) {
        floatingElementsRef.current.forEach((el, idx) => {
          if (el) {
            const speed = (idx + 1) * 0.02;
            const x = (e.clientX - window.innerWidth / 2) * speed;
            const y = (e.clientY - window.innerHeight / 2) * speed;
            el.style.transform = `translate(${x}px, ${y}px)`;
          }
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animate elements on scroll
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
      {/* Cursor Glow Effect */}
      <div
        className="fixed w-32 h-32 bg-green-400/20 rounded-full blur-3xl pointer-events-none z-0"
        style={{
          left: `${cursorGlow.x - 64}px`,
          top: `${cursorGlow.y - 64}px`,
          transition: 'all 0.1s ease-out',
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center">
        <div className="text-2xl font-black">
          <span className="text-green-400">JBRASIL</span>
        </div>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 border-2 border-dashed border-green-400 font-bold hover:bg-green-400/10 transition-all"
        >
          FALAR AGORA
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20">
        {/* Floating Interactive Elements */}
        <div
          ref={(el) => {
            if (el && floatingElementsRef.current) {
              floatingElementsRef.current[0] = el;
            }
          }}
          className="absolute top-20 right-20 w-16 h-16 border-2 border-dashed border-green-400"
        />
        <div
          ref={(el) => {
            if (el && floatingElementsRef.current) {
              floatingElementsRef.current[1] = el;
            }
          }}
          className="absolute bottom-40 left-20 w-12 h-12 bg-yellow-400"
        />
        <div
          ref={(el) => {
            if (el && floatingElementsRef.current) {
              floatingElementsRef.current[2] = el;
            }
          }}
          className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-dashed border-red-400"
        />

        <div className="max-w-4xl mx-auto text-center" data-scroll-animate>
          <div className="mb-8 animate-fade-in">
            <span className="text-xs font-black text-green-400 tracking-widest">DESENVOLVIMENTO WEB</span>
          </div>

          <h1 className="text-7xl md:text-8xl font-black leading-tight mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Landing Pages
            <br />
            <span className="text-green-400">Que Vendem</span>
          </h1>

          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            A partir de <span className="text-green-400 font-black">R$ 80/mês</span>. Design minimalista, performance otimizada e resultados comprovados.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 font-bold overflow-hidden"
            >
              <div className="absolute inset-0 bg-green-400 group-hover:bg-yellow-400 transition-colors"></div>
              <span className="relative z-10 text-black flex items-center gap-2">
                COMEÇAR AGORA
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>

          <div className="mt-16 text-sm text-slate-400 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p>↓ Role para conhecer mais</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-32 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="mb-20" data-scroll-animate>
            <h2 className="text-6xl md:text-7xl font-black mb-4">
              O que você
              <br />
              <span className="text-green-400">recebe</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'Design Profissional',
                desc: 'Interface minimalista e moderna que converte visitantes em clientes',
                accent: 'green-400',
              },
              {
                number: '02',
                title: 'Otimizado para SEO',
                desc: 'Sua página aparece no Google e atrai tráfego orgânico qualificado',
                accent: 'yellow-400',
              },
              {
                number: '03',
                title: 'Suporte Completo',
                desc: 'Manutenção, atualizações e integração com WhatsApp inclusos',
                accent: 'red-400',
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="relative p-8 border-2 border-dashed border-slate-700 hover:border-green-400 transition-all group"
                data-scroll-animate
              >
                <div className={`text-5xl font-black text-${service.accent} mb-4`}>{service.number}</div>
                <h3 className="text-2xl font-black mb-4">{service.title}</h3>
                <p className="text-slate-400">{service.desc}</p>
                <div className="absolute top-0 right-0 w-1 h-12 bg-gradient-to-b from-green-400 to-transparent group-hover:h-full transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-32 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="mb-20" data-scroll-animate>
            <h2 className="text-6xl md:text-7xl font-black mb-4">
              Preço
              <br />
              <span className="text-red-400">Transparente</span>
            </h2>
          </div>

          <div className="relative p-12 border-2 border-dashed border-red-400 bg-red-400/5" data-scroll-animate>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-400 flex items-center justify-center">
              <span className="text-black font-black text-sm">$</span>
            </div>

            <h3 className="text-3xl font-black mb-4">Landing Page Profissional</h3>
            <p className="text-slate-400 mb-8">Tudo que você precisa para começar a vender online</p>

            <div className="mb-10">
              <div className="text-6xl font-black">
                R$ <span className="text-red-400">80</span>
                <span className="text-xl text-slate-400 font-normal">/mês</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10">
              {[
                'Landing page responsiva e moderna',
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
              className="block w-full py-4 px-8 bg-green-400 text-black font-black text-center hover:bg-yellow-400 transition-all"
            >
              COMEÇAR AGORA
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-32 px-4 border-t border-green-400/20">
        <div className="container max-w-6xl mx-auto">
          <div className="mb-20" data-scroll-animate>
            <h2 className="text-6xl md:text-7xl font-black mb-4">
              Como
              <br />
              <span className="text-yellow-400">funciona</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Conversa', desc: 'Entendemos seus objetivos e público' },
              { step: '02', title: 'Design', desc: 'Criamos um design único e impactante' },
              { step: '03', title: 'Desenvolvimento', desc: 'Desenvolvemos sua página com qualidade' },
              { step: '04', title: 'Lançamento', desc: 'Sua página gera leads e vendas' },
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
      <section className="relative py-32 px-4 border-t border-green-400/20">
        <div className="container max-w-4xl mx-auto">
          <div className="relative p-16 border-2 border-dashed border-green-400 bg-green-400/5 text-center" data-scroll-animate>
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              Pronto para
              <br />
              <span className="text-green-400">começar?</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8">Transforme seus visitantes em clientes com uma landing page que realmente vende.</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-12 py-4 bg-green-400 text-black font-black hover:bg-yellow-400 transition-all"
            >
              VAMOS CONVERSAR
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-4 border-t border-slate-800">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="font-black mb-4 text-green-400 text-sm tracking-widest">SERVIÇOS</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="#services" className="hover:text-green-400 transition-colors">
                    Landing Pages
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-green-400 transition-colors">
                    SEO
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-green-400 transition-colors">
                    Design
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-4 text-green-400 text-sm tracking-widest">EMPRESA</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="#about" className="hover:text-green-400 transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-4 text-green-400 text-sm tracking-widest">CONTATO</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href="mailto:contato@jbrasillabs.com.br" className="hover:text-green-400 transition-colors">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center gap-8 mb-8">
            <a href="#" className="text-slate-400 hover:text-green-400 transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

          <div className="text-center text-slate-500 text-sm pt-8 border-t border-slate-800">
            <p>© 2026 JBrasil Labs. Todos os direitos reservados.</p>
          </div>
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

        /* Smooth scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #00ff00, #ffff00);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #ffff00, #ff0000);
        }
      `}</style>
    </div>
  );
}
