import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

interface TestimonialProps {
  name: string;
  role: string;
  image: string;
  quote: string;
  achievement?: string;
  index?: number;
}

const Testimonial = ({
  name = "John Doe",
  role = "Junior Developer",
  image = "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  quote = "This e-book completely changed my career trajectory. I went from knowing nothing about programming to landing a job in just 10 months!",
  achievement = "Hired at a tech startup after 10 months of learning",
  index = 0,
}: TestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
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
            transition={{ duration: 0.3, delay: index * 0.2 + 0.2 }}
            className="flex items-center mb-4"
          >
            <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-bold text-lg">{name}</h4>
              <p className="text-gray-600 text-sm">{role}</p>
            </div>
          </motion.div>
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
              className="text-gray-700 italic mb-4"
            >
              "{quote}"
            </motion.p>
            {achievement && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                className="bg-blue-50 p-3 rounded-md"
              >
                <p className="text-blue-700 text-sm font-medium">
                  Achievement: {achievement}
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
  testimonials?: Omit<TestimonialProps, "index">[];
  title?: string;
  subtitle?: string;
}

const TestimonialsSection = ({
  testimonials = [
    {
      name: "Maria Silva",
      role: "Frontend Developer",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
      quote:
        "I was stuck in a dead-end job before finding this e-book. The practical approach and step-by-step guidance helped me land my dream job in just 9 months!",
      achievement: "Increased salary by 70% after career change",
    },
    {
      name: "Carlos Mendes",
      role: "Full Stack Developer",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
      quote:
        "The roadmap in this e-book is gold! I followed it exactly and went from complete beginner to employed developer in under a year.",
      achievement: "Hired at a Fortune 500 company",
    },
    {
      name: "Ana Ferreira",
      role: "Backend Developer",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
      quote:
        "What sets this e-book apart is the focus on practical projects and job search strategies. It's not just about coding, but how to actually get hired!",
      achievement: "Built a portfolio that impressed employers",
    },
  ],
  title = "Success Stories from Real People",
  subtitle = "Join hundreds of others who transformed their careers with our proven methodology",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} index={index} />
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
            Ready to start your own success story?
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium"
              onClick={() => {
                const finalCTA = document.querySelector("section:last-of-type");
                if (finalCTA) {
                  finalCTA.scrollIntoView({ behavior: "smooth" });
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

export default TestimonialsSection;
