import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiArrowUp } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaJs } from 'react-icons/fa';
import { SiMongodb, SiAngular, SiIonic } from 'react-icons/si';

const PortfolioFooter = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Web Development',
    'Mobile Apps',
    'API Development',
    'Database Design',
    'UI/UX Design',
    'DevOps & Deployment'
  ];

  const techStack = [
    { icon: FaReact, name: 'React', color: 'text-blue-500' },
    { icon: SiAngular, name: 'Angular', color: 'text-red-600' },
    { icon: FaNodeJs, name: 'Node.js', color: 'text-green-500' },
    { icon: SiIonic, name: 'Ionic', color: 'text-blue-400' },
    { icon: FaJs, name: 'JavaScript', color: 'text-yellow-400' },
    { icon: SiMongodb, name: 'MongoDB', color: 'text-green-600' },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/ajay-devhub', label: 'GitHub', color: 'hover:text-gray-600 dark:hover:text-gray-300' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ajay-shinde-a2408a1ba', label: 'LinkedIn', color: 'hover:text-blue-600 dark:hover:text-blue-400' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <span className="text-xl font-bold">DevRitual</span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
                Software Engineer focused on continuous innovation and scalable solutions. Let’s turn ideas into reality.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-500 dark:text-gray-400 text-sm">
                  <HiMail className="w-4 h-4 text-blue-500" />
                  <span>ajay.devhub@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-500 dark:text-gray-400 text-sm">
                  <HiPhone className="w-4 h-4 text-green-500" />
                  <span>+91 9011 4391 56</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-500 dark:text-gray-400 text-sm">
                  <HiLocationMarker className="w-4 h-4 text-red-500" />
                  <span>Pune, India</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white text-sm transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white text-sm transition-colors duration-200 flex items-center group cursor-pointer"
                    >
                      <span className="w-1 h-1 bg-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {service}
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-6">Tech Stack</h3>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {techStack.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer group"
                  >
                    <tech.icon className={`w-6 h-6 ${tech.color} mb-2 group-hover:scale-110 transition-transform duration-200`} />
                    <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-200">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
              <div>
                <h4 className="text-sm font-medium mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 transition-all duration-200 ${social.color} hover:bg-gray-300 dark:hover:bg-gray-700`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-800">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                Get notified about my latest projects and tech insights
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="border-t border-gray-300 dark:border-gray-800 bg-gray-100/50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gray-500 dark:text-gray-400 text-sm"
              >
                © 2025 DevRitual. All rights reserved. Built with ❤️ and lots of coffee.
              </motion.p>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="mt-4 sm:mt-0 p-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white rounded-full transition-all duration-200 group"
                aria-label="Back to top"
              >
                <HiArrowUp className="w-5 h-5 group-hover:animate-bounce" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PortfolioFooter;
