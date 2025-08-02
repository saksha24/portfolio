import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiMenu,
  HiX,
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiDownload,
  HiSun,
  HiMoon,
  HiColorSwatch,
} from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Theme configurations matching your CSS structure
const colorThemes = {
  blue: { name: "Blue", class: "blue" },
  orange: { name: "Orange", class: "orange" },
  rose: { name: "Rose", class: "rose" },
  green: { name: "Green", class: "green" },
  violet: { name: "Violet", class: "violet" },
  yellow: { name: "Yellow", class: "yellow" },
  zinc: { name: "Zinc", class: "zinc" },
  slate: { name: "Slate", class: "slate" },
  stone: { name: "Stone", class: "stone" },
};

const PortfolioHeader = ({
  onNavigate,
}: {
  onNavigate: (sectionId: string) => void;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("blue");
  const [showThemePanel, setShowThemePanel] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load theme preferences and apply to document
  useEffect(() => {
    const savedTheme = localStorage.getItem("color-theme") || "blue";
    const savedMode = localStorage.getItem("dark-mode") === "true";
    setCurrentTheme(savedTheme);
    setIsDark(savedMode);

    // Apply theme classes to document
    applyTheme(savedTheme, savedMode);
  }, []);

  const applyTheme = (themeName: string, darkMode: boolean) => {
    const body = document.body;

    // Remove all existing theme classes
    Object.values(colorThemes).forEach((theme) => {
      body.classList.remove(
        theme.class,
        `dark${theme.class.charAt(0).toUpperCase() + theme.class.slice(1)}`
      );
    });
    body.classList.remove("dark");

    // Apply new theme
    if (darkMode) {
      body.classList.add("dark");
      if (themeName !== "zinc") {
        // zinc uses default dark class
        const darkThemeClass = `dark${
          themeName.charAt(0).toUpperCase() + themeName.slice(1)
        }`;
        body.classList.add(darkThemeClass);
      }
    } else {
      if (themeName !== "zinc") {
        // zinc is the default theme
        body.classList.add(
          colorThemes[themeName as keyof typeof colorThemes].class
        );
      }
    }
  };

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    localStorage.setItem("dark-mode", newMode.toString());
    applyTheme(currentTheme, newMode);
  };

  const changeColorTheme = (themeName: string) => {
    setCurrentTheme(themeName);
    localStorage.setItem("color-theme", themeName);
    applyTheme(themeName, isDark);
    setShowThemePanel(false);
  };

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/ajay-devhub", label: "GitHub" },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/ajay-shinde-a2408a1ba",
      label: "LinkedIn",
    },
  ];

  // Dynamic styles using CSS custom properties
  // const headerStyle = {
  //   backgroundColor: isScrolled
  //     ? "hsl(var(--background) / 0.8)"
  //     : "transparent",
  //   backdropFilter: isScrolled ? "blur(12px)" : "none",
  //   borderBottomColor: isScrolled ? "hsl(var(--border) / 0.2)" : "transparent",
  // };

  const logoGradientStyle = {
    background:
      "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary) / 0.8))",
  };

  // const primaryButtonStyle = {
  //   background:
  //     "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary) / 0.9))",
  //   color: "hsl(var(--primary-foreground))",
  // };

  const getThemePreviewStyle = (themeName: string) => {
    // Simplified preview colors for each theme
    const themeColors = {
      blue: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
      orange: "linear-gradient(135deg, #f97316, #ea580c)",
      rose: "linear-gradient(135deg, #f43f5e, #e11d48)",
      green: "linear-gradient(135deg, #10b981, #059669)",
      violet: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
      yellow: "linear-gradient(135deg, #eab308, #ca8a04)",
      zinc: "linear-gradient(135deg, #71717a, #52525b)",
      slate: "linear-gradient(135deg, #64748b, #475569)",
      stone: "linear-gradient(135deg, #78716c, #57534e)",
    };

    return {
      background: themeColors[themeName as keyof typeof themeColors],
    };
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "shadow-lg border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
            : "bg-transparent"
        }`}
        style={{
          borderColor: isScrolled ? "hsl(var(--border))" : "transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0"
            >
              <button
                onClick={() => onNavigate("hero")}
                className="flex items-center space-x-2"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={logoGradientStyle}
                >
                  <span className="text-white font-bold text-lg">D</span>
                </div>
                <span
                  className={`text-xl font-bold transition-colors duration-300 ${
                    isScrolled
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-800 dark:text-white"
                  }`}
                >
                  DevRitual
                </span>
              </button>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => onNavigate(item.id)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ y: -2 }}
                  className={`relative text-sm font-medium transition-colors duration-300 group ${
                    isScrolled
                      ? "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                      : "text-gray-800 dark:text-gray-300 hover:text-white dark:hover:text-white"
                  }`}
                >
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </nav>

            {/* Theme Controls & CTA & Socials */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Theme Color Switcher */}
              {/* <div className="relative">
                <motion.button
                  onClick={() => setShowThemePanel(!showThemePanel)}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    isScrolled
                      ? "text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-accent dark:hover:text-primary dark:hover:bg-accent"
                      : "text-gray-800 dark:text-gray-300 hover:text-gray-900 hover:bg-black/10 dark:hover:text-white dark:hover:bg-white/10"
                  }`}
                  aria-label="Change theme color"
                >
                  <HiColorSwatch className="w-4 h-4" />
                </motion.button>

                <AnimatePresence>
                  {showThemePanel && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 10 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 22,
                      }}
                      className="absolute top-10 right-0 w-52 p-4 rounded-xl border shadow-lg backdrop-blur-md z-50 bg-popover"
                      style={{
                        backgroundColor: "hsl(var(--popover))",
                        borderColor: "hsl(var(--border))",
                      }}
                    >
                      <p className="text-xs font-semibold mb-3 tracking-wide uppercase text-muted-foreground">
                        Theme Colors
                      </p>

                      <div className="grid grid-cols-3 gap-2">
                        {Object.entries(colorThemes).map(([key, theme]) => (
                          <motion.button
                            key={key}
                            onClick={() => changeColorTheme(key)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label={`Select ${theme.name} theme`}
                            className={`w-8 h-8 rounded-full relative transition-all ${
                              currentTheme === key
                                ? "ring-2 ring-offset-2 ring-primary ring-offset-background"
                                : ""
                            }`}
                            style={getThemePreviewStyle(key)}
                            title={theme.name}
                          >
                            {currentTheme === key && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full shadow-sm" />
                              </div>
                            )}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div> */}

              {/* Dark/Light Mode Toggle */}
              <motion.button
                onClick={toggleDarkMode}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-full transition-all duration-300 ${
                  isScrolled
                    ? "text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-accent dark:hover:text-primary dark:hover:bg-accent"
                    : "text-gray-800 dark:text-gray-300 hover:text-gray-900 hover:bg-black/10 dark:hover:text-white dark:hover:bg-white/10"
                }`}
                aria-label="Toggle dark mode"
              >
                {isDark ? (
                  <HiSun className="w-4 h-4" />
                ) : (
                  <HiMoon className="w-4 h-4" />
                )}
              </motion.button>

              {/* Social Links */}
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    isScrolled
                      ? "text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-accent dark:hover:text-primary dark:hover:bg-accent"
                      : "text-gray-800 dark:text-gray-300 hover:text-gray-900 hover:bg-black/10 dark:hover:text-white dark:hover:bg-white/10"
                  }`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}

              {/* Download CV Button */}
              <a
                href="/resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 border ${
                    isScrolled
                      ? "text-gray-700 dark:text-gray-300 border-border hover:bg-accent hover:text-foreground"
                      : "text-gray-800 dark:text-gray-300 border-black/30 dark:border-gray-600 hover:bg-white/10 dark:hover:bg-white/10"
                  }`}
                >
                  <HiDownload className="w-4 h-4" />
                  <span>Download CV</span>
                </motion.button>
              </a>

              {/* Hire Me Button */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate("contact")}
                className="px-6 py-2.5 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <HiMail className="w-4 h-4" />
                <span>Hire Me</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-md transition-all duration-300 ${
                isScrolled
                  ? "text-gray-700 dark:text-gray-300 hover:bg-accent"
                  : "text-gray-800 dark:text-gray-300 hover:bg-white/10 dark:hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-80 h-full shadow-2xl z-50 lg:hidden"
              style={{ backgroundColor: "hsl(var(--card))" }}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  {/* Theme Controls */}
                  <div className="flex items-center space-x-3">
                    <motion.button
                      onClick={toggleDarkMode}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-md transition-colors duration-200"
                      style={{ color: "hsl(var(--muted-foreground))" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "hsl(var(--accent))";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      {isDark ? (
                        <HiSun className="w-5 h-5" />
                      ) : (
                        <HiMoon className="w-5 h-5" />
                      )}
                    </motion.button>

                    <motion.button
                      onClick={() => setShowThemePanel(!showThemePanel)}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-md transition-colors duration-200"
                      style={{ color: "hsl(var(--muted-foreground))" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "hsl(var(--accent))";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      <HiColorSwatch className="w-5 h-5" />
                    </motion.button>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-md transition-colors duration-200"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "hsl(var(--accent))";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    <HiX className="w-6 h-6" />
                  </motion.button>
                </div>

                {/* Theme Color Panel */}
                <AnimatePresence>
                  {showThemePanel && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-6"
                    >
                      <p
                        className="text-sm font-medium mb-3"
                        style={{ color: "hsl(var(--muted-foreground))" }}
                      >
                        Theme Colors
                      </p>
                      <div className="grid grid-cols-3 gap-3">
                        {Object.entries(colorThemes).map(([key, theme]) => (
                          <motion.button
                            key={key}
                            onClick={() => changeColorTheme(key)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`w-10 h-10 rounded-full relative ${
                              currentTheme === key ? "ring-2 ring-offset-2" : ""
                            }`}
                            style={{
                              ...getThemePreviewStyle(key),
                            }}
                            title={theme.name}
                          >
                            {currentTheme === key && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-3 h-3 bg-white rounded-full" />
                              </div>
                            )}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation */}
                <nav className="space-y-4 mb-8">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => {
                        setIsMenuOpen(false);
                        onNavigate(item.id);
                      }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="block w-full text-left text-lg font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                      style={{ color: "hsl(var(--card-foreground))" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "hsl(var(--primary))";
                        e.currentTarget.style.backgroundColor =
                          "hsl(var(--accent))";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color =
                          "hsl(var(--card-foreground))";
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </nav>

                {/* Social Links */}
                <div className="flex items-center space-x-4 mb-8">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-full transition-colors duration-200"
                      style={{ color: "hsl(var(--muted-foreground))" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "hsl(var(--primary))";
                        e.currentTarget.style.backgroundColor =
                          "hsl(var(--accent))";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color =
                          "hsl(var(--muted-foreground))";
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div
                    className="flex items-center space-x-3"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  >
                    <HiMail className="w-5 h-5" />
                    <span className="text-sm">ajay@example.com</span>
                  </div>
                  <div
                    className="flex items-center space-x-3"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  >
                    <HiPhone className="w-5 h-5" />
                    <span className="text-sm">+91 98765 43210</span>
                  </div>
                  <div
                    className="flex items-center space-x-3"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  >
                    <HiLocationMarker className="w-5 h-5" />
                    <span className="text-sm">India / Remote</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioHeader;
