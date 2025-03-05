import React from "react";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";

interface DiscountBannerProps {
  discount?: string;
  message?: string;
  countdownTime?: string;
  onClick?: () => void;
}

const DiscountBanner: React.FC<DiscountBannerProps> = ({
  discount = "80%",
  message = "Oferta por tempo limitado!",
  countdownTime = "23:59:59",
  onClick = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  },
}) => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-blue-800 text-white py-3 px-4 flex items-center justify-center cursor-pointer shadow-lg"
      onClick={onClick}
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2">
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="font-extrabold text-lg sm:text-xl bg-white text-blue-800 px-3 py-1 rounded-lg"
          >
            {discount} OFF
          </motion.div>
          <span className="hidden sm:inline">|</span>
          <span className="font-medium">{message}</span>
        </div>

        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span className="font-mono">{countdownTime}</span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <ArrowRight className="h-4 w-4" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default DiscountBanner;
