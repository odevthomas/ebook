import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

interface TestimonialProps {
  nome: string;
  cargo: string;
  imagem: string;
  depoimento: string;
  conquista?: string;
  indice?: number;
}

const Testimonial = ({
  nome = "João Silva",
  cargo = "Desenvolvedor Júnior",
  imagem = "/clientes/men(1).jpg",
  depoimento = "Este e-book mudou completamente a trajetória da minha carreira. Eu passei de não saber nada sobre programação para conseguir um emprego em apenas 10 meses!",
  conquista = "Contratado em uma startup de tecnologia após 10 meses de aprendizado",
  indice = 0,
}: TestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: indice * 0.2 }}
    >
      <Card
        className="bg-white h-full flex flex-col overflow-hidden transition-all duration-300 relative group"
        style={{ filter: "drop-shadow(0 10px 15px rgba(100, 116, 139, 0.2))" }}
      >
        <CardContent className="p-6 flex flex-col h-full">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: indice * 0.2 + 0.2 }}
            className="flex items-center mb-4"
          >
            <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
              <img
                src={imagem}
                alt={nome}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-bold tex-white text-lg">{nome}</h4>
              <p className="text-gray-600 text-sm">{cargo}</p>
            </div>
          </motion.div>
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: indice * 0.2 + 0.3 }}
              className="text-gray-700 italic mb-4"
            >
              "{depoimento}"
            </motion.p>
            {conquista && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: indice * 0.2 + 0.4 }}
                className="bg-blue-50 p-3 rounded-md"
              >
                <p className="text-blue-700 text-sm font-medium">
                  Conquista: {conquista}
                </p>
              </motion.div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

interface TestimonialsSectionProps {
  depoimentos?: Omit<TestimonialProps, "indice">[];
  titulo?: string;
  subtitulo?: string;
}

const TestimonialsSection = ({
  depoimentos = [
    {
      nome: "Maria Silva",
      cargo: "Desenvolvedora Frontend",
      imagem: "/clientes/female(1).jpg", // Substituindo pelo caminho das imagens das
      depoimento:
        "Eu estava presa em um emprego sem futuro antes de encontrar este e-book. A abordagem prática e o guia passo a passo me ajudaram a conseguir o emprego dos meus sonhos em apenas 9 meses!",
      conquista: "Aumentou o salário em 70% após a mudança de carreira",
    },
    {
      nome: "Carlos Mendes",
      cargo: "Desenvolvedor Full Stack",
      imagem: "/clientes/men(2).jpg", // Substituindo pelo caminho das imagens dos
      depoimento:
        "O roteiro neste e-book é ouro! Eu segui exatamente e passei de completo iniciante para desenvolvedor contratado em menos de um ano.",
      conquista: "Contratado em uma empresa da Fortune 500",
    },
    {
      nome: "Ana Ferreira",
      cargo: "Desenvolvedora Backend",
      imagem: "/clientes/female(2).jpg", // Substituindo pelo caminho das imagens das
      depoimento:
        "O que diferencia este e-book é o foco em projetos práticos e estratégias de busca de emprego. Não se trata apenas de programar, mas de como realmente ser contratado!",
      conquista: "Construiu um portfólio que impressionou os empregadores",
    },
  ],
  titulo = "Histórias de Sucesso de Pessoas Reais",
  subtitulo = "Junte-se a centenas de outras pessoas que transformaram suas carreiras com nossa metodologia comprovada",
}: TestimonialsSectionProps) => {
  return (
    <section className="py-16 px-4 bg-[#070707]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">{titulo}</h2>
          <p className="text-gray-200 max-w-3xl mx-auto">{subtitulo}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {depoimentos.map((depoimento, indice) => (
            <Testimonial key={indice} {...depoimento} indice={indice} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-lg font-medium mb-6">
            Pronto para começar sua própria história de sucesso?
          </p>
          
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
