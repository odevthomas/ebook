import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";

interface StickyBuyBarProps {
  price?: string;
  originalPrice?: string;
  ctaText?: string;
  onClick?: () => void;
}

const StickyBuyBar: React.FC<StickyBuyBarProps> = ({
  price = "R$9,90",
  originalPrice = "R$49,90",
  ctaText = "Comprar Agora",
  onClick = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  },
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-10 left-0 right-0 z-40 bg-black shadow-xl py-3 border-b-2 border-blue-600"
    >
      <div className="container mx-auto px-4 flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=100&q=80"
              alt="E-book"
              className="h-12 w-10 object-cover rounded"
              style={{
                filter: "drop-shadow(0 4px 6px rgba(59, 130, 246, 0.3))",
              }}
            />
          </div>
          <div>
            <h3 className="font-bold text-white text-sm md:text-base">
              From Zero to First Programming Job
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-sm line-through text-blue-300">
                {originalPrice}
              </span>
              <span className="font-bold text-blue-400 text-lg">{price}</span>
              <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-md font-bold">
                80% OFF
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto justify-between">
          <div className="flex items-center gap-1 text-sm text-white">
            <Clock className="h-4 w-4 text-red-500" />
            <span>Oferta expira em breve</span>
          </div>

          <Button
            onClick={onClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg"
          >
            {ctaText} <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default StickyBuyBar;
