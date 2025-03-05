import React from "react";
import { Book, Check, Code, Lightbulb } from "lucide-react";
import { Button } from "../ui/button";

interface SolutionSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  ctaText?: string;
  ctaLink?: string;
}

const SolutionSection: React.FC<SolutionSectionProps> = ({
  title = "The Complete Roadmap to Your First Programming Job",
  subtitle = "Stop struggling with scattered tutorials and confusing advice",
  description = "This comprehensive e-book provides a clear, step-by-step path from absolute beginner to employed programmer. Unlike random YouTube tutorials or expensive bootcamps, our approach is structured, practical, and proven to work.",
  features = [
    {
      icon: <Book className="h-8 w-8 text-primary" />,
      title: "Structured Learning Path",
      description:
        "Follow our carefully designed curriculum that builds skills in the right order.",
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Real-World Projects",
      description:
        "Build portfolio-worthy applications that employers actually care about.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Industry Insights",
      description:
        "Learn what hiring managers are really looking for in junior developers.",
    },
    {
      icon: <Check className="h-8 w-8 text-primary" />,
      title: "Proven Results",
      description:
        "Join hundreds of readers who have successfully transitioned into programming careers.",
    },
  ],
  ctaText = "Get Your Copy Now",
  ctaLink = "#pricing",
}) => {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 mb-6">{subtitle}</p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mr-4 flex-shrink-0">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="text-lg px-8 py-6 h-auto bg-primary hover:bg-primary/90 text-white font-medium rounded-full"
            onClick={() => (window.location.href = ctaLink)}
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
