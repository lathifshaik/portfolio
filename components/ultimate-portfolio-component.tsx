'use client'

import Image from 'next/image';
import dp from './image.png';
import cs50x from './CS50x.jpg';
import ele from './elemetsofai.png';
import cs50p from './CS50P.jpg';
import big from './big.png';
import cor from './cor.jpg';
import iso from './fetured-scaled.jpg';
import work from './workout.png';
import workoutapp from './R.jpeg';
import { useState, useEffect, useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { ChevronDownIcon, BriefcaseIcon, BookOpenIcon, AwardIcon, CodeIcon, StarIcon, GithubIcon, LinkedinIcon, MailIcon, ExternalLinkIcon, SunIcon, MoonIcon, MenuIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { SiPython, SiSwift, SiLinux, SiCplusplus, SiGo, SiMysql, SiCss3, SiHtml5, SiJavascript, SiNumpy, SiPandas, SiOpencv, SiScikitlearn, SiTensorflow, SiBlender, SiUnity, SiDocker, SiMicrosoftexcel, SiReact, SiDjango, SiFlask, SiMongodb, SiRedhat, SiGit, SiGithub } from 'react-icons/si'
import { FaJava, FaAws } from "react-icons/fa";

export function UltimatePortfolioComponentComponent() {
  const [activeSection, setActiveSection] = useState('about')
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const projectsRef = useRef<HTMLDivElement>(null)
  const certificationsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkMode(prefersDarkMode)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const skillIcons = {
    Python: SiPython,
    Swift: SiSwift,
    Linux: SiLinux,
    "C/C++": SiCplusplus,
    Java: FaJava,
    Go: SiGo,
    SQL: SiMysql,
    CSS: SiCss3,
    HTML: SiHtml5,
    JavaScript: SiJavascript,
    NumPy: SiNumpy,
    Pandas: SiPandas,
    OpenCV: SiOpencv,
    "Scikit-learn": SiScikitlearn,
    TensorFlow: SiTensorflow,
    Blender: SiBlender,
    Unity: SiUnity,
    Docker: SiDocker,
    Excel: SiMicrosoftexcel,
    ReactJs: SiReact,
    Django: SiDjango,
    Flask: SiFlask,
    MongoDB: SiMongodb,
    MySQL: SiMysql,
    AWS: FaAws,
    "Red-Hat": SiRedhat,
    Git: SiGit,
    GitHub: SiGithub
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const projects = [
    {
      title: "Workout Application",
      description: "Developed a workout tracking application utilizing web technologies and deep learning to monitor user exercises in real time.",
      tech: "Web Development, Deep Learning, MediaPipe",
      link: "https://github.com/lathifshaik/Workout",
      image: workoutapp
    },
    {
      title: "Human Action Recognition in Videos",
      description: "Implemented a deep learning model for human action recognition in videos using CNNs and LSTMs.",
      tech: "Keras, TensorFlow, OpenCV, NumPy, Matplotlib, scikit-learn",
      link: "https://github.com/lathifshaik/Human-Action-Recognition-in-Videos-using-Keras-CNN-LSTM-",
      image: work
    },
    {
      title: "Anomaly Detection in NYC taxi demand",
      description: "Utilized Isolation Forest to detect outliers in NYC taxi demand data, facilitating anomaly detection.",
      tech: "Numpy, Pandas, matplotlib, scikit-learn, Isolation Forest",
      link: "https://github.com/lathifshaik/Anomoly-Detection-in-NYC-taxi-demand",
      image: iso
    }
  ];

  const certifications = [
    {
      name: "CS50X Introduction to Computer Science",
      issuer: "Harvard University",
      image: cs50x
    },
    {
      name: "CS50P Introduction to Programming with Python",
      issuer: "Harvard University",
      image: cs50p
    },
    {
      name: "Elements of AI (Introduction to AI)",
      issuer: "University of Helsinki",
      image: ele
    },
    {
      name: "Google Cloud Big Data and Machine Learning Fundamentals",
      issuer: "Google Cloud Training Online",
      image: big
    },
    {
      name: "Natural Language Processing Specialization",
      issuer: "Coursera",
      image: cor
    }
  ];

  const scroll = (ref: React.RefObject<HTMLDivElement>, scrollOffset: number) => {
    if (ref.current) {
      ref.current.scrollTo({
        left: ref.current.scrollLeft + scrollOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition-colors duration-300`}>
      {/* Background animation */}
      <motion.div
        className="fixed inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className={`absolute inset-0 ${darkMode ? 'bg-blue-500' : 'bg-yellow-300'} opacity-10`}
            initial={{ rotate: 0, scale: 1 }}
            animate={{ 
              rotate: 360,
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 15 + index * 2,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              transformOrigin: `${Math.random() * 100}% ${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>
      
      {/* Header */}
      <header className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} bg-opacity-90 backdrop-blur-sm shadow-md transition-colors duration-300`}>
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl"
            aria-label="Toggle menu"
          >
            <MenuIcon />
          </button>
          <ul className={`${menuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 absolute md:relative left-0 right-0 top-full md:top-auto bg-white md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent p-4 md:p-0 shadow-md md:shadow-none`}>
            {['About', 'Education', 'Experience', 'Projects', 'Skills', 'Certifications', 'Achievements'].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <button
                  onClick={() => {
                    setActiveSection(item.toLowerCase())
                    setMenuOpen(false)
                  }}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.toLowerCase() ? 'text-blue-600' : darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {item}
                </button>
              </motion.li>
            ))}
          </ul>
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-800'} transition-colors duration-300`}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
          </button>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12 relative z-10">
        {/* Hero section */}
        <section id="hero" className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className={`w-48 h-48 mx-auto ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-full shadow-lg overflow-hidden transition-colors duration-300`}>
              <Image 
                src={dp}
                alt="Abdul Lathif Shaik" 
                width={200}  
                height={200} 
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.h1 
            className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Abdul Lathif Shaik
          </motion.h1>
          <motion.p 
            className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Web Developer | Data Scientist | Machine Learning Enthusiast
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.a 
              href="mailto:i.lathifshaik@gmail.com" 
              className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors flex items-center ${darkMode ? 'hover:bg-blue-500' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MailIcon className="mr-2" size={18} />
              Contact Me
            </motion.a>
            <motion.a 
              href="https://github.com/lathifshaik" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-800 hover:bg-gray-900'} text-white font-bold py-2 px-6 rounded-full transition-colors flex items-center`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GithubIcon className="mr-2" size={18} />
              GitHub
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/abdullathifsk/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-full transition-colors flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LinkedinIcon className="mr-2" size={18} />
              LinkedIn
            </motion.a>
            <motion.a 
              href="https://leetcode.com/lathifshaik/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition-colors flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CodeIcon className="mr-2" size={18} />
              LeetCode
            </motion.a>
          </motion.div>
        </section>

        {/* About section */}
        <motion.section id="about" className="mb-20" {...fadeInUp}>
          <h2 className={`text-3xl font-bold mb-6 flex items-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            <ChevronDownIcon className="mr-2" /> About Me
          </h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
          I&#39;m a Computer Science graduate with a strong foundation in web development, data science, and machine learning. Having completed my BTech from Lovely Professional University, I am now deeply focused on researching Machine Learning and Deep Learning, driven by a passion for solving real-world problems through cutting-edge technology.

          </p>
        </motion.section>

        {/* Education section */}
        <motion.section id="education" className="mb-20" {...fadeInUp}>
          <h2 className={`text-3xl font-bold mb-6 flex items-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            <BookOpenIcon className="mr-2" /> Education
          </h2>
          <div className="space-y-6">
            {[
              {
                school: "Lovely Professional University, Pagwara, Punjab, India",
                degree: "BTech in Computer Science (Hons)",
                date: "Grad: July 2024",
                gpa: "Current CGPA: 7.73 / 10.0"
              },
              {
                school: "Sri Chaitanay Jr Boys College, AP, India",
                date: "Grad: Mar 2020",
                gpa: "CGPA: 9.69 / 10.0"
              },
              {
                school: "Sri Chaitanay EM High School, AP, India",
                date: "Grad: Apr 2018",
                gpa: "CGPA: 9.3 / 10.0"
              }
            ].map((edu, index) => (
              <motion.div 
                key={index}
                className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-lg transition-colors duration-300`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{edu.school}</h3>
                {edu.degree && <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{edu.degree}</p>}
                <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>{edu.date}</p>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>{edu.gpa}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience section */}
        <motion.section id="experience" className="mb-20" {...fadeInUp}>
          <h2 className={`text-3xl font-bold mb-6 flex items-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            <BriefcaseIcon className="mr-2" /> Experience
          </h2>
          <motion.div 
            className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-lg transition-colors duration-300`}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Web Developer Intern (Part-Time)</h3>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>ConnectFor — Online Platform for Volunteering</p>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Feb 2022 - June 2022</p>
            <ul className={`list-disc list-inside ${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-4`}>
              <li>Directed and implemented critical website projects, ensuring efficient development and execution.</li>
              <li>Orchestrated a cohesive team of six professionals, optimizing seamless project delivery and effective management.</li>
            </ul>
          </motion.div>
        </motion.section>

        {/* Projects section with slider */}
        <motion.section id="projects" className="mb-20" {...fadeInUp}>
          <h2 className={`text-3xl font-bold mb-6 flex items-center ${darkMode ? "text-white" : "text-gray-800"}`}>
            <CodeIcon className="mr-2" /> Projects
          </h2>
          <div className="relative">
            <div 
              ref={projectsRef}
              className="flex overflow-x-scroll scrollbar-hide space-x-6 p-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className={`flex-none w-80 ${darkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-lg overflow-hidden transition-colors duration-300`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className={`text-xl font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-800"}`}>
                      {project.title}
                    </h3>
                    <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-4`}>
                      {project.description}
                    </p>
                    <p className={`${darkMode ? "text-gray-400" : "text-gray-500"} mb-4`}>
                      Technologies: {project.tech}
                    </p>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline inline-flex items-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      View Project
                      <ExternalLinkIcon className="ml-1" size={16} />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
            <button
              onClick={() => scroll(projectsRef, -300)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
              aria-label="Scroll left"
            >
              <ChevronLeftIcon />
            </button>
            <button
              onClick={() => scroll(projectsRef, 300)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
              aria-label="Scroll right"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </motion.section>

        {/* Skills section */}
        <motion.section id="skills" className="mb-20" {...fadeInUp}>
          <h2 className={`text-3xl font-bold mb-6 flex items-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            <CodeIcon className="mr-2" /> Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { category: "Languages", skills: ["Python", "Swift", "Linux", "C/C++", "Java", "Go", "SQL", "CSS", "HTML", "JavaScript"] },
              { category: "Libraries", skills: ["NumPy", "Pandas", "Matplotlib", "OpenCV", "Scikit-learn", "TensorFlow"] },
              { category: "Tools", skills: ["Blender", "Unity", "Docker", "Excel"] },
              { category: "Frameworks", skills: ["ReactJs", "Django", "Flask"] },
              { category: "Cloud/Databases", skills: ["MongoDB", "MySQL", "AWS"] },
              { category: "Administration & Tools", skills: ["Red-Hat", "Git", "GitHub"] },
              { category: "Areas of Interest", skills: ["Web Design & Development", "Data Science", "Cloud Computing", "Machine Learning", "iOS development"] },
              { category: "Soft Skills", skills: ["Team Player", "Optimistic", "Adaptable", "Sociable"] }
            ].map((skillSet, index) => (
              <motion.div 
                key={index} 
                className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 shadow-lg transition-colors duration-300`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{skillSet.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillSet.skills.map((skill, skillIndex) => {
                    const IconComponent = skillIcons[skill as keyof typeof skillIcons];
                    return IconComponent ? (
                      <motion.div
                        key={skillIndex}
                        whileHover={{ scale: 1.2 }}
                        className={darkMode ? 'text-gray-300' : 'text-gray-600'}
                        title={skill}
                      >
                        <IconComponent size={24} />
                      </motion.div>
                    ) : (
                      <span key={skillIndex} className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>{skill}</span>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications section with slider */}
        <motion.section id="certifications" className="mb-20" {...fadeInUp}>
          <h2 className={`text-3xl font-bold mb-6 flex items-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            <AwardIcon className="mr-2" /> Certifications
          </h2>
          <div className="relative">
            <div 
              ref={certificationsRef}
              className="flex overflow-x-scroll scrollbar-hide space-x-6 p-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index} 
                  className={`flex-none w-64 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 shadow-lg transition-colors duration-300`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    
                    
                    className="w-full h-32 object-cover mb-4 rounded"
                  />
                  <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{cert.name}</h3>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{cert.issuer}</p>
                </motion.div>
              ))}
            </div>
            <button
              onClick={() => scroll(certificationsRef, -300)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
              aria-label="Scroll left"
            >
              <ChevronLeftIcon />
            </button>
            <button
              onClick={() => scroll(certificationsRef, 300)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
              aria-label="Scroll right"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </motion.section>

        {/* Achievements section */}
        <motion.section id="achievements" className="mb-20" {...fadeInUp}>
          <h2 className={`text-3xl font-bold mb-6 flex items-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            <AwardIcon className="mr-2" /> Achievements
          </h2>
          <ul className="space-y-4">
            {[
              "Coding Proficiency: Successfully solved over 500+ coding problems across various platforms.",
              "Scholarship Recipient: Earned the Amazon DeepRacer scholarship through distinguished contest participation.",
              "Research Contribution: Authored one research paper, presently undergoing the publication review process."
            ].map((achievement, index) => (
              <motion.li 
                key={index} 
                className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 shadow-lg flex items-start transition-colors duration-300`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <StarIcon className="mr-2 mt-1 flex-shrink-0 text-yellow-500" />
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{achievement}</p>
              </motion.li>
            ))}
          </ul>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-800' : 'bg-gray-200'} py-8 transition-colors duration-300`}>
        <div className="container mx-auto px-6 text-center">
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>© 2024 Abdul Lathif Shaik. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <motion.a 
              href="mailto:i.lathifshaik@gmail.com" 
              className="text-blue-600 hover:underline"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Email
            </motion.a>
            <motion.a 
              href="https://github.com/lathifshaik" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              GitHub
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/abdullathifsk/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              LinkedIn
            </motion.a>
            <motion.a 
              href="https://leetcode.com/lathifshaik/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              LeetCode
            </motion.a>
          </div>
        </div>
      </footer>

      <motion.div
        className="fixed bottom-4 right-4 w-1 h-24 bg-blue-500 origin-bottom"
        style={{ scaleY: scrollYProgress }}
      />
    </div>
  )
}