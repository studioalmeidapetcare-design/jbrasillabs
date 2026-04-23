import { ArrowRight, Code2, Smartphone, Zap, Shield, MessageCircle, Sparkles, Rocket, Grid3x3, Cpu, Layers, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * JBrasil Labs - Futuristic & Functional Design
 * Design Philosophy: Cyberpunk + Minimalism with advanced animations
 * Color Scheme: Deep Navy (#0f0f1e) + Neon Cyan (#00f0ff) + Electric Purple (#b300ff)
 * Visual Elements: Glitch effects, floating particles, holographic cards, tech patterns
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const whatsappLink = "https://wa.me/message/UFGRJBVOAYWQN1";

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Advanced animated background with multiple layers */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        
        {/* Grid pattern background */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(0, 240, 255, 0.05) 25%, rgba(0, 240, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 240, 255, 0.05) 75%, rgba(0, 240, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 240, 255, 0.05) 25%, rgba(0, 240, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 240, 255, 0.05) 75%, rgba(0, 240, 255, 0.05) 76%, transparent 77%, transparent)",
          backgroundSize: "50px 50px"
        }}></div>

        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" style={{ filter: "drop-shadow(0 0 20px rgba(0, 240, 255, 0.3))" }}>
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 240, 255, 0.1)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Navigation - Enhanced */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-xl border-b border-cyan-500/20" : "bg-transparent"}`}>
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-purple-500 to-cyan-400 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Cpu className="w-6 h-6 text-black relative z-10" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">JBrasil Labs</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-cyan-400 transition-colors relative group">
              Serviços
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-cyan-400 transition-colors relative group">
              Preços
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#about" className="text-sm font-medium hover:text-cyan-400 transition-colors relative group">
              Sobre
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 px-6 py-2.5 rounded-lg text-sm font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105 relative overflow-hidden group">
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <MessageCircle className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Contato</span>
          </a>
        </div>
      </nav>

      {/* Hero Section - Futuristic */}
      <section className="relative pt-32 pb-20 px-4 min-h-screen flex items-center justify-center">
        <div className="container max-w-5xl mx-auto text-center relative z-10">
          {/* Animated badge */}
          <div className="inline-block mb-8 px-4 py-2 bg-cyan-500/10 border border-cyan-500/50 rounded-full backdrop-blur-sm hover:border-cyan-400 transition-all group cursor-pointer">
            <span className="text-sm font-semibold text-cyan-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4 animate-spin" />
              Transforme sua presença digital
            </span>
          </div>

          {/* Main heading with glitch effect */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight relative">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Landing Pages
            </span>
            <br />
            <span className="text-white">Futuristas</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              a partir de R$ 80/mês
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Páginas de alta performance, otimizadas para conversão. Tecnologia de ponta com design que vende.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Rocket className="w-5 h-5 relative z-10 group-hover:animate-bounce" />
              <span className="relative z-10">Começar Agora</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
            </a>
            <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-lg border-2 border-cyan-500/50 hover:border-cyan-400 transition-all">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
              <Grid3x3 className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Ver Portfólio</span>
            </button>
          </div>

          {/* Floating stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
            {[
              { number: "500+", label: "Projetos" },
              { number: "98%", label: "Satisfação" },
              { number: "24/7", label: "Suporte" }
            ].map((stat, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-white/5 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/50 transition-all group cursor-pointer">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 group-hover:text-purple-400 transition-colors">{stat.number}</div>
                <div className="text-xs md:text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero visual element */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1/2 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent"></div>
        </div>
      </section>

      {/* Services Section - Grid with hover effects */}
      <section id="services" className="relative py-32 px-4">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Recursos Avançados
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">Tudo que você precisa para dominar o mercado digital</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Code2, title: "Design Futurista", desc: "Interface de próxima geração que impressiona", color: "from-cyan-500 to-blue-500" },
              { icon: Smartphone, title: "100% Responsivo", desc: "Perfeito em qualquer dispositivo", color: "from-purple-500 to-pink-500" },
              { icon: Zap, title: "Ultra Rápido", desc: "Velocidade de carregamento extrema", color: "from-cyan-400 to-purple-400" },
              { icon: Shield, title: "Segurança Total", desc: "SSL e proteção contra ataques", color: "from-green-500 to-emerald-500" },
              { icon: Layers, title: "SEO Avançado", desc: "Otimizado para dominar o Google", color: "from-orange-500 to-red-500" },
              { icon: Cpu, title: "IA Integrada", desc: "Análise inteligente de conversão", color: "from-violet-500 to-purple-500" },
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <div 
                  key={idx} 
                  className="group relative p-8 rounded-xl bg-white/5 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden cursor-pointer hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors">{service.desc}</p>

                  {/* Hover indicator */}
                  <div className="absolute top-0 right-0 w-1 h-0 bg-gradient-to-b from-cyan-500 to-purple-500 group-hover:h-full transition-all duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section - Holographic style */}
      <section id="pricing" className="relative py-32 px-4">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Preço Transparente
              </span>
            </h2>
            <p className="text-xl text-slate-400">A partir de R$ 80/mês. Sem taxas escondidas.</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              
              {/* Card */}
              <div className="relative p-12 rounded-2xl bg-black border-2 border-cyan-500/30 group-hover:border-cyan-500/60 transition-all backdrop-blur-xl">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

                <h3 className="text-3xl font-black mb-2 text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">Landing Page Profissional</h3>
                <p className="text-slate-400 mb-8">Perfeita para captar leads e converter visitantes</p>
                
                <div className="mb-10">
                  <div className="text-6xl font-black mb-2">
                    <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">A partir de</span>
                  </div>
                  <div className="text-7xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">R$ 80</div>
                  <div className="text-slate-400 text-lg mt-2">/mês</div>
                </div>

                <ul className="space-y-4 mb-10">
                  {[
                    "Landing page responsiva e moderna",
                    "Design personalizado para sua marca",
                    "Otimizado para SEO",
                    "Certificado SSL",
                    "Atualizações e manutenção",
                    "Formulário de contato integrado",
                    "Integração com WhatsApp",
                    "Performance otimizada"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-4 group/item">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-purple-400 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                        <CheckCircle2 className="w-4 h-4 text-black" />
                      </div>
                      <span className="text-slate-300 group-hover/item:text-cyan-400 transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full group/btn relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-100 group-hover/btn:opacity-0 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Solicitar Orçamento</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Timeline */}
      <section id="about" className="relative py-32 px-4">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Como Funciona
              </span>
            </h2>
            <p className="text-xl text-slate-400">Processo simples e rápido</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Conversa", desc: "Entendemos seus objetivos", icon: MessageCircle },
              { step: "02", title: "Design", desc: "Criamos um design futurista", icon: Sparkles },
              { step: "03", title: "Desenvolvimento", desc: "Construímos sua landing page", icon: Code2 },
              { step: "04", title: "Lançamento", desc: "Sua página gera leads", icon: Rocket }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="group relative">
                  {/* Connection line */}
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 transform -translate-y-1/2"></div>
                  )}

                  {/* Card */}
                  <div className="p-6 rounded-xl bg-white/5 border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-2">{item.step}</div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            
            {/* Card */}
            <div className="relative p-16 rounded-2xl bg-black border-2 border-cyan-500/30 group-hover:border-cyan-500/60 transition-all text-center">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

              <h2 className="text-5xl md:text-6xl font-black mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Pronto para Dominar?
                </span>
              </h2>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                Transforme seus visitantes em clientes com uma landing page que converte.
              </p>
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/btn relative inline-flex items-center justify-center gap-3 px-10 py-5 text-xl font-bold rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-100 group-hover/btn:opacity-0 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                <Rocket className="w-6 h-6 relative z-10 group-hover/btn:animate-bounce" />
                <span className="relative z-10">Fale com a gente no WhatsApp</span>
                <ArrowRight className="w-6 h-6 relative z-10 group-hover/btn:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-cyan-500/20 py-12 px-4">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="w-5 h-5 text-cyan-400" />
                <span className="font-bold text-lg">JBrasil Labs</span>
              </div>
              <p className="text-slate-400 text-sm">Transformando ideias em landing pages que vendem.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-cyan-400">Serviços</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Web Design</a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Desenvolvimento</a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">SEO</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-cyan-400">Empresa</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#about" className="hover:text-cyan-400 transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Portfólio</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-cyan-400">Contato</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">WhatsApp</a></li>
                <li><a href="mailto:contato@jbrasillabs.com.br" className="hover:text-cyan-400 transition-colors">Email</a></li>
                <li>Vale do Itajaí - SC</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-cyan-500/10 pt-8 text-center text-slate-500 text-sm">
            <p>© 2026 JBrasil Labs. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
