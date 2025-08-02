import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiTwitter,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiCheck
} from 'react-icons/fi';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredCard, setHoveredCard]:any = useState(null);

  const handleInputChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
  {
    id: 1,
    icon: FiMail,
    title: 'Email',
    value: 'sakshishinde2875@gmail.com',
    description: 'Drop me a line anytime',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    icon: FiPhone,
    title: 'Phone',
    value: '8766779400',
    description: "Let's have a conversation",
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 3,
    icon: FiMapPin,
    title: 'Location',
    value: 'Pune, Maharashtra',
    description: 'Available for remote work',
    color: 'from-purple-500 to-pink-500'
  }
];

  const socialLinks = [
  {
    icon: FiLinkedin,
    href: 'https://www.linkedin.com/in/sakshi-shinde-268316301/',
    color: 'hover:text-blue-600 dark:hover:text-blue-400'
  },
  {
    icon: FiGithub,
    href: 'https://github.com/saksha24',
    color: 'hover:text-gray-800 dark:hover:text-white'
  }
];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const cardVariants:any = {
    hover: { scale: 1.05, y: -10, transition: { duration: 0.3, ease: 'easeOut' } }
  };

  const floatingElements = Array.from({ length: 6 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20"
      animate={{ x: [0, 100, 0], y: [0, -100, 0], scale: [1, 1.5, 1] }}
      transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
      style={{ left: `${10 + i * 15}%`, top: `${20 + i * 10}%` }}
    />
  ));

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 relative overflow-hidden transition-colors duration-500">
      {floatingElements}
      <motion.div className="relative z-10 container mx-auto px-6 py-20" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h1 className="text-6xl md:text-7xl font-bold text-neutral-900 dark:text-white mb-6" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
            Let's <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Connect</span>
          </motion.h1>
          <motion.p className="text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto" variants={itemVariants}>
            Ready to bring your ideas to life? Let's start a conversation and create something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">Get in Touch</h2>
            <div className="space-y-6 mb-12">
              {contactInfo.map((info) => (
                <motion.div
                  key={info.id}
                  className="group relative bg-neutral-200 dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300"
                  variants={cardVariants}
                  whileHover="hover"
                  onHoverStart={() => setHoveredCard(info.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-neutral-900 dark:text-white font-semibold text-lg">{info.title}</h3>
                      <p className="text-neutral-700 dark:text-neutral-300">{info.value}</p>
                      <p className="text-neutral-500 dark:text-neutral-400 text-sm">{info.description}</p>
                    </div>
                  </div>
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 rounded-2xl`}
                    animate={{ opacity: hoveredCard === info.id ? 0.1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>

            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 bg-neutral-200 dark:bg-neutral-800 rounded-full flex items-center justify-center text-neutral-500 dark:text-neutral-400 ${social.color} transition-all duration-300 hover:scale-110`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="bg-neutral-200 dark:bg-neutral-800 rounded-3xl p-8 border border-neutral-300 dark:border-neutral-700 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">Send Message</h2>
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative">
                      <FiUser className="absolute left-4 top-5 text-neutral-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className="w-full bg-neutral-100 dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 rounded-xl px-12 py-4 text-neutral-900 dark:text-white placeholder-neutral-400 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                        required
                      />
                    </div>
                    <div className="relative">
                      <FiMail className="absolute left-4 top-5 text-neutral-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        className="w-full bg-neutral-100 dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 rounded-xl px-12 py-4 text-neutral-900 dark:text-white placeholder-neutral-400 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                        required
                      />
                    </div>
                    <div className="relative">
                      <FiMessageSquare className="absolute left-4 top-5 text-neutral-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your Message"
                        rows={5}
                        className="w-full bg-neutral-100 dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 rounded-xl px-12 py-4 text-neutral-900 dark:text-white placeholder-neutral-400 focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none"
                        required
                      />
                    </div>
                    <motion.button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FiSend className="w-5 h-5" />
                      <span>Send Message</span>
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div key="success" className="text-center py-12" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                    <motion.div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6" animate={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                      <FiCheck className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-neutral-700 dark:text-neutral-300">Thanks for reaching out. I'll get back to you soon!</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        <motion.div className="text-center mt-20" variants={itemVariants}>
          <motion.div className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 rounded-2xl">
            <div className="bg-neutral-100 dark:bg-neutral-900 rounded-2xl px-8 py-4">
              <p className="text-neutral-700 dark:text-neutral-300 text-lg">
                Available for freelance projects • <span className="text-neutral-900 dark:text-white font-semibold">Let's collaborate!</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactPage;