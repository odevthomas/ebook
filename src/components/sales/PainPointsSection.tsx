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
  title = "Struggling to Break Into Programming?",
  description = "Many aspiring programmers face these common challenges that prevent them from landing their first job:",
  painPoints = [
    {
      icon: <AlertTriangle className="h-10 w-10 text-amber-500" />,
      title: "Information Overload",
      description:
        "Overwhelmed by countless programming languages, frameworks, and conflicting advice on what to learn first.",
    },
    {
      icon: <Clock className="h-10 w-10 text-amber-500" />,
      title: "Wasted Time & Effort",
      description:
        "Spending months on courses that don't teach job-relevant skills or build an impressive portfolio.",
    },
    {
      icon: <Frown className="h-10 w-10 text-amber-500" />,
      title: "Rejection After Rejection",
      description:
        "Applying to dozens of jobs without getting interviews because your resume doesn't stand out.",
    },
    {
      icon: <DollarSign className="h-10 w-10 text-amber-500" />,
      title: "Expensive Boot Camps",
      description:
        "Considering expensive coding bootcamps without knowing if they'll actually lead to employment.",
    },
  ],
  ctaText = "Get The Solution Now",
  ctaLink = "#solution",
}: PainPointsSectionProps) => {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            {title}
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-slate-200 flex flex-col items-start"
            >
              <div className="mb-4">{point.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">
                {point.title}
              </h3>
              <p className="text-slate-700">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 text-lg rounded-full"
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
