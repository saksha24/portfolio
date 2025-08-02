import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
 FaJs, FaHtml5, FaCss3Alt,  FaGitAlt, FaGithub, 
} from 'react-icons/fa';
import {
  SiTypescript,  SiVercel
} from 'react-icons/si';

import {
  FaJava, FaNetworkWired
} from 'react-icons/fa';
import {
  SiAngular, SiBootstrap, SiSpringboot, SiMysql, SiThymeleaf,
  SiJsonwebtokens, SiPostman, 
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';


const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
const skillCategories = [
  {
    title: "Frontend",
    color: "from-blue-500 to-purple-600",
    skills: [
      { name: "Angular", icon: SiAngular, level: 90, color: "#DD0031" },
      { name: "TypeScript", icon: SiTypescript, level: 90, color: "#3178C6" },
      { name: "JavaScript", icon: FaJs, level: 90, color: "#F7DF1E" },
      { name: "Bootstrap", icon: SiBootstrap, level: 85, color: "#7952B3" },
      { name: "HTML5", icon: FaHtml5, level: 95, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, level: 90, color: "#1572B6" }
    ]
  },
  {
    title: "Backend",
    color: "from-green-500 to-teal-600",
    skills: [
      { name: "Java", icon: FaJava, level: 90, color: "#007396" },
      { name: "Spring Boot", icon: SiSpringboot, level: 90, color: "#6DB33F" },
      { name: "REST APIs", icon: FaNetworkWired, level: 85, color: "#f97316" },
      { name: "Thymeleaf", icon: SiThymeleaf, level: 75, color: "#005f0f" },
      { name: "MySQL", icon: SiMysql, level: 90, color: "#4479A1" },
      { name: "JWT", icon: SiJsonwebtokens, level: 80, color: "#000000" }
    ]
  },
  {
    title: "Tools & DevOps",
    color: "from-orange-500 to-red-600",
    skills: [
      { name: "Git", icon: FaGitAlt, level: 90, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, level: 90, color: "#181717" },
      { name: "Postman", icon: SiPostman, level: 85, color: "#FF6C37" },
      { name: "Vercel", icon: SiVercel, level: 85, color: "#000000" },
      { name: "VS Code", icon:  VscVscode, level: 90, color: "#007ACC" }
    ]
  }
];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const categoryVariants:any = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  const progressVariants:any = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.2
      }
    })
  };

  return (
    <section ref={ref} className="py-12 px-6 bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Modern technologies and proven expertise
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              className="group"
            >
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                {/* Category Header */}
                <div className="mb-8">
                  <div className={`h-1 w-16 bg-gradient-to-r ${category.color} rounded-full mb-4`}></div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{category.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {category.skills.length} technologies
                  </p>
                </div>

                {/* Skills */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon;
                    const skillKey = `${categoryIndex}-${skillIndex}`;
                    return (
                      <motion.div
                        key={skill.name}
                        variants={skillVariants}
                        onMouseEnter={() => setHoveredSkill(skillKey)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="group/skill"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 5 }}
                              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
                              style={{
                                backgroundColor: hoveredSkill === skillKey ? `${skill.color}20` : undefined
                              }}
                            >
                              <Icon className="w-5 h-5" style={{ color: skill.color }} />
                            </motion.div>
                            <span className="text-gray-900 dark:text-white font-medium group-hover/skill:text-gray-500 dark:group-hover/skill:text-gray-300 transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          <motion.span
                            className="text-sm font-mono text-gray-600 dark:text-gray-400"
                            animate={{
                              scale: hoveredSkill === skillKey ? 1.1 : 1,
                              color: hoveredSkill === skillKey ? skill.color : undefined
                            }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>

                        {/* Progress Bar */}
                        <div className="h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            variants={progressVariants}
                            custom={skill.level}
                            className="h-full rounded-full relative"
                            style={{ backgroundColor: skill.color }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-white/20 rounded-full"
                              animate={{
                                opacity: hoveredSkill === skillKey ? [0.5, 0.8, 0.5] : 0
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: hoveredSkill === skillKey ? Infinity : 0
                              }}
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1 text-sm"
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
