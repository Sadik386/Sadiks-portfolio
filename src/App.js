import React, { useState, useEffect } from 'react';
import bookScraperImg from './image/images.webp';
import expenseTrackerImg from './image/Free-Expense-Tracker-Templates-Cute-Printables-SaturdayGift-1024x539.webp';
import portfolioImg from './image/Blog-Post-Portfolio-1170x658.webp';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'work', 'clients', 'about'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-cream font-epilogue">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-grayLight">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="text-2xl font-caveat font-bold text-primary">
              Sadik Rahman
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'skills', label: 'Skills' },
                { id: 'work', label: 'Work' },
                { id: 'clients', label: 'Experience' },
                { id: 'about', label: 'About' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-lg transition-colors duration-200 hover:text-primary ${
                    activeSection === item.id ? 'text-primary font-semibold' : 'text-secondary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`w-4 h-0.5 bg-secondary transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`}></span>
                <span className={`w-4 h-0.5 bg-secondary transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-4 h-0.5 bg-secondary transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-grayLight py-4">
              <div className="flex flex-col space-y-4">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'skills', label: 'Skills' },
                  { id: 'work', label: 'Work' },
                  { id: 'clients', label: 'Experience' },
                  { id: 'about', label: 'About' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left px-4 py-2 text-lg transition-colors duration-200 hover:text-primary ${
                      activeSection === item.id ? 'text-primary font-semibold' : 'text-secondary'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-25 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Hero Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-8">
                <h1 className="font-caveat text-5xl md:text-6xl lg:text-7xl font-bold text-secondary mb-4">
                  Hello, I'm <span className="text-gradient">MD Sadik Rahman</span>
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-secondary mb-6">
                  Full-Stack Developer & CSE Student
                </h2>
                <p className="text-lg text-secondary/70 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Motivated Computer Science student seeking Web Development opportunities. I build scalable applications with Node.js, Express.js, MongoDB, and React.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => scrollToSection('work')}
                  className="bg-primary text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  View My Work
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="border-2 border-primary text-primary px-8 py-3 rounded-md text-lg font-semibold hover:bg-primary hover:text-white transition-colors"
                >
                  About Me
                </button>
              </div>
            </div>
            
            {/* Hero Image/Visual */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-primary to-primary/70 rounded-full opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-6xl font-caveat font-bold">P</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-secondary/60 mb-12">Trusted by leading companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {['Google', 'Apple', 'Microsoft', 'Amazon', 'Meta'].map((company, index) => (
              <div key={index} className="text-2xl font-bold text-secondary/30 hover:text-primary transition-colors">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-25 bg-pinkLight">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-caveat font-bold text-secondary mb-4">
              My Skills
            </h2>
            <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
              I specialize in creating digital experiences that combine beautiful design with powerful functionality.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Backend Development',
                description: 'Node.js, Express.js, REST APIs, Mongoose',
                icon: '⚙️'
              },
              {
                title: 'Frontend Development',
                description: 'React, HTML, CSS, JavaScript',
                icon: '💻'
              },
              {
                title: 'Database Management',
                description: 'MongoDB, Database Design, CRUD Operations',
                icon: '🗄️'
              },
              {
                title: 'Web Scraping',
                description: 'Puppeteer.js for automated data extraction',
                icon: '🕷️'
              },
              {
                title: 'CMS Development',
                description: 'WordPress, Elementor, SEO Basics',
                icon: '📝'
              },
              {
                title: 'Problem Solving',
                description: 'Algorithms, debugging, technical troubleshooting',
                icon: '🧩'
              }
            ].map((skill, index) => (
              <div key={index} className="bg-white p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-secondary mb-3">{skill.title}</h3>
                <p className="text-secondary/70">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Work Section */}
      <section id="work" className="py-25">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-caveat font-bold text-secondary mb-4">
              Latest Work
            </h2>
            <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and creativity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Book Information  Web Scraper Tool',
                category: 'Web Scraping',
                description: 'Automated tool using Puppeteer.js to extract book information from various online sources',
                image: bookScraperImg,
                tech: 'Node.js, Puppeteer.js'
              },
              {
                title: 'Peace Tower Expense Management',
                category: 'Full Stack Application',
                description: 'Complete expense tracking system with user authentication and data visualization',
                image: expenseTrackerImg,
                tech: 'Node.js, Express.js, MongoDB, React'
              },
              {
                title: 'Personal Portfolio Website',
                category: 'Web Development',
                description: 'Responsive portfolio website showcasing projects and skills',
                image: portfolioImg,
                tech: 'React, Tailwind CSS, JavaScript'
              }
            ].map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${project.image})`}}></div>
                  <div className="p-6">
                    <div className="text-sm text-primary font-semibold mb-2">{project.category}</div>
                    <h3 className="text-xl font-semibold text-secondary group-hover:text-primary transition-colors mb-3">
                      {project.title}
                    </h3>
                    <p className="text-secondary/70 text-sm mb-3">{project.description}</p>
                    <div className="text-xs text-primary font-medium">{project.tech}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section id="clients" className="py-25 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-caveat font-bold text-secondary mb-4">
              Education & Experience
            </h2>
            <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
              My academic background and professional experience in computer science and web development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-cream p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-secondary mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold text-primary">Bachelor of Science</div>
                  <div className="text-secondary font-medium">Computer Science and Engineering</div>
                  <div className="text-secondary/70">Mymenshingh Engineering College</div>
                  <div className="text-sm text-secondary/60">2025 - Present</div>
                </div>
                <div>
                  <div className="font-semibold text-primary">Higher Secondary Certificate</div>
                  <div className="text-secondary/70">Rajshahi College</div>
                  <div className="text-sm text-secondary/60">2022 - 2024 | GPA: 5.00</div>
                </div>
              </div>
            </div>
            
            <div className="bg-cream p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-secondary mb-4">Skills & Technologies</h3>
              <div className="space-y-3">
                <div>
                  <div className="font-medium text-secondary mb-1">Backend Development</div>
                  <div className="text-sm text-secondary/70">Node.js, Express.js, MongoDB, Mongoose, REST APIs</div>
                </div>
                <div>
                  <div className="font-medium text-secondary mb-1">Frontend Development</div>
                  <div className="text-sm text-secondary/70">React, HTML5, CSS3, JavaScript, Tailwind CSS</div>
                </div>
                <div>
                  <div className="font-medium text-secondary mb-1">Tools & Others</div>
                  <div className="text-sm text-secondary/70">Git, Puppeteer.js, WordPress, Elementor, SEO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-25 bg-pinkLight">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <div className="w-full max-w-md mx-auto">
                <div className="w-full h-80 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white text-8xl font-caveat font-bold">Me</span>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-4xl lg:text-5xl font-caveat font-bold text-secondary mb-6">
                About Me
              </h2>
              <p className="text-lg text-secondary/80 mb-6 leading-relaxed">
                I'm a motivated Computer Science student at Mymenshingh Engineering College, passionate about web development and building scalable applications. I specialize in the MERN stack and have hands-on experience with Node.js, Express.js, MongoDB, and React.
              </p>
              <p className="text-lg text-secondary/80 mb-6 leading-relaxed">
                Currently pursuing my Bachelor of Science in Computer Science and Engineering , I've developed projects ranging from web scraping tools to full-stack expense management systems.
              </p>
              <p className="text-lg text-secondary/80 mb-8 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or learning about the latest developments in web development and software engineering.
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-primary/90 transition-colors">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-dark">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-caveat font-bold text-white mb-4 md:mb-0">
              Sadik Rahman
            </div>
            <div className="flex space-x-6">
              <a
                href="mailto:mdsadikrahman386@gmail.com"
                className="text-white/70 hover:text-white transition-colors"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/md-sadik-rahman-9b1b47307/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/mdsadikrahman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="tel:+8801628398056"
                className="text-white/70 hover:text-white transition-colors"
              >
                Phone
              </a>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/60">© 2024 Sadik Rahman. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;