import React from "react";
import { Button } from "@/components/ui/button";
import { Check, Code, BookOpen, Zap, Target, Clock } from "lucide-react";
import { motion } from "framer-motion";

interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
}

const BenefitItem = ({
  icon = <Check />,
  title = "Benefit Title",
  description = "Description of this amazing benefit",
  index = 0,
}: BenefitItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="flex flex-col items-center text-center p-6 bg-white rounded-lg transition-all duration-300 relative overflow-hidden group"
      style={{ filter: "drop-shadow(0 10px 15px rgba(100, 116, 139, 0.2))" }}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        className="mb-4 p-3 bg-blue-100 text-blue-600 rounded-full"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

interface BenefitsSectionProps {
  title?: string;
  subtitle?: string;
  benefits?: Omit<BenefitItemProps, "index">[];
}

const BenefitsSection = ({
  title = "What You'll Gain From This E-book",
  subtitle = "Practical skills and knowledge that will transform your programming journey",
  benefits = [
    {
      icon: <Code size={24} />,
      title: "Practical Coding Skills",
      description:
        "Learn the most in-demand programming languages and frameworks that employers are actively seeking.",
    },
    {
      icon: <BookOpen size={24} />,
      title: "Structured Learning Path",
      description:
        "Follow a proven step-by-step curriculum designed to take you from absolute beginner to job-ready developer.",
    },
    {
      icon: <Zap size={24} />,
      title: "Accelerated Learning",
      description:
        "Master programming concepts faster with our unique teaching methodology and practical exercises.",
    },
    {
      icon: <Target size={24} />,
      title: "Job Search Strategies",
      description:
        "Discover insider techniques for finding and landing your first programming job, even without a CS degree.",
    },
    {
      icon: <Clock size={24} />,
      title: "Time-Efficient Approach",
      description:
        "Focus only on what matters to get hired quickly, avoiding common time-wasting detours in your learning journey.",
    },
    {
      icon: <Check size={24} />,
      title: "Real-World Projects",
      description:
        "Build an impressive portfolio with projects that demonstrate your skills to potential employers.",
    },
  ],
}: BenefitsSectionProps) => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitItem
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-full"
              onClick={() => {
                const pricingSection = document.getElementById("pricing");
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Get Your Copy Now
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
