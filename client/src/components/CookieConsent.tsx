import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consentGiven = localStorage.getItem('cookieConsent');
    if (!consentGiven) {
      // Show popup after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setHasConsented(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);
    setHasConsented(true);
    
    // Enable Google Analytics after consent
    if ((window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);
  };

  if (!isVisible || hasConsented) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 md:p-6">
      <div className="max-w-2xl mx-auto bg-black/95 border border-green-400/50 rounded-lg backdrop-blur-lg shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-lg font-bold text-white">Política de Cookies e LGPD</h3>
            <button
              onClick={handleReject}
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="mb-6 space-y-3 text-sm text-gray-300">
            <p>
              Utilizamos cookies e tecnologias similares para melhorar sua experiência em nosso site, personalizar conteúdo e anúncios, e analisar nosso tráfego.
            </p>
            <p>
              <strong className="text-green-400">Conformidade LGPD:</strong> Respeitamos a Lei Geral de Proteção de Dados (LGPD). Seus dados pessoais são tratados com segurança e confidencialidade. Você pode a qualquer momento revogar seu consentimento.
            </p>
            <p className="text-xs text-gray-400">
              Para mais informações, consulte nossa{' '}
              <a
                href="#privacy"
                className="text-green-400 hover:text-green-300 underline transition-colors"
              >
                Política de Privacidade
              </a>
              .
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <button
              onClick={handleReject}
              className="px-4 py-2 text-sm font-medium text-gray-300 border border-gray-500 rounded hover:border-gray-400 hover:text-white transition-colors"
            >
              Rejeitar
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm font-medium text-black bg-gradient-to-r from-green-400 to-cyan-400 rounded hover:from-green-500 hover:to-cyan-500 transition-all font-bold"
            >
              Aceitar Cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
