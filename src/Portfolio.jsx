import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Code, Database, Cloud, Brain, Award, Calendar, Building, GraduationCap, User, Briefcase, FolderOpen, Star } from 'lucide-react';

// test comit
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const skills = {
    'Languages & Frameworks': ['JavaScript', 'Python', 'Node.js', 'React', 'Express.js', 'Next.js', 'Flutter', 'SQL', 'PySpark'],
    'Databases': ['MongoDB', 'MySQL', 'PostgreSQL', 'TypeORM', 'Firebase'],
    'Cloud & DevOps': ['Azure', 'Microsoft Fabric', 'Docker', 'Git', 'REST APIs'],
    'AI/ML Tools': ['LLM Agents', 'OpenAI API', 'Speech Processing', 'OCR', 'Voice Comparison']
  };

  const experiences = [
    {
      company: 'Megdap Innovation Labs',
      role: 'Software Developer',
      period: 'July 2024 - Present',
      type: 'Full-time',
      achievements: [
        'Built production-grade data pipeline in Microsoft Fabric for PVR INOX Cinemas using PySpark and Dataflows Gen2',
        'Developed document intelligence AI agent with 95% accuracy for natural language queries from Excel files',
        'Led R&D initiative with BARC India achieving 95% classification accuracy for AI-based TV content tagging'
      ]
    },
    {
      company: 'Megdap Innovation Labs',
      role: 'Software Developer Intern',
      period: 'Sep 2023 - Jun 2024',
      type: 'Internship',
      achievements: [
        'Enhanced Flutter mobile audio recording app for Google voice data project deployed across India',
        'Implemented voice verification and auto-segmentation, eliminating 100% manual segmentation tasks',
        'Built document translation application with HITL support preserving 95% original layout'
      ]
    }
  ];

  const projects = [
    {
      title: 'Real-Time Chat Application',
      description: 'Group and 1-1 chat app with image support and live updates',
      tech: ['Next.js', 'MongoDB', 'Prisma', 'Cloudinary', 'Pusher.js'],
      highlights: ['Real-time messaging', 'Image sharing', 'Group chat functionality'],
      github: 'https://github.com/AMS006/TalksMessenger' // Replace with your actual GitHub link
    },
    {
      title: 'Tiffin Management System',
      description: 'Full MERN stack web application with payment integration',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Razorpay', 'Docker'],
      highlights: ['Admin/User panels', 'Order management', 'Payment integration'],
      github: 'https://github.com/AMS006/TiffinManagment' // Replace with your actual GitHub link
    }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 opacity-40"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Anas Sain
            </div>
            <div className="hidden md:flex space-x-8">
              {['hero', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-blue-400 ${activeSection === section ? 'text-blue-400' : 'text-gray-300'
                    }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center text-center px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1 shadow-2xl shadow-purple-500/20">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                  <img
                    src="./profile-image.jpeg" // Using a placeholder, replace with your image URL
                    alt="Anas Sain"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Anas Sain
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
              Full Stack & AI-Enabled Software Engineer
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Mail size={16} />
                <span>anassain13@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Phone size={16} />
                <span>+91 93229XXXX</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <MapPin size={16} />
                <span>Pune, Maharashtra</span>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full hover:from-blue-400 hover:to-purple-400 transition-all duration-300"
              aria-label="Scroll to about section"
            >
              <ChevronDown size={24} />
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </h2>

              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    I'm a passionate Full Stack & AI-Enabled Software Engineer with expertise in building scalable applications
                    and intelligent systems. Currently working at Megdap Innovation Labs, I specialize in data engineering,
                    AI integration, and modern web development.
                  </p>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    My experience ranges from architecting production-grade data pipelines with Microsoft Fabric to developing AI-powered document intelligence systems. I thrive at the intersection of robust data engineering and applied artificial intelligence, transforming complex data into actionable insights.
                  </p>

                  <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <GraduationCap className="text-blue-400" size={24} />
                      <h3 className="text-xl font-semibold">Education</h3>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-400">B.Tech in Computer Engineering</p>
                      <p className="text-gray-300">Dr. Babasaheb Ambedkar Technological University</p>
                      <p className="text-sm text-gray-400 mt-1">2020 - 2024 • CGPA: 7.73</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Award className="text-yellow-400" size={24} />
                      <h3 className="text-xl font-semibold">Certifications</h3>
                    </div>
                    <a
                      href="https://learn.microsoft.com/api/credentials/share/en-us/AnasSain-5365/D0143A5D60A56E83?sharingId"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      <p className="font-semibold text-blue-400">Microsoft Certified: Fabric Analytics Engineer Associate</p>
                      <p className="text-sm text-gray-400 mt-1">Data Engineering & Analytics</p>
                      <div className="flex items-center gap-2 mt-2 text-blue-400 text-sm">
                        <ExternalLink size={14} />
                        <span>View Certificate</span>
                      </div>
                    </a>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-6 rounded-2xl text-center backdrop-blur-sm border border-white/10">
                      <Code className="mx-auto mb-3 text-blue-400" size={32} />
                      <p className="font-semibold">Full Stack Dev</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-2xl text-center backdrop-blur-sm border border-white/10">
                      <Brain className="mx-auto mb-3 text-purple-400" size={32} />
                      <p className="font-semibold">AI/ML Integration</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-2xl text-center backdrop-blur-sm border border-white/10">
                      <Database className="mx-auto mb-3 text-green-400" size={32} />
                      <p className="font-semibold">Data Engineering</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-2xl text-center backdrop-blur-sm border border-white/10">
                      <Cloud className="mx-auto mb-3 text-cyan-400" size={32} />
                      <p className="font-semibold">Cloud Solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className={`transition-all duration-1000 ${isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Experience
              </h2>

              <div className="space-y-8 max-w-4xl mx-auto">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                        <p className="text-lg text-blue-400 font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex flex-col md:items-end mt-3 md:mt-0">
                        <div className="flex items-center gap-2 text-gray-300">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm mt-2 ${exp.type === 'Full-time'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-blue-500/20 text-blue-400'
                          }`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3 list-inside">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Star className="text-yellow-400 flex-shrink-0 mt-1.5" size={16} />
                          <p className="text-gray-300 leading-relaxed">{achievement}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className={`transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Featured Projects
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col"
                  >
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-4">
                        <FolderOpen className="text-blue-400" size={24} />
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                      </div>
                      <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                      <h4 className="font-semibold mb-3 text-blue-400">Key Features:</h4>
                      <ul className="space-y-2 mb-6">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                            <span className="text-gray-300">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-purple-400 transition-colors"
                      >
                        <Github size={20} />
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className={`transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Skills & Technologies
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div
                    key={category}
                    className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10"
                  >
                    <h3 className="text-2xl font-bold mb-6 text-blue-400">{category}</h3>
                    <div className="flex flex-wrap gap-3">
                      {skillList.map((skill) => (
                        <div key={skill} className="flex items-center gap-2 py-2 px-4 bg-white/5 rounded-lg">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span className="font-medium">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className={`transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Let's Connect
              </h2>
              <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out.
              </p>
              <a
                href="mailto:anassain13@gmail.com"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-full hover:from-blue-400 hover:to-purple-400 transition-all duration-300 font-semibold text-lg mb-12"
              >
                <Mail size={20} />
                Send an Email
              </a>
              <div className="flex justify-center gap-8">
                <a href="https://github.com/AMS006" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/anas-sain-9b9231221/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center border-t border-white/10">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Anas Sain. Coded with ❤️
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;