import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ShoppingBag } from "lucide-react";

interface SaleNotification {
  name: string;
  location: string;
  timeAgo: string;
}

const SHuffled_SALES: SaleNotification[] = [
  { name: "Juliana Santos", location: "São Paulo - SP", timeAgo: "há 2 minutos" },
  { name: "Marcos Oliveira", location: "Belo Horizonte - MG", timeAgo: "há 5 minutos" },
  { name: "Vitória Souza", location: "Recife - PE", timeAgo: "há 1 minuto" },
  { name: "Carolina Lima", location: "Porto Alegre - RS", timeAgo: "há 3 minutos" },
  { name: "Gabriel Costa", location: "Brasília - DF", timeAgo: "há 4 minutos" },
  { name: "Letícia Ribeiro", location: "Manaus - AM", timeAgo: "há 6 minutos" },
  { name: "Rodrigo Almeida", location: "Campinas - SP", timeAgo: "há 30 segundos" },
  { name: "Rafaela Mendes", location: "Florianópolis - SC", timeAgo: "há 1 minuto" }
];

export default function NotificationToast() {
  const [currentNotification, setCurrentNotification] = useState<SaleNotification | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Show toast after 4 seconds
    const initialTimeout = setTimeout(() => {
      setCurrentNotification(SHuffled_SALES[0]);
    }, 4000);

    // Loop through notifications
    const interval = setInterval(() => {
      setCurrentNotification(null); // Hide first to trigger animation
      
      setTimeout(() => {
        setIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % SHuffled_SALES.length;
          setCurrentNotification(SHuffled_SALES[nextIndex]);
          return nextIndex;
        });
      }, 500); // Wait for exit animation to complete

    }, 12000); // Show a new one every 12 seconds

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-50 pointer-events-none max-w-xs sm:max-w-sm">
      <AnimatePresence>
        {currentNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="flex items-center gap-3 bg-earth-950/95 border border-gold-400/30 backdrop-blur-md p-3 rounded-xl shadow-2xl pointer-events-auto"
          >
            <div className="flex-shrink-0 h-10 w-10 bg-gradient-to-tr from-gold-500 to-gold-300 rounded-lg flex items-center justify-center text-earth-950 shadow-inner">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-white truncate">
                {currentNotification.name}
              </p>
              <p className="text-[10px] text-zinc-300 truncate">
                Adquiriu a Mentoria AP • {currentNotification.location}
              </p>
              <div className="flex items-center gap-1 mt-0.5">
                <Sparkles className="h-3 w-3 text-gold-400 animate-pulse" />
                <span className="text-[9px] text-gold-400 font-medium">Vaga garantida {currentNotification.timeAgo}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
