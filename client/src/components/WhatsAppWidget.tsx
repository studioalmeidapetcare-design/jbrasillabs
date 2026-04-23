import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { useAnalytics } from '@/hooks/useAnalytics';

interface WhatsAppWidgetProps {
  phoneNumber: string;
  message?: string;
}

export default function WhatsAppWidget({ phoneNumber, message = "Olá! Como posso ajudar?" }: WhatsAppWidgetProps) {
  const { trackConversions } = useAnalytics();
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      trackConversions.whatsappMessage(inputMessage);
      const encodedMessage = encodeURIComponent(inputMessage);
      window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
      setInputMessage('');
      setIsOpen(false);
    }
  };

  const handleQuickMessage = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-black border border-green-400/50 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl animate-fade-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-400 to-cyan-400 p-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-black text-lg">JBrasil Labs</h3>
              <p className="text-black text-xs opacity-80">Responderemos em breve</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-black hover:opacity-70 transition-opacity"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 h-64 overflow-y-auto flex flex-col gap-3">
            <div className="flex justify-start">
              <div className="bg-green-400/20 border border-green-400/50 rounded-lg p-3 max-w-xs">
                <p className="text-sm text-gray-200">
                  Olá! 👋 Bem-vindo à JBrasil Labs. Como posso ajudar você hoje?
                </p>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-green-400/20 p-3 bg-black/50">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua mensagem..."
                className="flex-1 bg-gray-900/50 border border-green-400/30 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-green-400 transition-colors"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="bg-green-400 hover:bg-green-500 disabled:bg-gray-600 text-black p-2 rounded-lg transition-colors disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => {
          trackConversions.whatsappOpen();
          setIsOpen(!isOpen);
        }}
        className="group relative w-16 h-16 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-opacity"></div>
        
        {isOpen ? (
          <X className="w-6 h-6 text-black relative z-10" />
        ) : (
          <>
            <MessageCircle className="w-6 h-6 text-black relative z-10" />
            {/* Pulse animation */}
            <div className="absolute inset-0 bg-green-400 rounded-full animate-pulse opacity-30"></div>
          </>
        )}
      </button>

      {/* Tooltip */}
      {!isOpen && (
        <div className="absolute bottom-20 right-0 bg-black border border-green-400/50 rounded-lg px-3 py-2 text-xs text-green-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Fale conosco!
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
