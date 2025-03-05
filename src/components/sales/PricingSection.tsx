import React, { useState } from "react";
import { Shield, CreditCard, Lock } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";
import PaymentOptions from "./PaymentOptions";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

interface PricingSectionProps {
  price?: string;
  originalPrice?: string;
  ctaText?: string;
  securityFeatures?: Array<{
    icon: React.ReactNode;
    text: string;
  }>;
}

const PricingSection: React.FC<PricingSectionProps> = ({
  price = "R$9.90",
  originalPrice = "R$49.90",
  ctaText = "Comprar agora",
  securityFeatures = [
    { icon: <Shield className="h-5 w-5" />, text: "Pagamento 100% seguro" },
    {
      icon: <CreditCard className="h-5 w-5" />,
      text: "Aceitamos todos os cartões",
    },
    { icon: <Lock className="h-5 w-5" />, text: "Seus dados estão protegidos" },
  ],
}) => {
  const [showPayment, setShowPayment] = useState(false);

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-gray-900 relative overflow-hidden">
      {/* Background light effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-96 h-96 rounded-full bg-blue-600/20 blur-[100px] animate-pulse"></div>
        <div
          className="absolute bottom-[20%] right-[15%] w-80 h-80 rounded-full bg-indigo-600/20 blur-[100px] animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white">
            Investimento único e acessível
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium">
            Transforme sua carreira com um investimento mínimo que trará
            retornos exponenciais
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
          className="max-w-md mx-auto"
        >
          <Card
            className="bg-black border-4 border-blue-600 relative overflow-hidden rounded-2xl"
            style={{
              filter: "drop-shadow(0 25px 25px rgba(59, 130, 246, 0.3))",
            }}
          >
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-500 opacity-10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-indigo-500 opacity-10 rounded-full blur-xl"></div>

            {/* E-book image */}
            <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 w-32 h-40 rotate-12 hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&q=80"
                alt="E-book"
                className="w-full h-full object-cover rounded-lg"
                style={{
                  filter: "drop-shadow(0 25px 25px rgba(59, 130, 246, 0.5))",
                }}
              />
            </div>
            <CardHeader className="text-center pb-0">
              <Badge className="mb-2 mx-auto bg-blue-600 text-white font-bold px-4 py-1 text-sm border-0 shadow-md">
                Oferta por tempo limitado
              </Badge>
              <CardTitle className="text-3xl font-extrabold text-white">
                E-book + Bônus Exclusivos
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex justify-center items-center gap-3 mb-6">
                <span className="text-sm line-through text-gray-400 font-medium">
                  {originalPrice}
                </span>
                <motion.span
                  className="text-5xl font-extrabold text-blue-400"
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  {price}
                </motion.span>
                <Badge className="bg-blue-600 text-white border-0 font-bold px-3 py-1 text-sm shadow-md">
                  80% OFF
                </Badge>
              </div>

              <ul className="space-y-3 mb-6">
                {[
                  "Acesso imediato ao conteúdo completo",
                  "Atualizações gratuitas para sempre",
                  "Suporte por email por 30 dias",
                  "Todos os bônus exclusivos incluídos",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shadow-md">
                      ✓
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex-col gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="w-full py-6 text-xl font-extrabold bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 shadow-xl rounded-xl"
                      size="lg"
                    >
                      {ctaText}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="p-0 max-w-md border-0 overflow-hidden">
                    <PaymentOptions
                      onPaymentComplete={() =>
                        alert(
                          "Pagamento processado com sucesso! Seu e-book será enviado para seu email.",
                        )
                      }
                    />
                  </DialogContent>
                </Dialog>
              </motion.div>

              <div className="flex flex-col gap-2 w-full mt-4">
                {securityFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-2 text-sm text-gray-400"
                  >
                    {feature.icon}
                    <span>{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
