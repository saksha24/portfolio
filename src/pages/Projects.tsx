import { motion } from 'framer-motion';
import {
  FiGithub,
  FiCode,
  FiLayers,
  FiZap
} from 'react-icons/fi';
import {
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql
} from 'react-icons/si';

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern developer portfolio built with React, Tailwind CSS, and Framer Motion. Supports theme switching, responsive layout, and 3D elements using @react-three/fiber.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Three.js"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://your-portfolio.vercel.app",
  },
  {
    title: "Notes Management System",
    description:
      "A full-stack application to manage, create, and organize notes securely access and CRUD functionality.",
    tech: ["Angular", "Spring Boot", "MySQL"],
    github: "https://github.com/yourusername/notes-management",
    demo: "",
  },
  {
    title: "Workflow Application",
    description:
      "A workflow management system that helps add employee, employee information, update employee details, delete employee, shows activity status across different projects and stages.",
    tech: ["Angular", "Spring Boot", "MySQL"],
    github: "https://github.com/yourusername/workflow-app",
    demo: "",
  },
   {
    title: "Naukri Clone Application",
    description:
      "A job portal platform inspired by Naukri.com, enabling users to search and apply for jobs, with recruiter and candidate dashboards.",
    tech: ["Angular", "Spring Boot", "MySQL"],
    github: "https://github.com/yourusername/naukri-clone",
    demo: "",
   },
];


const techIcons: any = {
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'TypeScript': SiTypescript,
  'Tailwind CSS': SiTailwindcss,
  'Tailwind': SiTailwindcss,
  'Node.js': SiNodedotjs,
  'MongoDB': SiMongodb,
  'PostgreSQL': SiPostgresql,
};

const categoryIcons = [FiCode, FiLayers, FiZap];

const ProjectCard = ({ project, index }: { project: any; index: any }) => {
  const IconComponent = categoryIcons[index % categoryIcons.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border overflow-hidden 
                 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500" />

      <motion.div
        className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-4"
        whileHover={{ rotate: 5, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <IconComponent size={24} />
      </motion.div>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors">
        {project.title}
      </h3>

      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech: any, techIndex: any) => {
          const TechIcon = techIcons[tech];
          return (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + techIndex * 0.05 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 
                         bg-gray-100 dark:bg-gray-700 
                         text-gray-800 dark:text-gray-300 
                         rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
            >
              {TechIcon && <TechIcon size={14} />}
              {tech}
            </motion.span>
          );
        })}
      </div>

      {/* <div className="flex gap-3">
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
        >
          <FiGithub size={16} />
          GitHub
        </motion.a>

        <motion.a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          <FiExternalLink size={16} />
          Demo
        </motion.a>
      </div> */}

      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full" />
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <FiCode size={32} />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of projects that showcase my skills in modern web development,
            from interactive UIs to full-stack applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Want to see more of my work?
          </p>
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300"
          >
            <FiGithub size={20} />
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
