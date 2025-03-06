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
      logo: "https://cdn.brandfetch.io/id_r-vy7Tu/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1740382923073",
    },
    {
      name: "Braip",
      logo: "/Plataformas/logo-braip.png",
    },
    {
      name: "Monetizze",
      logo: " https://cdn.brandfetch.io/idjax5iQuU/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1737333493052",
    },
    {
      name: "Kiwify",
      logo: "https://cdn.brandfetch.io/idmENXm_u8/w/400/h/110/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1740680240804",
    },
    {
      name: "Eduzz",
      logo: "https://cdn.brandfetch.io/idU7SCHa8J/w/161/h/45/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1741045013950",
    },
  ];

  return (
    <section className="py-16 bg-black relative overflow-hidden">

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        
        <div className="absolute top-[5%] left-[5%] w-[30rem] h-[30rem] rounded-full bg-blue-600/15 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[28rem] h-[28rem] rounded-full bg-indigo-600/15 blur-[120px] animate-pulse" style={{ animationDelay: "2.5s" }}>
        </div>
       
        <div className="absolute top-[40%] right-[25%] w-[25rem] h-[25rem] rounded-full bg-purple-600/15 blur-[120px] animate-pulse" style={{ animationDelay: "4s" }}>
        </div>

        <div
          className="absolute bottom-[40%] right-[25%] w-64 h-64 rounded-full bg-indigo-600/20 blur-[100px] animate-pulse"
          style={{ animationDelay: "3s" }}
        >
          
        </div>
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
