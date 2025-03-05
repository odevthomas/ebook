import React from "react";
import HeroSection from "./sales/HeroSection";
import PainPointsSection from "./sales/PainPointsSection";
import SolutionSection from "./sales/SolutionSection";
import BenefitsSection from "./sales/BenefitsSection";
import BonusesSection from "./sales/BonusesSection";
import PricingSection from "./sales/PricingSection";
import TestimonialsSection from "./sales/TestimonialsSection";
import FinalCTASection from "./sales/FinalCTASection";
import DiscountBanner from "./sales/DiscountBanner";
import FloatingCTA from "./sales/FloatingCTA";
import StickyBuyBar from "./sales/StickyBuyBar";
import ChatbotSupport from "./sales/ChatbotSupport";
import InlineCTA from "./sales/InlineCTA";
import PlatformLogos from "./sales/PlatformLogos";
import MobileTestimonials from "./sales/MobileTestimonials";
import RecentPurchases from "./sales/RecentPurchases";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-10 relative overflow-hidden">
      {/* Background light effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-96 h-96 rounded-full bg-blue-600/20 blur-[100px] animate-pulse"></div>
        <div
          className="absolute bottom-[20%] right-[15%] w-80 h-80 rounded-full bg-indigo-600/20 blur-[100px] animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-[40%] right-[30%] w-64 h-64 rounded-full bg-purple-600/20 blur-[100px] animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>
      {/* Discount Banner */}
      <DiscountBanner />

      {/* Sticky Buy Bar */}
      <StickyBuyBar />

      {/* Hero Section */}
      <HeroSection />

      {/* Pain Points Section */}
      <PainPointsSection />

      {/* Inline CTA 1 */}
      <div className="container mx-auto px-4">
        <InlineCTA
          title="Pronto para superar esses desafios?"
          subtitle="Nosso e-book oferece soluções práticas para todos esses problemas comuns."
          ctaText="Ver a Solução"
          variant="accent"
          onClick={() => {
            const solutionSection = document.getElementById("solution");
            if (solutionSection) {
              solutionSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        />
      </div>

      {/* Solution Section */}
      <div id="solution">
        <SolutionSection />
      </div>

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Inline CTA 2 */}
      <div className="container mx-auto px-4">
        <InlineCTA
          title="Gostou dos benefícios?"
          subtitle="Aproveite agora e garanta todos esses benefícios com 80% de desconto!"
          ctaText="Garantir Minha Cópia"
          variant="primary"
        />
      </div>

      {/* Bonuses Section */}
      <BonusesSection />

      {/* Pricing Section */}
      <div id="pricing">
        <PricingSection />
      </div>

      {/* Platform Logos */}
      <PlatformLogos />

      {/* Mobile Testimonials */}
      <MobileTestimonials />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Inline CTA 3 */}
      <div className="container mx-auto px-4">
        <InlineCTA
          title="Junte-se a centenas de desenvolvedores de sucesso!"
          subtitle="Não perca mais tempo - comece sua jornada na programação hoje mesmo."
          ctaText="Quero Começar Agora"
          variant="secondary"
        />
      </div>

      {/* Final CTA Section */}
      <FinalCTASection />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 text-center text-sm border-t border-gray-800">
        <div className="container mx-auto px-4">
          <p className="mb-4">
            © {new Date().getFullYear()} From Zero to First Programming Job.
            All rights reserved.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </footer>

      {/* Floating CTA Button */}
      <FloatingCTA />

      {/* Chatbot Support */}
      <ChatbotSupport />

      {/* Recent Purchases */}
      <RecentPurchases />
    </div>
  );
};

export default Home;
