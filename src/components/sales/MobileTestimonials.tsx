import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  message: string;
  avatar: string;
  time: string;
}

interface MobileTestimonialsProps {
  testimonials?: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
}

const MobileTestimonials: React.FC<MobileTestimonialsProps> = ({
  testimonials = [
    {
      name: "Carlos Mendes",
      message:
        "Esse e-book mudou minha vida! Consegui meu primeiro emprego como dev em apenas 8 meses seguindo o passo a passo.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
      time: "14:32",
    },
    {
      name: "Ana Ferreira",
      message:
        "Os projetos práticos são incríveis! Coloquei todos no meu portfólio e recebi 3 propostas de emprego em uma semana.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
      time: "15:45",
    },
    {
      name: "Pedro Oliveira",
      message:
        "Melhor investimento que já fiz! Estava perdido tentando aprender por tutoriais aleatórios, mas o roadmap do e-book me deu direção clara.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pedro",
      time: "16:20",
    },
    {
      name: "Juliana Costa",
      message:
        "As dicas de entrevista foram essenciais! Consegui me preparar perfeitamente e passei no processo seletivo de primeira.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Juliana",
      time: "17:05",
    },
    {
      name: "Marcos Silva",
      message:
        "Eu não tinha experiência nenhuma com programação e agora estou trabalhando como desenvolvedor júnior. Vale cada centavo!",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcos",
      time: "18:15",
    },
  ],
  autoPlay = true,
  interval = 4000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [autoPlay, interval, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background light effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-96 h-96 rounded-full bg-blue-600/20 blur-[100px] animate-pulse"></div>
        <div
          className="absolute bottom-[20%] right-[15%] w-80 h-80 rounded-full bg-indigo-600/20 blur-[100px] animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-extrabold mb-4 text-white">
            O que nossos alunos estão dizendo
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Veja mensagens reais de pessoas que transformaram suas carreiras com
            nosso e-book
          </p>
        </motion.div>

        <div className="relative max-w-md mx-auto">
          {/* Mobile phone frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-[280px] h-[580px] bg-black rounded-[40px] p-3 shadow-2xl border-[8px] border-gray-800"
          >
            {/* Screen */}
            <div className="w-full h-full bg-gray-900 rounded-[32px] overflow-hidden flex flex-col">
              {/* Header */}
              <div className="bg-blue-800 text-white p-3 flex items-center">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">Grupo de Alunos</h3>
                    <p className="text-xs text-blue-100">125 participantes</p>
                  </div>
                </div>
              </div>

              {/* Chat area */}
              <div className="flex-1 p-3 overflow-y-auto bg-gray-800">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex mb-3"
                  >
                    <div className="flex items-start max-w-[85%]">
                      <div className="w-8 h-8 rounded-full overflow-hidden mr-2 flex-shrink-0">
                        <img
                          src={testimonials[currentIndex].avatar}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="bg-gray-700 rounded-lg p-2 shadow-sm">
                          <p className="text-xs font-medium text-blue-400">
                            {testimonials[currentIndex].name}
                          </p>
                          <p className="text-xs mt-1 text-white">
                            {testimonials[currentIndex].message}
                          </p>
                        </div>
                        <p className="text-[10px] text-gray-500 mt-1 ml-1">
                          {testimonials[currentIndex].time}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Input area */}
              <div className="p-2 border-t border-gray-700 bg-gray-900 flex items-center gap-2">
                <div className="flex-1 bg-gray-800 rounded-full h-8"></div>
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full bg-gray-800 shadow-md hover:bg-gray-700 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>
            <div className="flex items-center gap-1">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-blue-600" : "bg-gray-300"}`}
                ></button>
              ))}
            </div>
            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-gray-800 shadow-md hover:bg-gray-700 transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileTestimonials;
