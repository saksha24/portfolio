import { useRef, useEffect, useState } from "react";
import {
  FaCode,
  FaLightbulb,
  FaRocket,
  FaBrain,
  FaHeart,
  FaBolt,
} from "react-icons/fa";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const highlights = [
    { icon: FaBrain, text: "Continuous Learner" },
    { icon: FaCode, text: "Creative Builder" },
    { icon: FaRocket, text: "Tech Explorer" },
  ];

  const skills = [
    "Angular",
    "TypeScript",
    "Java",
    "HTML & CSS",
    "Tailwind CSS",
    "REST & API Integration",
    "Git & GitHub",
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-white dark:bg-neutral-900 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-blue-400/10 dark:bg-gray-900/5 rounded-full blur-3xl transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
            left: "10%",
            top: "20%",
          }}
        />
        <div
          className="absolute w-80 h-80 bg-blue-300/10 dark:bg-slate-500/5 rounded-full blur-3xl transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${
              mousePosition.y * -0.015
            }px)`,
            right: "10%",
            bottom: "30%",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Section */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="relative mb-8 flex justify-center lg:justify-start">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-blue-500/30 dark:bg-blue-500/50 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-500" />
                  <div className="relative w-48 h-48 rounded-full overflow-hidden backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/50 dark:border-white/20 shadow-2xl">
                    <div className="w-full h-full bg-slate-100 dark:bg-slate-800/50 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-slate-300 dark:bg-slate-700 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                        <FaCode className="w-16 h-16 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="group relative px-4 py-2 rounded-full backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/30 dark:border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer hover:bg-white/50 dark:hover:bg-white/15"
                  >
                    <div className="flex items-center gap-2">
                      <highlight.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm font-medium text-slate-800 dark:text-white">
                        {highlight.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Section */}
            <div
              className={`transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="backdrop-blur-xl bg-white/30 dark:bg-white/5 border border-white/30 dark:border-white/10 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:bg-white/40 dark:hover:bg-white/10">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <FaHeart className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                      Passionate Developer
                    </h3>
                  </div>

                 <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
  I’m a frontend-focused full stack developer passionate about crafting clean, scalable, and user-centered web applications. With a foundation in Angular, Java, and modern tooling, I turn ideas into functional experiences with precision and intent.
</p>

<p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
  Whether it’s designing responsive UI with Bootstrap or building robust APIs using Spring Boot, I enjoy solving complex challenges and delivering elegant code. I'm always learning, iterating, and pushing myself toward deeper technical understanding and creative growth.
</p>


                  <div className="pt-4">
                    <div className="flex items-center gap-3 mb-4">
                      <FaBolt className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-white">
                        Current Focus Areas
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm bg-slate-200 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 rounded-full border border-slate-400/50 dark:border-slate-600/50 hover:border-blue-400/50 hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Quote */}
          <div
            className={`text-center mt-16 transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <blockquote className="text-xl md:text-2xl font-light text-slate-600 dark:text-slate-400 italic max-w-3xl mx-auto">
              "The best way to predict the future is to build it, one line of
              code at a time."
            </blockquote>
          </div>
        </div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-20 left-10 opacity-20">
        <FaLightbulb className="w-8 h-8 text-blue-600 dark:text-blue-400 animate-pulse" />
      </div>
      <div className="absolute bottom-32 right-16 opacity-20">
        <FaRocket
          className="w-10 h-10 text-blue-600 dark:text-blue-400 animate-bounce"
          style={{ animationDuration: "3s" }}
        />
      </div>
    </section>
  );
};

export default AboutMe;
