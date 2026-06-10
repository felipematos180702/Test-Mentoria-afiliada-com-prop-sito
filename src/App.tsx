import React, { useState, useEffect } from "react";
import { Menu, X, Instagram, BookOpen, User, Award, HelpCircle, MessageSquare, ShieldCheck, Heart } from "lucide-react";

// Components
import Hero from "./components/Hero";
import About from "./components/About";
import ModulesCarousel from "./components/ModulesCarousel";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import FAQAccordion from "./components/FAQAccordion";
import CheckoutSection from "./components/CheckoutSection";
import NotificationToast from "./components/NotificationToast";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scrolled header effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSegment = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollDirectToCheckout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const checkoutElem = document.getElementById("checkout");
    if (checkoutElem) {
      checkoutElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-earth-950 min-h-screen text-zinc-100 flex flex-col selection:bg-gold-500 selection:text-earth-950">
      
      {/* Dynamic Header Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-earth-950/90 border-b border-gold-400/15 p-4 sm:p-3 backdrop-blur-md shadow-2xl"
            : "bg-transparent p-5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 group-semibold cursor-pointer"
          >
            <div>
              <span className="font-display font-black text-[#F5EBE6] group-hover:text-gold-300 transition-colors text-sm sm:text-base tracking-tight block leading-none">
                MENTORIA AP
              </span>
              <span className="text-[9px] uppercase tracking-widest text-gold-400 font-bold block mt-0.5">
                Afiliada com Propósito
              </span>
            </div>
          </a>

          {/* Navigation Links - Desktop Only */}
          <nav className="hidden md:flex items-center gap-7">
            {[
              { label: "A Mentora", id: "mentora" },
              { label: "Módulos", id: "modulos" },
              { label: "Pilares", id: "beneficios" },
              { label: "Resultados", id: "depoimentos" },
              { label: "Dúvidas", id: "faq" },
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleScrollToSegment(e, link.id)}
                className="text-xs lg:text-sm text-zinc-300 hover:text-gold-300 font-medium transition-colors relative py-1 focus:outline-none focus-visible:text-gold-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden md:block">
            <button
              onClick={handleScrollDirectToCheckout}
              className="px-5 py-2.5 text-xs font-black font-display btn-premium-gold hover-glow-gold rounded-lg shadow-xl cursor-pointer"
            >
              GARANTIR MINHA VAGA
            </button>
          </div>

          {/* Mobile Burger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 border border-gold-400/20 rounded-lg text-gold-400 bg-earth-900/30 hover:border-gold-400/40 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-earth-950/98 backdrop-blur-lg flex flex-col justify-center items-center p-6 md:hidden">
          {/* Close button in absolute corner */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-1.5 border border-gold-400/20 rounded-lg text-gold-400"
          >
            <X className="h-6 w-6" />
          </button>

          <nav className="flex flex-col gap-6 text-center mb-8">
            {[
              { label: "A Mentora", id: "mentora" },
              { label: "Módulos", id: "modulos" },
              { label: "Pilares", id: "beneficios" },
              { label: "Resultados", id: "depoimentos" },
              { label: "Perguntas", id: "faq" },
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleScrollToSegment(e, link.id)}
                className="text-lg text-zinc-100 hover:text-gold-300 font-extrabold font-display transition-colors"
                role="menuitem"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            onClick={handleScrollDirectToCheckout}
            className="w-full max-w-xs py-3.5 px-6 btn-premium-gold hover-glow-gold text-sm font-black font-display uppercase rounded-xl shadow-2xl"
          >
            Fazer Minha Inscrição
          </button>
        </div>
      )}

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* HERO SECTION */}
        <Hero />

        {/* TRUST TRANSITION BAR (Marketplaces logos & integrations) */}
        <div className="py-8 bg-earth-950 border-y border-gold-400/10 overflow-hidden relative w-full">
          <div className="absolute inset-0 bg-gold-400/[0.01] pointer-events-none" />
          
          {/* Elegant fade masks on left and right for extreme premium layout feel */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-earth-950 via-earth-950/70 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-earth-950 via-earth-950/70 to-transparent z-10 pointer-events-none" />

          <div className="flex w-full overflow-hidden">
            <div className="animate-marquee flex items-center gap-8 sm:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 text-[10px] sm:text-xs font-semibold tracking-widest text-zinc-400 whitespace-nowrap">
              {/* List 1 */}
              <span className="hover:text-gold-400 transition-colors cursor-default">SHOPEE AFILIADOS</span>
              <span className="text-gold-400/20 font-light">•</span>
              <span className="hover:text-gold-400 transition-colors cursor-default">MERCADO LIVRE (MELI)</span>
              <span className="text-gold-400/20 font-light">•</span>
              <span className="hover:text-gold-400 transition-colors cursor-default">TIKTOK SHOP PARTNER</span>
              <span className="text-gold-400/20 font-light">•</span>
              <span className="hover:text-gold-400 transition-colors cursor-default">MAGALU AFILIADOS</span>
              <span className="text-gold-400/20 font-light">•</span>
              <span className="hover:text-gold-400 transition-colors cursor-default">AMAZON ASSOCIADOS</span>
              <span className="text-gold-400/20 font-light">•</span>
              <span className="hover:text-gold-400 transition-colors cursor-default">SHEIN COLLAB</span>
              <span className="text-gold-400/20 font-light">•</span>
              <span className="hover:text-gold-400 transition-colors cursor-default">KIWIFY APPROVED</span>
              <span className="text-gold-400/20 font-light">•</span>

              {/* Duplicate List 2 for seamless infinite loop */}
              <span className="hover:text-gold-400 transition-colors cursor-default">SHOPEE AFILIADOS</span>
              <span className="text-gold-400/20 font-light">•</span>
              <span className="hover:text-gold-400 transition-colors cursor-default">MERCADO LIVRE (MELI)</span>
              <span className="text-gold-400/20 font-light">•</span>
              <span className="hover:text-gold-400 transition-colors cursor-default">TIKTOK SHOP PARTNER</span>
              <span className="text-gold-400/20 font-light">•</span>
              <span className="hover:text-gold-400 transition-colors cursor-default">MAGALU AFILIADOS</span>
              <span className="text-gold-400/20 font-light">•</span>
              <span className="hover:text-gold-400 transition-colors cursor-default">AMAZON ASSOCIADOS</span>
              <span className="text-gold-400/20 font-light">•</span>
              <span className="hover:text-gold-400 transition-colors cursor-default">SHEIN COLLAB</span>
              <span className="text-gold-400/20 font-light">•</span>
              <span className="hover:text-gold-400 transition-colors cursor-default">KIWIFY APPROVED</span>
              <span className="text-gold-400/20 font-light">•</span>
            </div>
          </div>
        </div>

        {/* ISABELLY MARIANO BIO SECTION */}
        <About />

        {/* EXCLUSIVO CURSO MODULES CAROUSEL */}
        <ModulesCarousel />

        {/* 5 CORE BENEFITS PILARES */}
        <Benefits />

        {/* DEPOIMENTOS DE ALUNOS */}
        <Testimonials />

        {/* ACCORDION FAQ Segment */}
        <FAQAccordion />

        {/* HIGH-CONVERTING CHECKOUT SECTION */}
        <CheckoutSection />

      </main>

      {/* CORE FOOTER */}
      <footer className="bg-earth-950 border-t border-gold-400/10 py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-gold-400/5">
            
            <div className="space-y-2">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h3 className="font-display font-black text-[#F5EBE6] text-sm tracking-wide">
                  Mentoria Afiliada com Propósito
                </h3>
              </div>
              <p className="text-zinc-500 text-[11px]">
                Direcionamento, estratégia e suporte que você precisa para destravar no digital
              </p>
            </div>

            {/* Styled Instagram minimal button */}
            <a
              href="https://instagram.com/isabellymarianoaf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gold-400/15 rounded-xl text-xs text-gold-300 bg-earth-900/20 hover:bg-gold-400/10 hover:border-gold-400/30 transition-all font-medium"
            >
              <Instagram className="h-4 w-4" />
              <span>@isabellymarianoaf</span>
            </a>

          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-[11px] text-zinc-500">
            <p className="text-center sm:text-left">
              &copy; {new Date().getFullYear()} Mentoria Afiliada com Propósito • Isabelly Mariano. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-gold-400 transition-colors">Termos de Uso</a>
              <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-gold-400 transition-colors">Políticas de Privacidade</a>
            </div>
          </div>
        </div>
      </footer>

      {/* REAL-TIME NOTIFICATION SOCIAL PROOF TOAST */}
      <NotificationToast />

    </div>
  );
}
