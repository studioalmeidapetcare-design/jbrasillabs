import { ArrowRight, Code2, Smartphone, Zap, Shield, MessageCircle, Sparkles, Rocket, Grid3x3, Cpu, Layers, CheckCircle2, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { usePageLoadAnimation, useMouseParallax, useIntersectionAnimation, useCursorGlow } from "@/components/AnimationProvider";

/**
 * JBrasil Labs - Baunfire-Inspired Design
 * Design Philosophy: Minimalist + Neon Accents + Geometric Elements
 * Color Scheme: Dark charcoal (#1a1a1a) + Neon Green (#00ff00) + Yellow (#ffff00) + Cyan (#00f0ff)
 * Style: Asymmetric layouts, geometric decorations, dashed borders, floating elements
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useMouseParallax();

  // Initialize all animations
  usePageLoadAnimation();
  useIntersectionAnimation();
  useCursorGlow();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/message/UFGRJBVOAYWQN1";

  // Decorative elements component
  const GeometricDecor = ({ className = "" }: { className?: string }) => (
    <div className={`absolute pointer-events-none ${className}`}>
      <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/95 backdrop-blur-sm border-b border-lime-400/20" : "bg-transparent"}`}>
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2 relative">
            <div className="w-8 h-8 bg-lime-400 rounded-sm flex items-center justify-center">
              <Code2 className="w-5 h-5 text-black font-bold" />
            </div>
            <span className="font-black text-lg tracking-tight">JBRASIL</span>
          </div>
          <div className="hidden md:flex items-center gap-12">
            <a href="#services" className="text-sm font-medium hover:text-lime-400 transition-colors">Serviços</a>
            <a href="#pricing" className="text-sm font-medium hover:text-lime-400 transition-colors">Preços</a>
            <a href="#about" className="text-sm font-medium hover:text-lime-400 transition-colors">Sobre</a>
          </div>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border-2 border-dashed border-lime-400 text-sm font-bold hover:bg-lime-400 hover:text-black transition-all">
            <MessageCircle className="w-4 h-4" />
            LET'S TALK
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-40 pb-32 px-4 overflow-hidden">
        <div className="container max-w-6xl mx-auto" data-animate>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div className="relative z-10">
              <div className="mb-8 flex items-center gap-3" data-animate>
                <div className="text-xs font-black text-lime-400 tracking-widest">SOMOS JBRASIL</div>
                <div className="w-8 h-px bg-lime-400"></div>
              </div>

              <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8 tracking-tight" data-animate>
                Landing Pages
                <br />
                <span className="text-lime-400">Que Convertem</span>
              </h1>

              <p className="text-lg text-slate-300 mb-12 max-w-md leading-relaxed font-light" data-animate>
                Páginas de alta performance, otimizadas para conversão. Design minimalista com impacto máximo.
              </p>

              <div className="flex flex-col sm:flex-row gap-6" data-animate>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 font-bold overflow-hidden">
                  <div className="absolute inset-0 bg-lime-400 group-hover:bg-yellow-400 transition-colors"></div>
                  <span className="relative z-10 text-black flex items-center gap-2">
                    COMEÇAR AGORA
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <button className="px-8 py-4 border-2 border-dashed border-lime-400 font-bold hover:bg-lime-400/10 transition-all">
                  VER PORTFÓLIO
                </button>
              </div>
            </div>

            {/* Right decorative area */}
            <div className="relative h-96 md:h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-lime-400/5 rounded-full blur-3xl" data-parallax="2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-400/5 rounded-full blur-3xl" data-parallax="1.5"></div>
              
              {/* Decorative elements */}
              <div className="absolute top-20 right-20 text-6xl font-black text-slate-800" data-parallax="3">A</div>
              <div className="absolute bottom-40 right-40 w-12 h-12 border-2 border-dashed border-lime-400" data-parallax="2.5"></div>
              <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-yellow-400" data-parallax="2"></div>
              <GeometricDecor className="top-1/4 right-1/3" />
              <GeometricDecor className="bottom-1/4 right-1/2" />
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-black text-slate-600 tracking-widest animate-bounce">
            ROLE PARA VER
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 px-4 border-t border-lime-400/20">
        <div className="container max-w-6xl mx-auto">
          <div className="mb-20" data-scroll-animate>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-lime-400"></div>
              <span className="text-xs font-black text-lime-400 tracking-widest">O QUE FAZEMOS</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black leading-tight">
              Serviços
              <br />
              <span className="text-lime-400">Completos</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                number: "01", 
                title: "Design", 
                desc: "Interfaces minimalistas que convertem",
                accent: "lime-400"
              },
              { 
                number: "02", 
                title: "Desenvolvimento", 
                desc: "Performance otimizada e segura",
                accent: "yellow-400"
              },
              { 
                number: "03", 
                title: "SEO & Marketing", 
                desc: "Estratégia para dominar o Google",
                accent: "cyan-400"
              }
            ].map((service, idx) => (
              <div key={idx} className="group relative" data-scroll-animate>
                <div className={`text-7xl font-black text-slate-800 mb-8 group-hover:text-${service.accent} transition-colors`}>
                  {service.number}
                </div>
                <h3 className="text-2xl font-black mb-4">{service.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{service.desc}</p>
                <div className={`w-0 h-1 bg-${service.accent} group-hover:w-12 transition-all duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="relative py-32 px-4 border-t border-lime-400/20">
        <div className="container max-w-6xl mx-auto">
          <div className="mb-20" data-scroll-animate>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-yellow-400"></div>
              <span className="text-xs font-black text-yellow-400 tracking-widest">PORTFÓLIO</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black">
              Projetos
              <br />
              <span className="text-yellow-400">Recentes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Landing Page Tech", category: "Design Web" },
              { title: "E-commerce Premium", category: "Desenvolvimento" },
              { title: "Plataforma SaaS", category: "Full Stack" },
              { title: "Site Corporativo", category: "Design" }
            ].map((project, idx) => (
              <div key={idx} className="group relative p-8 border-2 border-dashed border-slate-700 hover:border-lime-400 transition-all cursor-pointer overflow-hidden" data-scroll-animate>
                <div className="absolute inset-0 bg-lime-400/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="text-xs font-black text-slate-500 mb-4 tracking-widest">{project.category}</div>
                  <h3 className="text-2xl font-black mb-4 group-hover:text-lime-400 transition-colors">{project.title}</h3>
                  <div className="flex items-center gap-2 text-slate-400 group-hover:text-lime-400 transition-colors">
                    <span className="font-bold">Ver Projeto</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-32 px-4 border-t border-lime-400/20">
        <div className="container max-w-4xl mx-auto">
          <div className="mb-20" data-scroll-animate>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-cyan-400"></div>
              <span className="text-xs font-black text-cyan-400 tracking-widest">PREÇOS</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black">
              Simples e
              <br />
              <span className="text-cyan-400">Transparente</span>
            </h2>
          </div>

          <div className="relative p-12 border-2 border-dashed border-cyan-400" data-scroll-animate>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 flex items-center justify-center">
              <span className="text-black font-black text-sm">$</span>
            </div>

            <h3 className="text-3xl font-black mb-4">Landing Page Profissional</h3>
            <p className="text-slate-400 mb-8">Tudo que você precisa para começar a vender</p>

            <div className="mb-10">
              <div className="text-5xl font-black">
                R$ <span className="text-cyan-400">80</span>
                <span className="text-xl text-slate-400 font-normal">/mês</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10">
              {[
                "Landing page responsiva e moderna",
                "Design personalizado",
                "Otimizado para SEO",
                "Certificado SSL",
                "Manutenção incluída",
                "Integração WhatsApp",
                "Performance otimizada"
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-lime-400"></div>
                  {feature}
                </li>
              ))}
            </ul>

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block w-full py-4 px-8 bg-lime-400 text-black font-black text-center hover:bg-yellow-400 transition-all">
              COMEÇAR AGORA
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="about" className="relative py-32 px-4 border-t border-lime-400/20">
        <div className="container max-w-6xl mx-auto">
          <div className="mb-20" data-scroll-animate>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-yellow-400"></div>
              <span className="text-xs font-black text-yellow-400 tracking-widest">PROCESSO</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black">
              Como
              <br />
              <span className="text-yellow-400">Funciona</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Conversa", desc: "Entendemos seus objetivos" },
              { step: "02", title: "Design", desc: "Criamos um design único" },
              { step: "03", title: "Desenvolvimento", desc: "Desenvolvemos sua página" },
              { step: "04", title: "Lançamento", desc: "Sua página gera leads" }
            ].map((item, idx) => (
              <div key={idx} className="relative group" data-scroll-animate>
                {/* Connection line */}
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-px bg-dashed border-t-2 border-dashed border-slate-700 group-hover:border-lime-400 transition-colors"></div>
                )}

                <div className="p-6 border-2 border-dashed border-slate-700 group-hover:border-lime-400 transition-all">
                  <div className="text-4xl font-black text-slate-800 mb-4">{item.step}</div>
                  <h3 className="font-black text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 px-4 border-t border-lime-400/20">
        <div className="container max-w-4xl mx-auto">
          <div className="relative p-16 border-2 border-dashed border-lime-400 bg-lime-400/5" data-scroll-animate>
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-lime-400"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-yellow-400"></div>

            <h2 className="text-5xl md:text-6xl font-black mb-8 text-center">
              Pronto para
              <br />
              <span className="text-lime-400">Começar?</span>
            </h2>
            <p className="text-center text-slate-300 text-lg mb-12 max-w-2xl mx-auto">
              Transforme seus visitantes em clientes com uma landing page que converte.
            </p>
            <div className="flex justify-center">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-12 py-4 bg-lime-400 text-black font-black hover:bg-yellow-400 transition-all flex items-center gap-2">
                VAMOS CONVERSAR
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-lime-400/20 py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-lime-400"></div>
                <span className="font-black text-lg">JBRASIL</span>
              </div>
              <p className="text-slate-400 text-sm">Landing pages que convertem.</p>
            </div>
            <div>
              <h4 className="font-black mb-4 text-lime-400 text-sm tracking-widest">SERVIÇOS</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#services" className="hover:text-lime-400 transition-colors">Design</a></li>
                <li><a href="#services" className="hover:text-lime-400 transition-colors">Desenvolvimento</a></li>
                <li><a href="#services" className="hover:text-lime-400 transition-colors">SEO</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-4 text-lime-400 text-sm tracking-widest">EMPRESA</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#about" className="hover:text-lime-400 transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-lime-400 transition-colors">Portfólio</a></li>
                <li><a href="#" className="hover:text-lime-400 transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-4 text-lime-400 text-sm tracking-widest">CONTATO</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-lime-400 transition-colors">WhatsApp</a></li>
                <li><a href="mailto:contato@jbrasillabs.com.br" className="hover:text-lime-400 transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-600 text-sm">
            <p>© 2026 JBrasil Labs. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
