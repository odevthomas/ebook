import React from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock, DollarSign, Frown } from "lucide-react";

interface PainPointsSectionProps {
  title?: string;
  description?: string;
  painPoints?: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
  ctaText?: string;
  ctaLink?: string;
}

const PainPointsSection = ({
  title = "Dificuldade para Entrar na Programação?",
  description = "Muitos aspirantes a programadores enfrentam esses desafios comuns que impedem de conseguir o primeiro emprego:",
  painPoints = [
    {
      icon: <AlertTriangle className="h-10 w-10 text-blue-600" />,
      title: "Sobrecarga de Informações",
      description:
        "Sobrecarregado por diversas linguagens de programação, frameworks e conselhos conflitantes sobre o que aprender primeiro.",
    },
    {
      icon: <Clock className="h-10 w-10 text-blue-600" />,
      title: "Tempo e Esforço Perdidos",
      description:
        "Gastando meses com cursos que não ensinam habilidades relevantes para o trabalho ou não constroem um portfólio impressionante.",
    },
    {
      icon: <Frown className="h-10 w-10 text-blue-600" />,
      title: "Rejeições Após Rejeições",
      description:
        "Aplicando para dezenas de vagas sem conseguir entrevistas, porque seu currículo não se destaca.",
    },
    {
      icon: <DollarSign className="h-10 w-10 text-blue-600" />,
      title: "Bootcamps Caros",
      description:
        "Considerando bootcamps caros sem saber se realmente irão levar a uma oportunidade de emprego.",
    },
  ],
  ctaText = "Encontre a Solução Agora",
  ctaLink = "#solution",
}: PainPointsSectionProps) => {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {title}
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-lg shadow-md border border-slate-700 flex flex-col items-start"
            >
              <div className="mb-4">{point.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {point.title}
              </h3>
              <p className="text-slate-300">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-600 text-white font-semibold px-8 py-3 text-lg rounded-full"
            onClick={() => {
              const element = document.querySelector(ctaLink);
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
