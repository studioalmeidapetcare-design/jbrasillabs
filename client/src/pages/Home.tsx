import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Smartphone, Zap, Shield, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * JBrasil Labs - Modern Dark Mode Website
 * Design Philosophy: Glassmorphism + Minimalism with smooth animations
 * Color Scheme: Deep Navy (#0f0f1e) + Cyan (#06b6d4) + Purple (#7c3aed)
 * Typography: Clean, modern, professional
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/message/UFGRJBVOAYWQN1";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-slate-900/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"}`}>
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-slate-900" />
            </div>
            <span className="font-bold text-lg">JBrasil Labs</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm hover:text-cyan-400 transition-colors">Serviços</a>
            <a href="#pricing" className="text-sm hover:text-cyan-400 transition-colors">Preços</a>
            <a href="#about" className="text-sm hover:text-cyan-400 transition-colors">Sobre</a>
          </div>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
            <MessageCircle className="w-4 h-4" />
            Contato
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="container max-w-4xl mx-auto text-center animate-fadeInUp">
          <div className="inline-block mb-6 px-4 py-2 bg-white/5 border border-cyan-500/30 rounded-full">
            <span className="text-sm text-cyan-400">🚀 Transforme sua presença digital</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Sua landing page profissional a partir de <span className="gradient-text">R$ 80/mês</span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Landing pages modernas, rápidas e otimizadas para conversão. Sem taxas escondidas, sem surpresas. Apenas qualidade e profissionalismo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105">
              Começar Agora <ArrowRight className="w-5 h-5" />
            </a>
            <button className="inline-flex items-center justify-center gap-2 border border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/5 transition-all">
              Ver Portfólio
            </button>
          </div>

          {/* Hero Image */}
          <div className="relative mt-12 rounded-2xl overflow-hidden glass animate-slideInLeft" style={{ animationDelay: "0.2s" }}>
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663592718664/78X7KokukcPL2cgDYSVZao/hero-abstract-tech-MjULLNyLs7aatp4cmdp9tL.webp" 
              alt="Hero" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 px-4">
        <div className="container">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold mb-4">Recursos da Landing Page</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Tudo que você precisa para captar leads e converter visitantes em clientes</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Code2, title: "Design Atrativo", desc: "Visual profissional que captura atenção e gera confiança" },
              { icon: Smartphone, title: "100% Responsivo", desc: "Perfeito em celulares, tablets e desktops" },
              { icon: Zap, title: "Ultra Rápido", desc: "Carregamento otimizado para melhor experiência" },
              { icon: Shield, title: "Seguro", desc: "Certificado SSL e proteção completa" },
              { icon: Code2, title: "SEO Otimizado", desc: "Pronto para aparecer no Google" },
              { icon: MessageCircle, title: "Conversão Focada", desc: "CTAs estratégicos para maximizar leads" },
            ].map((service, idx) => (
              <div 
                key={idx} 
                className="glass p-6 hover:bg-white/15 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 cursor-pointer group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all">
                  <service.icon className="w-6 h-6 text-slate-900" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-20 px-4">
        <div className="container">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold mb-4">Preço Simples e Transparente</h2>
            <p className="text-slate-400">A partir de R$ 80/mês. Sem taxas escondidas, sem surpresas.</p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="glass p-8 border-2 border-cyan-500/50 hover:border-cyan-500 transition-all">
              <h3 className="text-2xl font-bold mb-2">Landing Page Profissional</h3>
              <p className="text-slate-400 mb-6">Perfeita para captar leads e converter visitantes em clientes</p>
              
              <div className="mb-8">
                <span className="text-5xl font-bold gradient-text">A partir de</span>
                <div className="text-5xl font-bold gradient-text mt-2">R$ 80</div>
                <span className="text-slate-400">/mês</span>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Landing page responsiva e moderna",
                  "Design personalizado para sua marca",
                  "Otimizado para SEO",
                  "Certificado SSL",
                  "Atualizações e manutenção",
                  "Formulário de contato integrado",
                  "Integração com WhatsApp",
                  "Performance otimizada",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400 to-purple-400 flex items-center justify-center flex-shrink-0">
                      <span className="text-slate-900 font-bold text-xs">✓</span>
                    </div>
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105 text-center block"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>

          {/* Pricing Visual */}
          <div className="mt-16 rounded-2xl overflow-hidden glass animate-float" style={{ animationDelay: "0.5s" }}>
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663592718664/78X7KokukcPL2cgDYSVZao/pricing-card-visual-bySFTyipPHy4Mhhm7J6q49.webp" 
              alt="Pricing" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="about" className="relative py-20 px-4">
        <div className="container">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold mb-4">Como Funciona</h2>
            <p className="text-slate-400">Processo simples e rápido para sua landing page estar online</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Conversa", desc: "Entendemos seus objetivos e público-alvo" },
              { step: "02", title: "Design", desc: "Criamos um design focado em conversão" },
              { step: "03", title: "Desenvolvimento", desc: "Construímos sua landing page otimizada" },
              { step: "04", title: "Lançamento", desc: "Sua página fica online e gerando leads" },
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="glass p-6 text-center hover:bg-white/15 transition-all"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-3xl font-bold gradient-text mb-3">{item.step}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="container max-w-3xl mx-auto">
          <div className="glass p-12 text-center border-2 border-cyan-500/50 hover:border-cyan-500 transition-all">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para captar mais leads?</h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Entre em contato conosco agora e receba uma proposta personalizada para sua landing page.
            </p>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Fale com a gente no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12 px-4">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-slate-900" />
                </div>
                <span className="font-bold">JBrasil Labs</span>
              </div>
              <p className="text-slate-400 text-sm">Transformando ideias em sites incríveis</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Web Design</a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Desenvolvimento</a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">SEO</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#about" className="hover:text-cyan-400 transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Portfólio</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">WhatsApp</a></li>
                <li><a href="mailto:jonas.brasil@jbrasillabs.com.br" className="hover:text-cyan-400 transition-colors">Email</a></li>
                <li><span>Vale do Itajaí - SC</span></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-slate-400 text-sm">
            <p>© 2026 JBrasil Labs. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all animate-float z-40"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}
