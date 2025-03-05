import React from "react";
import { Gift, BookOpen, Video, MessageSquare } from "lucide-react";
import { Button } from "../ui/button";

interface BonusesSectionProps {
  title?: string;
  description?: string;
  bonuses?: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  ctaText?: string;
}

const BonusesSection = ({
  title = "Exclusive Bonuses Included",
  description = "When you purchase the e-book today, you'll also get these valuable resources at no extra cost to accelerate your programming journey.",
  bonuses = [
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Code Examples Library",
      description:
        "Access to 100+ real-world code examples that you can use in your projects and portfolio.",
    },
    {
      icon: <Video className="h-10 w-10 text-primary" />,
      title: "Video Tutorials",
      description:
        "10 exclusive video tutorials covering the most challenging programming concepts in detail.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "Community Access",
      description:
        "1-month free access to our private community where you can get your questions answered by experts.",
    },
    {
      icon: <Gift className="h-10 w-10 text-primary" />,
      title: "Interview Preparation Guide",
      description:
        "A comprehensive guide with common interview questions and strategies to help you ace your first programming job interview.",
    },
  ],
  ctaText = "Get All Bonuses Now",
}: BonusesSectionProps) => {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            {title}
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-slate-100 flex flex-col h-full"
            >
              <div className="mb-4">{bonus.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">
                {bonus.title}
              </h3>
              <p className="text-slate-600 flex-grow">{bonus.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 h-auto text-lg rounded-full"
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;
