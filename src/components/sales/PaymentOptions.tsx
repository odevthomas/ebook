import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { motion } from "framer-motion";
import {
  CreditCard,
  QrCode,
  CreditCardIcon,
  CheckCircle2,
  Lock,
  ShieldCheck,
  AlertCircle,
  ArrowRight,
  Wallet,
  Gift,
  Star,
  Sparkles,
  Timer,
} from "lucide-react";

interface PaymentOptionsProps {
  onPaymentComplete?: () => void;
}

const PaymentOptions: React.FC<PaymentOptionsProps> = ({
  onPaymentComplete = () => console.log("Payment completed"),
}) => {
  const [loading, setLoading] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [email, setEmail] = useState("");
  const [copied, setCopied] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [showCouponField, setShowCouponField] = useState(false);

  const handlePayment = () => {
    setLoading(true);
    // Simulando uma chamada de API
    setTimeout(() => {
      setLoading(false);
      onPaymentComplete();
    }, 2000);
  };

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === "dev2024") {
      setCouponApplied(true);
    } else {
      alert("Cupom inválido");
    }
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length > 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    return value;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto bg-black rounded-xl overflow-hidden relative"
      style={{ filter: "drop-shadow(0 20px 30px rgba(59, 130, 246, 0.3))" }}
    >
      {/* Background light effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-64 h-64 rounded-full bg-blue-600/20 blur-[100px] animate-pulse"></div>
        <div
          className="absolute bottom-[20%] right-[15%] w-64 h-64 rounded-full bg-indigo-600/20 blur-[100px] animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Ribbon */}
      <div className="absolute top-0 right-0 z-10">
        <div className="bg-blue-600 text-white font-bold py-1 px-4 shadow-lg transform rotate-45 translate-x-[30%] translate-y-[-10%] w-40 text-center text-sm">
          OFERTA ESPECIAL
        </div>
      </div>

      <div className="bg-black p-6 text-white relative overflow-hidden border-b border-blue-800">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute top-[10%] left-[10%] w-20 h-20 rounded-full bg-white blur-xl animate-pulse"></div>
          <div
            className="absolute bottom-[20%] right-[15%] w-16 h-16 rounded-full bg-blue-300 blur-xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="flex justify-between items-center relative z-10">
          <div>
            <h2 className="text-2xl font-extrabold">Checkout Seguro</h2>
            <p className="text-sm text-blue-100">
              Escolha sua forma de pagamento preferida
            </p>
          </div>
          <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm">
            <Lock className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>

      {/* Timer countdown */}
      <div className="bg-blue-900 p-3 border-b border-blue-700 flex items-center justify-center gap-2 text-white">
        <Timer className="h-5 w-5 text-white animate-pulse" />
        <p className="text-sm font-bold text-white">
          Oferta expira em: <span className="font-mono">23:45:19</span>
        </p>
      </div>

      <Tabs defaultValue="credit" className="w-full">
        <TabsList className="grid grid-cols-3 w-full p-2 bg-gray-900">
          <TabsTrigger
            value="credit"
            className="flex items-center gap-2 data-[state=active]:bg-black data-[state=active]:text-blue-400"
          >
            <CreditCard className="h-4 w-4" />
            <span>Cartão</span>
          </TabsTrigger>
          <TabsTrigger
            value="pix"
            className="flex items-center gap-2 data-[state=active]:bg-black data-[state=active]:text-blue-400"
          >
            <QrCode className="h-4 w-4" />
            <span>PIX</span>
          </TabsTrigger>
          <TabsTrigger
            value="stripe"
            className="flex items-center gap-2 data-[state=active]:bg-black data-[state=active]:text-blue-400"
          >
            <Wallet className="h-4 w-4" />
            <span>Stripe</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="credit" className="p-4 bg-black">
          <Card className="border-0 shadow-none bg-transparent">
            <CardHeader className="p-0 pb-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <img
                    src="https://www.mercadopago.com/favicon.ico"
                    alt="Mercado Pago"
                    className="h-6 w-6"
                  />
                  <span className="font-semibold text-white">Mercado Pago</span>
                </div>
                <div className="flex gap-2">
                  <img
                    src="https://cdn.visa.com/v2/assets/images/logos/visa/logo.png"
                    alt="Visa"
                    className="h-6 brightness-0 invert"
                  />
                  <img
                    src="https://www.mastercard.com.br/content/dam/public/mastercardcom/br/pt/home/consumers/find-a-card/images/mastercard-logo-800x450.jpg"
                    alt="Mastercard"
                    className="h-6 brightness-0 invert"
                  />
                </div>
              </div>
              <div className="bg-blue-900/30 p-3 rounded-lg mb-4 flex items-start gap-2 border border-blue-800">
                <Gift className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-100">
                  Aproveite! Ao comprar hoje, você recebe acesso imediato ao
                  e-book e todos os bônus exclusivos.
                </p>
              </div>
            </CardHeader>
            <CardContent className="p-0 space-y-4">
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-sm font-medium flex items-center gap-1 text-white">
                    <CreditCard className="h-4 w-4 text-blue-400" />
                    Número do Cartão
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      className="w-full p-3 border border-blue-800 rounded-md pl-10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all bg-gray-900 text-white"
                      value={cardNumber}
                      onChange={(e) =>
                        setCardNumber(formatCardNumber(e.target.value))
                      }
                      maxLength={19}
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <CreditCardIcon className="h-5 w-5 text-blue-400" />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium flex items-center gap-1 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Nome no Cartão
                  </label>
                  <input
                    type="text"
                    placeholder="Nome completo"
                    className="w-full p-3 border border-blue-800 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all bg-gray-900 text-white"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium flex items-center gap-1 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Validade
                    </label>
                    <input
                      type="text"
                      placeholder="MM/AA"
                      className="w-full p-3 border border-blue-800 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all bg-gray-900 text-white"
                      value={cardExpiry}
                      onChange={(e) =>
                        setCardExpiry(formatExpiry(e.target.value))
                      }
                      maxLength={5}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium flex items-center gap-1 text-white">
                      <ShieldCheck className="h-4 w-4 text-blue-400" />
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full p-3 border border-blue-800 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all bg-gray-900 text-white"
                      value={cardCvv}
                      onChange={(e) =>
                        setCardCvv(
                          e.target.value.replace(/\D/g, "").slice(0, 4),
                        )
                      }
                      maxLength={4}
                    />
                  </div>
                </div>

                {/* Coupon code section */}
                <div>
                  {!showCouponField ? (
                    <button
                      onClick={() => setShowCouponField(true)}
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1"
                    >
                      <Star className="h-3 w-3" /> Tem um cupom de desconto?
                    </button>
                  ) : couponApplied ? (
                    <div className="bg-green-900/30 p-2 rounded-md border border-green-800 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-green-300 font-medium">
                        Cupom DEV2024 aplicado com sucesso!
                      </span>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Código do cupom"
                        className="flex-1 p-2 text-sm border border-blue-800 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none bg-gray-900 text-white"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                      />
                      <Button
                        onClick={applyCoupon}
                        variant="outline"
                        size="sm"
                        className="text-sm border-blue-800 text-blue-400 hover:text-white hover:bg-blue-800"
                      >
                        Aplicar
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-2">
                <Button
                  onClick={handlePayment}
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl transition-all font-extrabold text-lg h-auto shadow-lg"
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processando...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <Sparkles className="h-4 w-4 mr-1" /> Pagar R$9,90{" "}
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </Button>
              </div>
            </CardContent>
            <CardFooter className="p-0 pt-4 flex-col items-start gap-2">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Lock className="h-4 w-4 text-green-400" />
                <span>Pagamento 100% seguro e criptografado</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span>Garantia de 30 dias ou seu dinheiro de volta</span>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="pix" className="p-4 bg-black">
          <Card className="border-0 shadow-none bg-transparent">
            <CardContent className="p-0 space-y-4 flex flex-col items-center">
              <div className="text-center mb-2 w-full">
                <h3 className="font-semibold text-lg text-white">
                  Pagamento via PIX
                </h3>
                <p className="text-sm text-gray-300">
                  Escaneie o código QR ou copie o código PIX para pagamento
                  instantâneo
                </p>
              </div>

              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-blue-900/30 p-6 rounded-lg border border-blue-800 w-full"
              >
                <div
                  className="bg-white p-4 rounded-lg mx-auto w-48 h-48 flex items-center justify-center relative"
                  style={{
                    filter: "drop-shadow(0 10px 20px rgba(59, 130, 246, 0.3))",
                  }}
                >
                  <QrCode className="h-40 w-40 mx-auto text-gray-800 relative z-10" />
                </div>
              </motion.div>

              <div className="w-full">
                <div className="flex items-center justify-between bg-gray-900 p-3 rounded-md border border-gray-700">
                  <span className="text-sm text-gray-300 truncate font-mono">
                    00020126580014br.gov.bcb.pix0136a629532e-7693-4846-b028
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        "00020126580014br.gov.bcb.pix0136a629532e-7693-4846-b028",
                      );
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className="bg-gray-800 hover:bg-gray-700 border-blue-800 text-white hover:text-white"
                  >
                    {copied ? (
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />{" "}
                        Copiado
                      </span>
                    ) : (
                      "Copiar"
                    )}
                  </Button>
                </div>
              </div>

              <div className="bg-blue-900/30 p-4 rounded-lg w-full border border-blue-800">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-100">
                    <p className="font-medium mb-1">Instruções:</p>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>Abra o app do seu banco</li>
                      <li>Escolha pagar via PIX com QR Code ou código</li>
                      <li>Escaneie ou cole o código acima</li>
                      <li>Confirme o valor de R$9,90</li>
                      <li>Pronto! Seu acesso será liberado automaticamente</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="text-center text-sm text-gray-300 w-full bg-gray-900 p-3 rounded-lg border border-gray-700">
                <div className="flex justify-center items-center gap-2 mb-1">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <p className="font-medium">
                    O pagamento será confirmado automaticamente
                  </p>
                </div>
                <p>
                  Valor:{" "}
                  <span className="font-semibold text-blue-400">R$9,90</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stripe" className="p-4 bg-black">
          <Card className="border-0 shadow-none bg-transparent">
            <CardHeader className="p-0 pb-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <img
                    src="https://stripe.com/img/v3/home/social.png"
                    alt="Stripe"
                    className="h-6 w-6 rounded brightness-0 invert"
                  />
                  <span className="font-semibold text-white">
                    Stripe Checkout
                  </span>
                </div>
              </div>
              <div className="bg-blue-900/30 p-3 rounded-lg mb-4 flex items-start gap-2 border border-blue-800">
                <ShieldCheck className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-100">
                  Stripe oferece uma das formas de pagamento mais seguras do
                  mundo, com proteção contra fraudes.
                </p>
              </div>
            </CardHeader>
            <CardContent className="p-0 space-y-4">
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-sm font-medium flex items-center gap-1 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full p-3 border border-blue-800 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all bg-gray-900 text-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium flex items-center gap-1 text-white">
                    <CreditCard className="h-4 w-4 text-blue-400" />
                    Número do Cartão
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      className="w-full p-3 border border-blue-800 rounded-md pl-10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all bg-gray-900 text-white"
                      value={cardNumber}
                      onChange={(e) =>
                        setCardNumber(formatCardNumber(e.target.value))
                      }
                      maxLength={19}
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <CreditCardIcon className="h-5 w-5 text-blue-400" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium flex items-center gap-1 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Validade
                    </label>
                    <input
                      type="text"
                      placeholder="MM/AA"
                      className="w-full p-3 border border-blue-800 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all bg-gray-900 text-white"
                      value={cardExpiry}
                      onChange={(e) =>
                        setCardExpiry(formatExpiry(e.target.value))
                      }
                      maxLength={5}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium flex items-center gap-1 text-white">
                      <ShieldCheck className="h-4 w-4 text-blue-400" />
                      CVC
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full p-3 border border-blue-800 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all bg-gray-900 text-white"
                      value={cardCvv}
                      onChange={(e) =>
                        setCardCvv(
                          e.target.value.replace(/\D/g, "").slice(0, 4),
                        )
                      }
                      maxLength={4}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  onClick={handlePayment}
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl transition-all font-extrabold text-lg h-auto shadow-lg"
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processando...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <Sparkles className="h-4 w-4 mr-1" /> Pagar com Stripe{" "}
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </Button>
              </div>
            </CardContent>
            <CardFooter className="p-0 pt-4 flex-col items-start gap-2">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Lock className="h-4 w-4 text-green-400" />
                <span>Pagamento 100% seguro e criptografado</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span>Garantia de 30 dias ou seu dinheiro de volta</span>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="p-4 bg-gray-900 border-t border-gray-700">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">Subtotal:</span>
            <span className="text-sm font-medium text-white">R$49,90</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">Desconto (80%):</span>
            <span className="text-sm font-medium text-green-400">-R$40,00</span>
          </div>
          {couponApplied && (
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-300">Cupom (DEV2024):</span>
              <span className="text-sm font-medium text-green-400">
                -R$2,00
              </span>
            </div>
          )}
          <div className="flex justify-between items-center pt-2 border-t border-gray-700 mt-2">
            <span className="text-base font-medium text-white">Total:</span>
            <span className="text-lg font-bold text-blue-400">
              {couponApplied ? "R$7,90" : "R$9,90"}
            </span>
          </div>
        </div>
      </div>

      {/* Trust badges */}
      <div className="p-4 bg-gray-900 border-t border-gray-700">
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-1">
            <ShieldCheck className="h-5 w-5 text-blue-400" />
            <span className="text-xs text-gray-300">Compra Segura</span>
          </div>
          <div className="flex items-center gap-1">
            <Lock className="h-5 w-5 text-blue-400" />
            <span className="text-xs text-gray-300">Dados Protegidos</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle2 className="h-5 w-5 text-blue-400" />
            <span className="text-xs text-gray-300">Garantia de 30 dias</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PaymentOptions;
