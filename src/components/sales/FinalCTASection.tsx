import React, { useState } from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import PaymentOptions from "./PaymentOptions";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

interface FinalCTASectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  backgroundColor?: string;
}

const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  title = "Ready to Start Your Programming Journey?",
  subtitle = "Don't miss this opportunity to transform your life with a new career in programming. Get started today for just R$9.90!",
  ctaText = "Get Your E-book Now",
  onCtaClick = () => console.log("CTA clicked"),
  backgroundColor = "bg-black",
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`w-full py-16 ${backgroundColor} text-white relative overflow-hidden`}
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-32 h-32 rounded-full bg-white/5 blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-[20%] right-[15%] w-40 h-40 rounded-full bg-blue-300/10 blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-[40%] right-[30%] w-24 h-24 rounded-full bg-indigo-400/10 blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* E-book image */}
      <div className="absolute right-[5%] top-1/2 transform -translate-y-1/2 w-40 h-56 rotate-6 hidden xl:block">
        <img
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&q=80"
          alt="E-book"
          className="w-full h-full object-cover rounded-lg"
          style={{ filter: "drop-shadow(0 25px 25px rgba(59, 130, 246, 0.5))" }}
        />
      </div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl max-w-2xl text-white/90"
          >
            {subtitle}
          </motion.p>

          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={onCtaClick}
                  size="lg"
                  className="text-xl px-10 py-6 h-auto bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-xl shadow-xl transition-all duration-300"
                >
                  {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md p-0 overflow-hidden border-0">
              <PaymentOptions
                onPaymentComplete={() => {
                  setDialogOpen(false);
                  alert(
                    "Pagamento processado com sucesso! Seu e-book será enviado para seu email.",
                  );
                }}
              />
            </DialogContent>
          </Dialog>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center gap-6 mt-6"
          >
            <img
              src="https://images.unsplash.com/photo-1556742077-0a6b6a4a4ac7?w=100&q=80"
              alt="Stripe"
              className="h-8"
            />
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&q=80"
              alt="Mercado Pago"
              className="h-8"
            />
            <img
              src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=100&q=80"
              alt="PIX"
              className="h-8"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm mt-4 text-white/80"
          >
            Secure payment • Instant download • 30-day money-back guarantee
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default FinalCTASection;
