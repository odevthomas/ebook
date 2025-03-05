import React from "react";
import { motion } from "framer-motion";

interface PlatformLogosProps {
  title?: string;
  subtitle?: string;
}

const PlatformLogos: React.FC<PlatformLogosProps> = ({
  title = "Disponível nas melhores plataformas",
  subtitle = "Nosso e-book é vendido e recomendado pelas principais plataformas de educação online",
}) => {
  const platforms = [
    {
      name: "Hotmart",
      logo: "https://hotmart.s3.amazonaws.com/product_pictures/0f67db09-a334-4345-8e4c-ee4fc3f3e593/logohotmart.png",
    },
    {
      name: "Udemy",
      logo: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg",
    },
    {
      name: "Teachable",
      logo: "https://teachable.com/static/brand-assets/teachable-logo-black.svg",
    },
    {
      name: "Gumroad",
      logo: "https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/618ea7afd990103829d614ff_gumroad-logo.svg",
    },
    {
      name: "Eduzz",
      logo: "https://eduzz.com/images/logo-eduzz-preta.svg",
    },
  ];

  return (
    <section className="py-16 bg-gray-900 border-t border-gray-800 relative overflow-hidden">
      {/* Background light effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[30%] left-[20%] w-64 h-64 rounded-full bg-blue-600/20 blur-[100px] animate-pulse"></div>
        <div
          className="absolute bottom-[40%] right-[25%] w-64 h-64 rounded-full bg-indigo-600/20 blur-[100px] animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-extrabold mb-3 text-white">{title}</h2>
          <p className="text-gray-400">{subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="brightness-0 invert opacity-70 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={platform.logo}
                alt={platform.name}
                className="h-8 md:h-10 object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformLogos;
