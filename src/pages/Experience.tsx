import { motion } from "framer-motion";
import { FaJava } from "react-icons/fa";
import {
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiTrendingUp,
  FiAward,
} from "react-icons/fi";
import {
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiJavascript,
  SiPython,
  SiDocker,
  SiAngular,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

// Experience data
const experiences = [
  {
    title: "Software Engineer",
    company: "Angular Minds",
    location: "Pune, India",
    duration: "Feb 2023 – Present",
    type: "Full-time",
    description:
      "Working as a full-stack engineer on scalable web applications using Angular, React, and Node.js. Collaborating closely with cross-functional teams to deliver performant, modern solutions.",
    achievements: [
      "Delivered multiple enterprise-grade features across Angular and React codebases",
      "Improved frontend performance and state management in large-scale apps",
      "Led reusable component development for faster cross-project delivery",
    ],
    tech: ["Angular", "React", "Node.js", "JavaScript", "TypeScript", "Tailwind CSS"],
    icon: FiTrendingUp,
  },
  {
    title: "Trainee Software Engineer",
    company: "HefShine Softwares Pvt Ltd",
    location: "Pune, India",
    duration: "Jun 2022 – Jan 2023",
    type: "Internship",
    description:
      "Completed a structured training program focusing on Java, Angular, and web development fundamentals. Worked on internal projects to gain hands-on experience with real-world coding practices.",
    achievements: [
      "Learned and applied core Java, Angular, and TypeScript concepts",
      "Built small-scale apps to reinforce frontend-backend integration",
      "Completed internship with commendation for performance and learning speed",
    ],
    tech: ["Java", "Angular", "TypeScript", "HTML", "CSS"],
    icon: FiAward,
  },
];


// Icon mapping
const techIcons: any = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Python: SiPython,
  Docker: SiDocker,
  Angular: SiAngular,
  Java: FaJava,
  HTML: SiHtml5,
  CSS: SiCss3,
};

const ExperienceCard = ({ experience, index }: any) => {
  const IconComponent = experience.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 hidden lg:block" />

      <motion.div
        whileHover={{ y: -5 }}
        className="group relative rounded-2xl p-6 ml-0 lg:ml-20 shadow-lg hover:shadow-2xl transition-all duration-300 border overflow-hidden bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500" />

        <motion.div
          className="absolute -left-20 top-6 hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <IconComponent size={24} />
        </motion.div>

        <motion.div
          className="flex lg:hidden items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-4"
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <IconComponent size={20} />
        </motion.div>

        <div className="mb-4">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
            <div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-500 transition-colors">
                {experience.title}
              </h3>
              <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                {experience.company}
              </p>
            </div>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium">
              {experience.type}
            </span>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <FiCalendar size={14} />
              {experience.duration}
            </div>
            <div className="flex items-center gap-1">
              <FiMapPin size={14} />
              {experience.location}
            </div>
          </div>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          {experience.description}
        </p>

        <div className="mb-6">
          <h4 className="text-gray-800 dark:text-white font-semibold mb-3 flex items-center gap-2">
            <FiAward size={16} className="text-yellow-500" />
            Key Achievements
          </h4>
          <ul className="space-y-2">
            {experience.achievements.map((achievement: any, achIndex: any) => (
              <motion.li
                key={achIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + achIndex * 0.1 }}
                className="text-gray-700 dark:text-gray-300 text-sm flex items-start gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                {achievement}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {experience.tech.map((tech: any, techIndex: any) => {
            const TechIcon = techIcons[tech];
            return (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
              >
                {TechIcon && <TechIcon size={14} />}
                {tech}
              </motion.span>
            );
          })}
        </div>

        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full" />
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section className="py-20 bg-white dark:bg-neutral-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-6"
          >
            <FiBriefcase size={32} />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Professional{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My journey through the world of software development, from junior
            developer to senior roles, building impactful solutions along the
            way.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`${experience.company}-${experience.title}`}
              experience={experience}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl border border-gray-300 dark:border-gray-700">
            <div className="text-3xl font-bold text-blue-500 mb-2">2.5+</div>
            <div className="text-gray-700 dark:text-gray-300">
              Years Experience
            </div>
          </div>
          <div className="text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl border border-gray-300 dark:border-gray-700">
            <div className="text-3xl font-bold text-purple-500 mb-2">5+</div>
            <div className="text-gray-700 dark:text-gray-300">
              Projects Completed
            </div>
          </div>
          <div className="text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl border border-gray-300 dark:border-gray-700">
            <div className="text-3xl font-bold text-pink-500 mb-2">100K+</div>
            <div className="text-gray-700 dark:text-gray-300">
              Users Impacted
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
