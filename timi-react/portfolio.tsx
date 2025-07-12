"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Terminal,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Monitor,
  Cpu,
  Wifi,
  Play,
  Zap,
  Code,
  Palette,
} from "lucide-react"

export default function GlitchPortfolio() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [glitchMode, setGlitchMode] = useState(true)
  const [showBSOD, setShowBSOD] = useState(false)
  const [terminalLogs, setTerminalLogs] = useState<string[]>([])
  const [currentSection, setCurrentSection] = useState("intro")
  const terminalRef = useRef<HTMLDivElement>(null)

  const [isInitializing, setIsInitializing] = useState(false)
  const [initStep, setInitStep] = useState(0)
  const [showInitSequence, setShowInitSequence] = useState(false)
  const [showDesignShowcase, setShowDesignShowcase] = useState(false)

  const [activeSection, setActiveSection] = useState("intro")

  const logs = [
    "SYSTEM: Initializing portfolio.exe...",
    "WARNING: Conventional design patterns not found",
    "INFO: Loading creative.dll",
    "ERROR: Normal website template corrupted",
    "SUCCESS: Glitch aesthetic applied",
    "DEBUG: User engagement levels rising",
    "SYSTEM: All systems nominal... or are they?",
    "INFO: Coffee levels critically low",
    "WARNING: Imposter syndrome detected",
    "SUCCESS: Another day, another bug fixed",
  ]

  const projects = [
    {
      title: "FlickTicketPro",
      description: "Full-stack movie ticket booking app using React, Tailwind CSS, and Laravel",
      tech: ["React", "Tailwind CSS", "Laravel", "MySQL"],
      status: "DEPLOYED",
    },
    {
      title: "SoleMate",
      description: "Mobile shoe laundry app with Firebase integration and modern UI design",
      tech: ["Android Studio", "Firebase", "Java", "Material Design"],
      status: "LIVE",
    },
    {
      title: "Readify API",
      description: "RESTful Web API for digital library management using ASP.NET Core",
      tech: ["ASP.NET Core", "Entity Framework", "Swagger", "C#"],
      status: "DEPLOYED",
    },
    {
      title: "Jollibee Clone",
      description: "Responsive website clone focusing on UI consistency and interaction behavior",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      status: "ARCHIVED",
    },
  ]

  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "Vue.js", "Tailwind", "Bootstrap"], level: 95 },
    { category: "Backend", items: ["PHP", "Laravel", "ASP.NET Core", "MySQL", "Firebase"], level: 88 },
    { category: "Design", items: ["UI/UX", "Graphic Design", "Figma", "Adobe Creative Suite"], level: 92 },
    { category: "Other", items: ["Broadcasting", "vMix", "Team Collaboration", "Problem Solving"], level: 85 },
  ]

  const initSteps = [
    { text: "SYSTEM: Loading design principles...", icon: <Palette className="w-4 h-4" /> },
    { text: "LOADING: UI/UX frameworks...", icon: <Monitor className="w-4 h-4" /> },
    { text: "SCANNING: Creative portfolio...", icon: <Code className="w-4 h-4" /> },
    { text: "ANALYZING: User experience patterns...", icon: <Zap className="w-4 h-4" /> },
    { text: "ESTABLISHING: Visual hierarchy...", icon: <Terminal className="w-4 h-4" /> },
    { text: "SUCCESS: Design system activated!", icon: <Play className="w-4 h-4" /> },
  ]

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setTerminalLogs((prev) => {
        const newLog = logs[Math.floor(Math.random() * logs.length)]
        const updated = [...prev, `[${new Date().toLocaleTimeString()}] ${newLog}`]
        return updated.slice(-5)
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [terminalLogs])

  const handleInitialize = async () => {
    if (isInitializing) return

    setIsInitializing(true)
    setShowInitSequence(true)
    setShowDesignShowcase(true)
    setInitStep(0)

    // Design-focused initialization sequence
    for (let i = 0; i < initSteps.length; i++) {
      setInitStep(i)
      await new Promise((resolve) => setTimeout(resolve, 400)) // Balanced timing for visual impact
    }

    // Add design-focused log
    setTerminalLogs((prev) => [
      ...prev,
      `[${new Date().toLocaleTimeString()}] DESIGN: Portfolio initialized with visual excellence!`,
    ])

    // Smooth transition to about section
    setTimeout(() => {
      const aboutSection = document.querySelector('[data-section="about"]')
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth", block: "start" })
      }
      setShowInitSequence(false)
      setShowDesignShowcase(false)
      setIsInitializing(false)
    }, 800)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setActiveSection(sectionId)
    }
  }

  const handleGlitchToggle = () => {
    setGlitchMode((prev) => !prev)
    console.log("Glitch mode toggled:", !glitchMode)
  }

  if (!isLoaded) {
    return (
      <>
        <div className="min-h-screen bg-white flex items-center justify-center font-mono">
          <div className="text-center space-y-4">
            <div className="text-6xl font-bold text-black relative inline-block glitch-loading" data-text="404">
              404
            </div>
            <div className="text-xl text-gray-600 typing-effect">PAGE NOT FOUND_</div>
            <div className="text-sm text-gray-400 mt-8">Just kidding... Loading portfolio.exe</div>
            <div className="w-48 h-1 bg-gray-200 mx-auto overflow-hidden">
              <div className="h-full bg-gradient-to-r from-pink-500 to-cyan-500 loading-animation"></div>
            </div>
          </div>
        </div>
        <style jsx global>{`
          .glitch-loading {
            animation: glitch-load 2s infinite;
          }
          
          .glitch-loading::before,
          .glitch-loading::after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          
          .glitch-loading::before {
            animation: glitch-1 0.5s infinite;
            color: #ff00cc;
            z-index: -1;
          }
          
          .glitch-loading::after {
            animation: glitch-2 0.5s infinite;
            color: #00ffff;
            z-index: -2;
          }
          
          @keyframes glitch-load {
            0%, 100% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
          }
          
          @keyframes glitch-1 {
            0%, 100% { transform: translate(0); }
            20% { transform: translate(2px, 2px); }
            40% { transform: translate(2px, -2px); }
            60% { transform: translate(-2px, 2px); }
            80% { transform: translate(-2px, -2px); }
          }
          
          @keyframes glitch-2 {
            0%, 100% { transform: translate(0); }
            20% { transform: translate(-2px, -2px); }
            40% { transform: translate(-2px, 2px); }
            60% { transform: translate(2px, -2px); }
            80% { transform: translate(2px, 2px); }
          }
          
          .typing-effect {
            overflow: hidden;
            border-right: 2px solid #000;
            white-space: nowrap;
            animation: typing 2s steps(20, end), blink-caret 0.75s step-end infinite;
            width: fit-content;
            margin: 0 auto;
          }
          
          @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
          }
          
          @keyframes blink-caret {
            from, to { border-color: transparent; }
            50% { border-color: #000; }
          }
          
          .loading-animation {
            animation: loading 2s ease-in-out infinite;
          }
          
          @keyframes loading {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}</style>
      </>
    )
  }

  return (
    <>
      <div
        className={`min-h-screen bg-white font-mono relative overflow-x-hidden transition-all duration-300 ${glitchMode ? "glitch-active" : "clean-active"}`}
      >
        {/* Scan Lines Effect - Only in Glitch Mode */}
        {glitchMode && (
          <div className="fixed inset-0 pointer-events-none z-10 opacity-20">
            <div className="scan-lines-effect"></div>
          </div>
        )}

        {/* Static Noise Effect - Only in Glitch Mode */}
        {glitchMode && (
          <div className="fixed inset-0 pointer-events-none z-5 opacity-5">
            <div className="static-noise"></div>
          </div>
        )}

        {/* BSOD Easter Egg */}
        {showBSOD && (
          <div className="fixed inset-0 bg-blue-600 text-white z-50 flex items-center justify-center font-mono">
            <div className="text-center space-y-4 p-8">
              <div className="text-4xl font-bold">:(</div>
              <div className="text-xl">Your PC ran into a problem and needs to restart.</div>
              <div className="text-sm">We're just collecting some error info, and then we'll restart for you.</div>
              <div className="text-xs mt-8">
                Error: DEVELOPER_TOO_AWESOME
                <br />
                Stop code: 0x000000COFFEE
              </div>
              <Button onClick={() => setShowBSOD(false)} className="mt-4 bg-white text-blue-600 hover:bg-gray-100">
                [RESTART]
              </Button>
            </div>
          </div>
        )}

        {/* Design Showcase Overlay */}
        {showDesignShowcase && (
          <div className="fixed inset-0 z-30 pointer-events-none">
            <div className="design-particles"></div>
            <div className="design-grid"></div>
          </div>
        )}

        {/* Enhanced Initialization Sequence Overlay */}
        {showInitSequence && (
          <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black text-white z-40 flex items-center justify-center font-mono">
            <div className="text-center space-y-6 p-8 max-w-lg relative">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="design-orbs"></div>
              </div>

              <div className="relative z-10">
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                  DESIGN SYSTEM
                </div>
                <div className="text-sm text-gray-400 mb-8">Initializing creative portfolio...</div>

                <div className="space-y-3">
                  {initSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                        index <= initStep
                          ? index === initStep
                            ? "bg-gradient-to-r from-pink-500/20 to-cyan-500/20 border border-pink-500/30 text-white scale-105"
                            : "bg-gray-800/50 text-green-400 border border-green-500/30"
                          : "bg-gray-900/30 text-gray-600 border border-gray-700/30"
                      }`}
                    >
                      <div
                        className={`transition-all duration-200 ${index <= initStep ? "text-current" : "text-gray-600"}`}
                      >
                        {index <= initStep ? (
                          step.icon
                        ) : (
                          <div className="w-4 h-4 rounded-full border border-current"></div>
                        )}
                      </div>
                      <span className="text-sm">{step.text}</span>
                      {index === initStep && (
                        <div className="ml-auto">
                          <div className="w-2 h-2 bg-current rounded-full animate-ping"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-2">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Design Progress</span>
                    <span>{Math.round(((initStep + 1) / initSteps.length) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 h-3 rounded-full transition-all duration-300 ease-out relative"
                      style={{ width: `${((initStep + 1) / initSteps.length) * 100}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Header */}
        <header className="p-6 border-b border-gray-200 relative">
          <div className="flex justify-between items-center max-w-6xl mx-auto">
            <div className="flex items-center space-x-4">
              <Terminal className="w-6 h-6" />
              <span className="text-xl font-bold">timothy.exe</span>
              <span className="text-xs text-gray-500 font-mono">[{glitchMode ? "GLITCH_MODE" : "CLEAN_MODE"}]</span>
              <span className="text-xs text-gray-400 font-mono">ACTIVE: {activeSection.toUpperCase()}</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handleGlitchToggle}
                className={`font-mono border-2 transition-all duration-200 ${
                  glitchMode
                    ? "border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
                    : "border-black text-black hover:bg-black hover:text-white"
                }`}
              >
                [{glitchMode ? "CLEAN" : "GLITCH"}]
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowBSOD(true)}
                className="font-mono border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              >
                [PANIC]
              </Button>
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto p-6 space-y-16">
          {/* Hero Section */}
          <section className="text-center space-y-6 py-16">
            <div className="space-y-2">
              <h1
                className={`text-6xl font-bold text-black relative inline-block ${glitchMode ? "glitch-text-active" : ""}`}
                data-text="SYSTEM ERROR"
              >
                SYSTEM ERROR
              </h1>
              <p className="text-xl text-gray-600">Timothy Geraldo Manurung - UI/UX Designer & Developer</p>
              <p className="text-sm text-gray-500">Informatics Engineering Student | Multimedia Specialist</p>
            </div>
            <div className="flex justify-center space-x-4">
              <Button
                onClick={handleInitialize}
                disabled={isInitializing}
                className={`
                  relative overflow-hidden group
                  bg-gradient-to-r from-gray-900 to-black 
                  text-white font-mono text-lg px-8 py-4
                  border-2 border-transparent
                  transition-all duration-300 ease-out
                  hover:scale-105 hover:shadow-2xl
                  active:scale-95
                  ${isInitializing ? "animate-pulse cursor-not-allowed" : "hover:border-pink-500/50"}
                `}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                {/* Button Content */}
                <div className="relative flex items-center space-x-2">
                  {isInitializing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>INITIALIZING DESIGN...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5" />
                      <span>INITIALIZE PORTFOLIO</span>
                    </>
                  )}
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-500 to-cyan-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10"></div>
              </Button>

              <Button
                variant="outline"
                className="border-black font-mono hover:bg-black hover:text-white bg-transparent px-6 py-4"
                onClick={() => scrollToSection("projects")}
              >
                [VIEW PROJECTS]
              </Button>
            </div>
          </section>

          {/* Who Dis Section */}
          <section className="space-y-8" data-section="about">
            <h2
              className={`text-3xl font-bold text-black border-l-4 border-pink-500 pl-4 ${glitchMode ? "glitch-text-active" : ""}`}
              data-text="WHO DIS?"
            >
              WHO DIS?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card
                className={`p-6 border-2 transition-all duration-300 ${glitchMode ? "border-black hover:border-pink-500" : "border-gray-300 hover:border-black"}`}
              >
                <div className="space-y-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-pink-500 to-cyan-500 rounded-lg flex items-center justify-center text-4xl">
                    👨‍💻
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Timothy Geraldo Manurung</h3>
                    <p className="text-gray-600">UI/UX Designer & Full Stack Developer</p>
                    <p className="text-sm text-gray-500">Informatics Engineering Student</p>
                  </div>
                </div>
              </Card>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Third-year Informatics Engineering student at Universitas Advent Indonesia with a passion for creating
                  exceptional digital experiences. Proficient in full-stack development with expertise in UI/UX design,
                  graphic design, and multimedia production.
                </p>
                <p className="text-gray-700">
                  Currently serving as Multimedia Officer for multiple organizations, combining technical skills with
                  creative vision to deliver impactful visual solutions.
                </p>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="font-mono bg-transparent border-black hover:bg-black hover:text-white"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    [GITHUB]
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="font-mono bg-transparent border-black hover:bg-black hover:text-white"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    [LINKEDIN]
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="space-y-8" data-section="projects">
            <h2
              className={`text-3xl font-bold text-black border-l-4 border-cyan-500 pl-4 ${glitchMode ? "glitch-text-active" : ""}`}
              data-text="404 PROJECTS FOUND"
            >
              404 PROJECTS FOUND
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className={`p-6 border-2 transition-all duration-300 ${glitchMode ? "border-gray-400 hover:border-cyan-500" : "border-gray-300 hover:border-black"}`}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <span
                        className={`text-xs px-2 py-1 rounded font-mono ${
                          project.status === "DEPLOYED"
                            ? "bg-green-100 text-green-800"
                            : project.status === "BETA"
                              ? "bg-yellow-100 text-yellow-800"
                              : project.status === "LIVE"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs bg-gray-100 px-2 py-1 rounded font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="font-mono w-full bg-transparent border-black hover:bg-black hover:text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      [VIEW PROJECT]
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="space-y-8" data-section="skills">
            <h2
              className={`text-3xl font-bold text-black border-l-4 border-pink-500 pl-4 ${glitchMode ? "glitch-text-active" : ""}`}
              data-text="SYSTEM SPECS"
            >
              SYSTEM SPECS
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  className={`p-6 border-2 transition-all duration-300 ${glitchMode ? "border-gray-400" : "border-gray-300"}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      {skill.category === "Frontend" && <Monitor className="w-5 h-5" />}
                      {skill.category === "Backend" && <Cpu className="w-5 h-5" />}
                      {skill.category === "Design" && <Palette className="w-5 h-5" />}
                      {skill.category === "Other" && <Wifi className="w-5 h-5" />}
                      <h3 className="text-lg font-bold">{skill.category}</h3>
                    </div>
                    <div className="space-y-2">
                      {skill.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="text-sm text-gray-600 font-mono">
                          • {item}
                        </div>
                      ))}
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Proficiency</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 h-2 rounded">
                        <div
                          className={`h-2 rounded transition-all duration-1000 ${
                            glitchMode
                              ? "bg-gradient-to-r from-pink-500 to-cyan-500"
                              : "bg-gradient-to-r from-gray-600 to-black"
                          }`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="space-y-8" data-section="contact">
            <h2
              className={`text-3xl font-bold text-black border-l-4 border-cyan-500 pl-4 ${glitchMode ? "glitch-text-active" : ""}`}
              data-text="PING ME"
            >
              PING ME
            </h2>
            <Card
              className={`p-8 border-2 transition-all duration-300 ${glitchMode ? "border-black" : "border-gray-300"}`}
            >
              <div className="text-center space-y-6">
                <div className="text-6xl">📡</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Connection Established</h3>
                  <p className="text-gray-600 mb-2">Ready to collaborate on your next project?</p>
                  <p className="text-sm text-gray-500">geraldomanroe@gmail.com | +62 812 1276 7733</p>
                </div>
                <div className="flex justify-center space-x-4">
                  <Button className="bg-black text-white hover:bg-gray-800 font-mono">
                    <Mail className="w-4 h-4 mr-2" />
                    [SEND MESSAGE]
                  </Button>
                  <Button
                    variant="outline"
                    className="border-black font-mono hover:bg-black hover:text-white bg-transparent"
                  >
                    [DOWNLOAD CV]
                  </Button>
                </div>
              </div>
            </Card>
          </section>
        </main>

        {/* Terminal Log Footer */}
        <footer className="bg-black text-green-400 p-4 font-mono text-xs">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center space-x-2 mb-2">
              <Terminal className="w-4 h-4" />
              <span>SYSTEM LOG</span>
              <span className="text-gray-500">- MODE: {glitchMode ? "GLITCH" : "CLEAN"}</span>
            </div>
            <div ref={terminalRef} className="h-24 overflow-y-auto space-y-1 bg-gray-900 p-2 rounded">
              {terminalLogs.map((log, index) => (
                <div key={index} className="opacity-80">
                  {log}
                </div>
              ))}
            </div>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        /* Enhanced Design-Focused Animations */
        .design-particles {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 20%, rgba(255, 0, 204, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 40% 60%, rgba(147, 51, 234, 0.1) 0%, transparent 50%);
          animation: designFloat 8s ease-in-out infinite;
        }

        .design-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 10s linear infinite;
        }

        .design-orbs {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 10% 10%, rgba(255, 0, 204, 0.2) 0%, transparent 30%),
            radial-gradient(circle at 90% 90%, rgba(0, 255, 255, 0.2) 0%, transparent 30%),
            radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.15) 0%, transparent 40%);
          animation: orbPulse 4s ease-in-out infinite;
        }

        @keyframes designFloat {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(10px, -10px) rotate(90deg); }
          50% { transform: translate(-5px, 5px) rotate(180deg); }
          75% { transform: translate(-10px, -5px) rotate(270deg); }
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes orbPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        /* Enhanced Button Animations */
        .group:hover .shimmer {
          animation: shimmer 0.7s ease-out;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        /* Glitch Text Effects */
        .glitch-text-active {
          animation: glitch-main 2s infinite;
        }
        
        .glitch-text-active::before,
        .glitch-text-active::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.8;
        }
        
        .glitch-text-active::before {
          animation: glitch-before 0.3s infinite;
          color: #ff00cc;
          z-index: -1;
        }
        
        .glitch-text-active::after {
          animation: glitch-after 0.3s infinite;
          color: #00ffff;
          z-index: -2;
        }
        
        @keyframes glitch-main {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-1px, 1px); }
          40% { transform: translate(-1px, -1px); }
          60% { transform: translate(1px, 1px); }
          80% { transform: translate(1px, -1px); }
        }
        
        @keyframes glitch-before {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(2px, 2px); }
          40% { transform: translate(2px, -2px); }
          60% { transform: translate(-2px, 2px); }
          80% { transform: translate(-2px, -2px); }
        }
        
        @keyframes glitch-after {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, -2px); }
          40% { transform: translate(-2px, 2px); }
          60% { transform: translate(2px, -2px); }
          80% { transform: translate(2px, 2px); }
        }
        
        /* Scan Lines Effect */
        .scan-lines-effect {
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 0, 0, 0.1) 2px,
            rgba(0, 0, 0, 0.1) 4px
          );
          animation: scan-move 0.1s linear infinite;
        }
        
        @keyframes scan-move {
          0% { transform: translateY(0); }
          100% { transform: translateY(4px); }
        }
        
        /* Static Noise Effect */
        .static-noise {
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle, transparent 20%, rgba(255, 255, 255, 0.3) 21%, rgba(255, 255, 255, 0.3) 34%, transparent 35%, transparent),
            linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent);
          background-size: 50px 50px;
          animation: static-move 0.5s steps(20, end) infinite;
        }
        
        @keyframes static-move {
          0% { transform: translate(0, 0); }
          10% { transform: translate(-5px, -5px); }
          20% { transform: translate(-10px, 5px); }
          30% { transform: translate(5px, -10px); }
          40% { transform: translate(-5px, 15px); }
          50% { transform: translate(-10px, 5px); }
          60% { transform: translate(15px, 0); }
          70% { transform: translate(0, 10px); }
          80% { transform: translate(-15px, 0); }
          90% { transform: translate(10px, 5px); }
          100% { transform: translate(5px, 0); }
        }
        
        /* Custom Cursor */
        .glitch-active {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" fill="none" stroke="%23ff00cc" strokeWidth="2"/><circle cx="10" cy="10" r="2" fill="%23ff00cc"/></svg>'), auto;
        }
        
        .clean-active {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" fill="none" stroke="black" strokeWidth="2"/><circle cx="10" cy="10" r="2" fill="black"/></svg>'), auto;
        }
        
        button:hover {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><polygon points="10,2 18,18 10,14 2,18" fill="black"/></svg>'), pointer;
        }
        
        /* Smooth transitions for mode switching */
        .glitch-active * {
          transition: border-color 0.3s ease, background-color 0.3s ease, color 0.3s ease;
        }
        
        .clean-active * {
          transition: border-color 0.3s ease, background-color 0.3s ease, color 0.3s ease;
        }
      `}</style>
    </>
  )
}
