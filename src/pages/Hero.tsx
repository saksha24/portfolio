import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiDocker,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { useEffect, useState } from "react";

const Hero = () => {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: any = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/ajay-devhub", label: "GitHub" },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/ajay-shinde-a2408a1ba",
      label: "LinkedIn",
    },
  ];


  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-neutral-900 transition-colors duration-300"
    >

      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          className="flex flex-col gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white"
              variants={itemVariants}
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-br from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Sakshi Shinde
              </span>
            </motion.h1>

            <motion.h2
              className="text-xl font-semibold text-gray-700 dark:text-white/80 mt-4"
              variants={itemVariants}
            >
              Full Stack Developer
            </motion.h2>

            <motion.p
              className="text-gray-600 dark:text-white/70 text-base leading-relaxed max-w-lg"
              variants={itemVariants}
            >
              I create beautiful, functional, and user-centered digital
              experiences that solve real-world problems with clean code and
              innovative design.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <a href="#projects">
                <motion.button
                  className="px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-br from-indigo-400 to-purple-500 shadow-md hover:shadow-lg hover:-translate-y-1 transition"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.button>
              </a>

              <a
                href="resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  className="px-6 py-3 rounded-xl font-semibold border border-gray-300 dark:border-white/20 backdrop-blur bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition flex items-center gap-2 text-gray-900 dark:text-white"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload />
                  Download CV
                </motion.button>
              </a>
            </motion.div>

            <motion.div className="flex gap-4 mt-4" variants={itemVariants}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white/80 border border-gray-200 dark:border-white/10 backdrop-blur hover:bg-indigo-100 dark:hover:bg-indigo-500/20 hover:text-indigo-600 dark:hover:text-white transition"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex items-center justify-center w-full h-[480px] px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="bg-gray-100 dark:bg-black/90 rounded-2xl p-6 border border-gray-200 dark:border-white/10 shadow-lg dark:shadow-2xl backdrop-blur transition-colors duration-300">
            <div className="flex space-x-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <pre className="whitespace-pre-wrap text-green-600 dark:text-green-400 font-mono text-sm leading-relaxed">
                <TypewriterText />
              </pre>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center items-center gap-5 mt-6 text-cyan-700 dark:text-cyan-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              {[FaReact, SiTypescript, FaNodeJs, SiTailwindcss, SiNextdotjs, SiDocker].map(
                (Icon, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon size={26} />
                  </motion.div>
                )
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-700 dark:text-white/60 text-2xl cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

const texts = [
  "console.log('Hey, I’m Ajay 👋');",
  "const stack = ['React', 'Angular', 'Node.js', 'TypeScript'];",
  "while(alive) code(); // DevRitual 🔥",
];


export const TypewriterText = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fullText = texts[index];
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % texts.length);
          setText("");
        }, 1500);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [index]);

  return <pre className="whitespace-pre text-base">{text}|</pre>;
};

export default Hero;
