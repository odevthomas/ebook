import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "From Zero to First Programming Job",
  subtitle = "Learn to code and land your dream job in tech within a year - even if you're starting from scratch. Practical strategies and insider knowledge that actually works.",
  ctaText = "Get Started Now",
  onCtaClick = () => console.log("CTA clicked"),
  backgroundImage = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
}) => {
  return (
    <section className="relative w-full h-[700px] bg-black overflow-hidden">
      {/* Background light effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-5">
        <div className="absolute top-[10%] left-[10%] w-96 h-96 rounded-full bg-blue-600/20 blur-[100px] animate-pulse"></div>
        <div
          className="absolute bottom-[20%] right-[15%] w-80 h-80 rounded-full bg-indigo-600/20 blur-[100px] animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
      {/* Background image with overlay */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-black/80" />

      {/* Content container */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col md:flex-row justify-center items-center md:items-start max-w-6xl gap-8">
        {/* Left content */}
        <div className="flex flex-col justify-center items-start max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center px-4 py-2 rounded-full bg-blue-600 text-white border border-blue-500 text-sm font-bold shadow-lg"
          >
            <motion.span
              animate={{ rotate: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              className="mr-1"
            >
              🚀
            </motion.span>
            Limited Time Offer
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={onCtaClick}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-4 px-10 rounded-xl text-lg transition-all shadow-xl"
              >
                {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-gray-300 text-sm font-medium"
            >
              <span className="font-bold text-white bg-blue-600 rounded-full w-5 h-5 inline-flex items-center justify-center mr-1">
                ✓
              </span>{" "}
              Risk-free 30-day money-back guarantee
            </motion.p>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 flex items-center"
          >
            <div className="flex -space-x-2 mr-4">
              {[1, 2, 3, 4].map((i) => (
                <motion.img
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=person${i}`}
                  alt="User avatar"
                  className="w-8 h-8 rounded-full border-2 border-slate-800"
                />
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="text-gray-300 text-sm font-medium"
            >
              <span className="font-bold">500+</span> developers have already
              transformed their careers
            </motion.p>
          </motion.div>
        </div>

        {/* Right content - E-book mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden md:block relative"
        >
          <div className="relative">
            {/* Book cover with shadow and glow effect */}
            <div className="relative w-[300px] h-[400px] transform rotate-3 hover:rotate-0 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80"
                alt="E-book Cover"
                className="w-full h-full object-cover rounded-lg"
                style={{
                  filter: "drop-shadow(0 25px 25px rgba(59, 130, 246, 0.5))",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
                  From Zero to First Programming Job
                </h3>
                <p className="text-sm text-blue-100 drop-shadow-lg">
                  The complete roadmap to landing your dream tech job
                </p>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-blue-600 text-white font-extrabold py-3 px-6 rounded-full shadow-xl border-2 border-blue-800"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              80% OFF
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-blue-600 p-4 rounded-full shadow-2xl border-2 border-blue-800"
              animate={{ rotate: [0, 10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <BookOpen className="h-8 w-8 text-white" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
