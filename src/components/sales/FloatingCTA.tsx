import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FloatingCTAProps {
  ctaText?: string;
  onClick?: () => void;
}

const FloatingCTA: React.FC<FloatingCTAProps> = ({
  ctaText = "Comprar Agora - R$9,90",
  onClick = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  },
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      if (window.scrollY > 500 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4"
        >
          <div className="bg-black rounded-full shadow-2xl flex items-center justify-between p-2 pr-6 border-2 border-blue-600 max-w-md w-full">
            <Button
              onClick={onClick}
              className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-3 px-6 rounded-full transition-all duration-300 flex-grow shadow-lg"
            >
              {ctaText} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <button
              onClick={() => setIsDismissed(true)}
              className="ml-2 text-white hover:text-blue-200 focus:outline-none"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
