import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone, Code2, Database, Cloud, ShieldCheck, Layers3, Terminal, Menu, X, Download, ExternalLink, BriefcaseBusiness, GraduationCap, Sparkles, Workflow, Cpu, CheckCircle2, BrainCircuit, Gauge, Network, Server, FileCode2, LockKeyhole, GitBranch, ScanLine, CarFront, ShieldAlert, Activity, Play, Eye } from 'lucide-react';
import './style.css';

const skills = [
  { title: 'Backend engineering', icon: Code2, items: ['Java', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Hibernate', 'REST API design', 'Microservices', 'Python'] },
  { title: 'Security & architecture', icon: ShieldCheck, items: ['Spring Security', 'JWT authentication', 'OAuth 2.0', 'RBAC', 'Tenant & plant-level authorization', 'OWASP Top 10', 'LLD & system design', 'Database design', 'Audit trails'] },
  { title: 'Data & messaging', icon: Database, items: ['MySQL', 'Redis', 'SQL optimization', 'Apache Kafka', 'ZooKeeper'] },
  { title: 'Cloud & delivery', icon: Cloud, items: ['AWS EC2', 'AWS RDS', 'AWS S3', 'IAM', 'VPC', 'Docker', 'GitHub Actions', 'Maven', 'CI/CD', 'Application deployment', 'Release support'] },
  { title: 'Quality & tools', icon: CheckCircle2, items: ['JUnit', 'Postman', 'Jira', 'Git', 'IntelliJ IDEA', 'Eclipse'] },
  { title: 'AI & computer vision', icon: BrainCircuit, items: ['Spring AI', 'AI-powered recommendations', 'Generative AI concepts', 'Python', 'YOLOv3', 'Object detection'] }
];

const experience = [
  {
    role: 'Software Development Engineer I', company: 'Future Transformation · TraceCircle', place: 'Bengaluru, India', period: 'Sep 2025 – Nov 2026', type: 'Full-time',
    intro: 'Backend engineering for a multi-organization, multi-plant SaaS platform serving suppliers and manufacturers.',
    points: [
      'Built Spring Boot REST services across product and batch lifecycle, GTIN mapping, identifier generation and manufacturing workflows.',
      'Delivered battery-management capabilities covering master data, raw materials, manufacturing batches and BPAN generation, with business-rule validation and data-consistency checks.',
      'Implemented JWT authentication, role-based access control and organization-/plant-level authorization for multi-tenant APIs.',
      'Developed analytics APIs for product creation, DPP/EOL coverage and compliance metrics, alongside CO₂e calculations across water, electricity, waste and emissions.',
      'Designed the broader TraceCircle solution at system level, contributing to technical architecture, low-level design (LLD), module boundaries, data flows and database schema design.',
      'Contributed to AI-enabled recommendation capabilities to make application workflows and user decisions more context-aware.',
      'Improved application performance through JPA/query and persistence optimization, validation and data-access improvements; collaborated with QA and product teams on reliability and maintainability.',
      'Worked on application security across JWT authentication, RBAC, organization/plant-level authorization, secure API validation, auditability and OWASP-aligned practices.',
      'Handled application deployment and release activities across AWS environments, using EC2, RDS and S3 alongside Docker, Maven and CI/CD workflows.',
      'Supported automated testing and API verification using JUnit and Postman.'
    ], tags: ['Java', 'Spring Boot', 'Spring Security', 'System Design', 'LLD', 'Database Design', 'AI Recommendations', 'Performance', 'AWS', 'CI/CD']
  },
  {
    role: 'Java Developer Intern', company: 'HulkHire Tech · Payment integration', place: 'Hyderabad, India', period: 'Sep 2024 – Nov 2024', type: 'Internship',
    intro: 'Contributed to Java/Spring Boot payment-processing services and backend integration workflows.',
    points: [
      'Developed Spring Boot payment-processing services for a system described in the resume as handling 5,000+ transactions per minute.',
      'Used asynchronous communication to improve service throughput.',
      'Integrated payment workflows through REST APIs and service-to-service calls.',
      'Added request validation, transaction-state checks and failure-recovery safeguards; deployed using AWS EC2 and RDS.'
    ], tags: ['Java', 'Spring Boot', 'REST APIs', 'Async processing', 'AWS EC2', 'AWS RDS']
  }
];

const projects = [
  {
    number: '01', category: 'PLATFORM ENGINEERING', title: 'Workflow Configuration Platform',
    description: 'A domain-agnostic workflow engine where business processes can be configured through database-managed definitions instead of workflow-specific code changes.',
    details: ['Designed configurable workflow definitions and reusable steps.', 'Built a visual drag-and-drop editor with nodes, connections, step properties and validation rules.', 'Implemented a metadata-driven form engine with reusable fields, conditional visibility and configurable validation.', 'Added centralized error handling and audit trails for configuration changes.'],
    stack: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'React', 'REST APIs'], icon: Workflow, accent: 'blue'
  },
  {
    number: '02', category: 'PRODUCTION SAAS · TRACEABILITY', title: 'TraceCircle – Manufacturing & Traceability',
    description: 'Backend services supporting product and batch lifecycle operations in a multi-organization, multi-plant manufacturing platform.',
    details: ['Product and batch lifecycle APIs.', 'GTIN mapping and identifier-generation workflows.', 'Battery master data, raw-material and manufacturing-batch modules.', 'BPAN generation with business-rule and data-consistency validation.', 'Analytics for product creation, DPP/EOL coverage and compliance.'],
    stack: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'JPA', 'AWS'], icon: Layers3, accent: 'violet'
  },
  {
    number: '03', category: 'PAYMENT SYSTEMS · INTERNSHIP', title: 'Payment Processing Integration',
    description: 'Java backend integration work focused on coordinating payment workflows and improving transaction reliability.',
    details: ['REST-based payment workflow integration.', 'Asynchronous communication between backend components.', 'Request validation and transaction-state checks.', 'Failure-recovery safeguards and AWS-backed deployment.'],
    stack: ['Java', 'Spring Boot', 'REST APIs', 'AWS EC2', 'AWS RDS'], icon: Terminal, accent: 'mint'
  },
  {
    number: '04', category: 'COMPUTER VISION · PYTHON · YOLOv3', title: 'Helmet & Number Plate Detection',
    description: 'One integrated computer-vision project with two detection capabilities: identifying helmet usage and locating vehicle number plates from visual input using YOLOv3.',
    details: ['Built the project in Python with the YOLOv3 object-detection model.', 'Applied object-detection inference to identify helmet-related objects and number-plate regions in visual input.', 'Worked across the computer-vision flow: image/video input, model inference, bounding-box localization and visual detection output.', 'Combined two detection use cases in one project to demonstrate practical application of object detection.'],
    stack: ['Python', 'YOLOv3', 'Computer Vision', 'Object Detection', 'Model Inference'], icon: BrainCircuit, accent: 'violet', visual: 'computer-vision'
  }
];

const principles = [
  ['01', 'Understand the domain', 'Translate business requirements into clear backend workflows and data models.'],
  ['02', 'Design for reliability', 'Build secure APIs with validation, consistent persistence and predictable error handling.'],
  ['03', 'Measure and improve', 'Use tests, logs and query analysis to improve quality and maintainability.']
];

function ComputerVisionVisual() {
  const [view, setView] = useState('detections');
  return <div className="cv-visual">
    <div className="cv-topbar"><span><span className="cv-live-dot"/> MODEL OUTPUT / YOLOv3</span><span>PYTHON · COMPUTER VISION</span></div>
    <div className="cv-stage">
      <div className="cv-road"><div className="cv-road-line"/><div className="cv-car-shape"><div className="cv-window"/><div className="cv-wheel wheel-left"/><div className="cv-wheel wheel-right"/></div><div className="cv-rider"><div className="cv-helmet"/><div className="cv-head"/><div className="cv-body"/><div className="cv-bike"/></div>
        {view === 'detections' && <><div className="cv-box helmet-box"><span>HELMET</span></div><div className="cv-box plate-box"><span>NUMBER PLATE</span></div></>}
        {view === 'pipeline' && <div className="cv-inference"><span>INPUT FRAME</span><ArrowRight size={15}/><span>YOLOv3</span><ArrowRight size={15}/><span>DETECTION OUTPUT</span></div>}
      </div>
    </div>
    <div className="cv-controls"><button className={view === 'detections' ? 'selected' : ''} onClick={() => setView('detections')}><Eye size={13}/> Detection view</button><button className={view === 'pipeline' ? 'selected' : ''} onClick={() => setView('pipeline')}><Activity size={13}/> Pipeline view</button></div>
    <div className="cv-detection-row"><div><ShieldAlert size={16}/><span><b>Helmet detection</b><small>Object localization</small></span></div><div><CarFront size={16}/><span><b>Number plate detection</b><small>Region localization</small></span></div></div>
    <div className="cv-footer"><span>CONCEPTUAL VISUALIZATION · NOT A LIVE MODEL FEED</span><span>PYTHON / YOLOv3</span></div>
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('ameer-portfolio-theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'); }
    catch { return 'dark'; }
  });
  useEffect(() => { try { localStorage.setItem('ameer-portfolio-theme', theme); } catch {} }, [theme]);
  const closeMenu = () => setMenuOpen(false);
  const nav = [['About', '#about'], ['Experience', '#experience'], ['System design', '#system-design'], ['Projects', '#projects'], ['Skills', '#skills'], ['Contact', '#contact']];
  return <div className="app-shell" data-theme={theme}>
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <div className="noise" />
    <header className="topbar">
      <a className="brand" href="#home" onClick={closeMenu}>AMEER<span>.DEV</span></a>
      <nav id="primary-navigation" aria-label="Primary navigation" className={menuOpen ? 'nav nav-open' : 'nav'}>{nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}<a className="nav-cta" href="mailto:shaikameerjann@gmail.com" onClick={closeMenu}>Let's talk <ArrowUpRight size={14}/></a></nav>
      <div className="header-actions"><button className="theme-toggle" type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>{theme === 'dark' ? <Sparkles size={15}/> : <Eye size={15}/>}<span>{theme === 'dark' ? 'LIGHT' : 'DARK'}</span></button><button className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button></div>
    </header>

    <main id="main-content">
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"/> AVAILABLE FOR BACKEND ENGINEERING OPPORTUNITIES <span className="eyebrow-line"/></div>
          <p className="hero-kicker">HELLO, I'M</p>
          <h1>Ameer<br/><span>Shaik.</span></h1>
          <h2>Java Backend Engineer <span className="slash">/</span> Software Developer</h2>
          <p className="hero-lede">I design, build, secure and deploy backend systems — combining Java engineering, system design, AI-enabled features, cloud delivery and Python computer vision.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a><a className="button button-ghost" href="/Ameer-Shaik-Resume.pdf" target="_blank" rel="noreferrer"><Download size={16}/> Download resume</a></div>
          <div className="hero-meta"><span><MapPin size={14}/> Bengaluru, India</span><span className="meta-divider"/><span>Immediate joiner</span><span className="meta-divider"/><span>Backend · Cloud · AI</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract backend engineering illustration">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
          <div className="core-card"><div className="core-top"><span/><span/><span/><small>backend.core</small></div><div className="code-lines"><i><b>01</b> <em>class</em> Engineer {'{'}</i><i><b>02</b> &nbsp; build(<strong>"reliable systems"</strong>);</i><i><b>03</b> &nbsp; secure(<strong>APIs</strong>);</i><i><b>04</b> &nbsp; scale(<strong>with purpose</strong>);</i><i><b>05</b> {'}'}</i></div><div className="core-foot"><span><span className="status-dot"/> SYSTEMS THINKING</span><span>JAVA · SPRING</span></div></div>
          <div className="float-chip chip-top"><Code2 size={15}/> Java / Spring</div><div className="float-chip chip-right"><Database size={15}/> Data & APIs</div><div className="float-chip chip-bottom"><Cloud size={15}/> AWS / Cloud</div>
          <div className="art-index">FIG. 01 — ENGINEERING MINDSET</div>
        </div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14}/></a>
      </section>

      <section className="ai-quote-section" aria-label="Engineering philosophy"><div className="section-wrap ai-quote-wrap"><span className="ai-quote-mark">“</span><p className="ai-quote-label">A THOUGHT ON AI & ENGINEERING</p><blockquote>AI can generate the code. <span>It takes a human mind to imagine what should exist, question what could fail, and take responsibility for what ships.</span></blockquote><div className="ai-quote-foot"><span className="quote-line"/> IMAGINATION · JUDGMENT · ACCOUNTABILITY</div></div></section>

      <section className="section-wrap intro-section" id="about">
        <div className="section-label"><span>01</span> / ABOUT ME</div>
        <div className="intro-grid"><div><p className="display-copy">I turn complex requirements into <span>thoughtful backend systems.</span></p></div><div className="intro-body"><p>I'm a software engineer focused on backend development, system design and delivery. I build production-oriented SaaS services with Java, Spring Boot, Spring Security, MySQL and AWS, and have also developed Python computer-vision projects using YOLOv3.</p><p>My experience spans end-to-end system design and LLD, database design, multi-tenant authorization, product and batch lifecycle services, manufacturing workflows, AI-enabled recommendations, application performance improvements, security practices and cloud deployments. I enjoy taking a feature from requirements and design through implementation, testing and deployment.</p><div className="quick-facts"><div><strong>Java</strong><span>Backend engineering focus</span></div><div><strong>04</strong><span>Featured engineering projects</span></div><div><strong>MCA</strong><span>Computer Applications</span></div></div></div></div>
      </section>

      <section className="section-wrap experience-section" id="experience">
        <div className="section-heading"><div className="section-label"><span>02</span> / EXPERIENCE</div><h2>Where I've <span>made an impact.</span></h2><p>Hands-on engineering across SaaS platforms, manufacturing workflows and payment integrations.</p></div>
        <div className="timeline">{experience.map((job, i) => <article className="timeline-item" key={job.role}><div className="timeline-marker">0{i+1}</div><div className="timeline-content"><div className="job-top"><div><p className="job-period">{job.period} <span>·</span> {job.type}</p><h3>{job.role}</h3><h4>{job.company}</h4></div><span className="job-place"><MapPin size={13}/>{job.place}</span></div><p className="job-intro">{job.intro}</p><ul className="achievement-list">{job.points.map(point => <li key={point}>{point}</li>)}</ul><div className="tag-row">{job.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div></article>)}</div>
      </section>

      <section className="system-section" id="system-design"><div className="section-wrap"><div className="section-heading"><div className="section-label"><span>03</span> / SYSTEM DESIGN & ENGINEERING OWNERSHIP</div><h2>I think beyond the <span>individual API.</span></h2><p>Experience contributing across the engineering lifecycle — from architecture and data modelling to security, performance and deployment.</p></div><div className="system-grid"><article className="system-card"><span className="system-icon"><Network size={20}/></span><h3>System architecture & LLD</h3><p>Designed the overall TraceCircle system structure and prepared low-level design artefacts to translate product requirements into implementable modules.</p><ul><li>Service and module boundaries</li><li>End-to-end workflows and data flows</li><li>API and component-level design</li><li>Technical documentation and implementation guidance</li></ul></article><article className="system-card"><span className="system-icon"><Database size={20}/></span><h3>Database design</h3><p>Worked on relational data modelling for a multi-organization, multi-plant SaaS platform.</p><ul><li>Entity relationships and table structures</li><li>Primary/foreign-key relationships and constraints</li><li>Persistence design using JPA and MySQL</li><li>Query and data-access considerations</li></ul></article><article className="system-card"><span className="system-icon"><Gauge size={20}/></span><h3>Performance engineering</h3><p>Worked on improvements intended to make application operations more efficient and dependable.</p><ul><li>JPA query and persistence optimization</li><li>Efficient data retrieval and validation flows</li><li>API and database troubleshooting</li><li>Testing and regression verification</li></ul></article><article className="system-card"><span className="system-icon"><LockKeyhole size={20}/></span><h3>Application security</h3><p>Implemented and worked with layered controls for authenticated, role-aware and tenant-aware application access.</p><ul><li>JWT-based authentication</li><li>Role-based access control (RBAC)</li><li>Organization- and plant-level authorization</li><li>OAuth 2.0 concepts, secure validation and auditability</li><li>OWASP Top 10 awareness</li></ul></article><article className="system-card"><span className="system-icon"><Server size={20}/></span><h3>Deployment & DevOps</h3><p>Handled deployment and release-related work for application environments.</p><ul><li>AWS EC2 application deployment</li><li>AWS RDS and S3 integration</li><li>Docker and environment configuration</li><li>Maven builds and CI/CD workflows</li><li>Deployment verification and troubleshooting</li></ul></article><article className="system-card"><span className="system-icon"><BrainCircuit size={20}/></span><h3>AI-enabled application features</h3><p>Worked with AI recommendations as part of application functionality, alongside exploration of Spring AI and generative AI integration.</p><ul><li>AI-powered recommendation features</li><li>AI integration concepts with Spring ecosystem</li><li>Python-based computer vision projects</li><li>YOLOv3 object detection</li></ul></article></div></div></section>

      <section className="projects-section" id="projects"><div className="section-wrap"><div className="section-heading"><div className="section-label"><span>04</span> / SELECTED WORK</div><h2>Projects with a <span>purpose.</span></h2><p>A closer look at the systems, workflows and integrations I've helped build.</p></div>
        <div className="project-layout"><div className="project-list">{projects.map((project, i) => <button className={activeProject === i ? 'project-tab active' : 'project-tab'} key={project.number} aria-pressed={activeProject === i} onClick={() => setActiveProject(i)}><span className="project-tab-num">{project.number}</span><span><small>{project.category}</small><strong>{project.title}</strong></span><ArrowUpRight size={18}/></button>)}</div><article className={`project-detail ${projects[activeProject].accent} ${projects[activeProject].visual || ''}`}>{projects[activeProject].visual === 'computer-vision' ? <ComputerVisionVisual/> : <div className="project-visual"><div className="visual-grid"/><div className="visual-orbit"/><div className="visual-icon">{React.createElement(projects[activeProject].icon, {size: 38, strokeWidth: 1.4})}</div><span className="visual-caption">SYSTEM / {projects[activeProject].number}</span><span className="visual-side">ENGINEERING NOTES</span></div>}<div className="project-info"><div className="project-info-top"><span className="eyebrow-small">{projects[activeProject].category}</span><span className="project-number">{projects[activeProject].number} / 04</span></div><h3>{projects[activeProject].title}</h3><p>{projects[activeProject].description}</p><ul>{projects[activeProject].details.map(d => <li key={d}><CheckCircle2 size={15}/>{d}</li>)}</ul><div className="tag-row">{projects[activeProject].stack.map(t => <span className="tag" key={t}>{t}</span>)}</div></div></article></div>
      </div></section>

      <section className="section-wrap skills-section" id="skills"><div className="section-heading"><div className="section-label"><span>05</span> / TECHNICAL TOOLKIT</div><h2>Tools I use to <span>build and ship.</span></h2><p>A practical toolkit across backend development, security, data, cloud and quality engineering.</p></div><div className="skills-grid">{skills.map(({title, icon: Icon, items}, i) => <article className="skill-card" key={title}><div className="skill-card-top"><span className="skill-icon"><Icon size={19}/></span><span className="skill-index">0{i+1}</span></div><h3>{title}</h3><div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div></section>

      <section className="approach-section"><div className="section-wrap"><div className="section-label"><span>06</span> / HOW I WORK</div><div className="approach-grid"><h2>Good engineering is more than <span>writing code.</span></h2><div className="principles">{principles.map(([num, title, body]) => <div className="principle" key={num}><span>{num}</span><div><h3>{title}</h3><p>{body}</p></div><ArrowUpRight size={17}/></div>)}</div></div></div></section>

      <section className="section-wrap education-section"><div className="section-label"><span>07</span> / EDUCATION & CERTIFICATION</div><div className="education-grid"><article className="education-card"><GraduationCap size={22}/><span className="edu-year">2021 — 2023</span><h3>Master of Computer Applications</h3><p>Madanapalle Institute of Technology & Science</p><strong>CGPA 8.23 / 10</strong></article><article className="education-card"><GraduationCap size={22}/><span className="edu-year">2018 — 2021</span><h3>Bachelor of Computer Applications</h3><p>Shri Gnanambica Degree College</p><strong>CGPA 7.71 / 10</strong></article><article className="education-card certification"><Sparkles size={22}/><span className="edu-year">JAN 2025</span><h3>Apache Kafka and ZooKeeper</h3><p>In-Depth Understanding · Scaler</p><strong>Certification</strong></article></div></section>

      <section className="contact-section" id="contact"><div className="section-wrap contact-wrap"><div className="section-label"><span>08</span> / CONTACT</div><p className="contact-kicker">HAVE A BACKEND CHALLENGE?</p><h2>Let's build<br/><span>something reliable.</span></h2><p className="contact-copy">I'm open to Java Backend Developer, Backend Engineer and Software Engineer opportunities in Bengaluru. I bring a combination of backend implementation, system design, database modelling, application security, performance improvement, AI-enabled features and deployment experience.</p><a className="button button-primary contact-button" href="mailto:shaikameerjann@gmail.com">Start a conversation <ArrowUpRight size={17}/></a><div className="contact-details"><a href="mailto:shaikameerjann@gmail.com"><Mail size={16}/> shaikameerjann@gmail.com</a><a href="tel:+917075850587"><Phone size={16}/> +91 70758 50587</a><span><MapPin size={16}/> Bengaluru, India</span></div></div></section>
    </main>

    <footer className="footer"><div className="section-wrap footer-inner"><a className="brand" href="#home">AMEER<span>.DEV</span></a><p>Designed and built with curiosity, clarity and code.</p><div className="socials"><a href="https://linkedin.com/in/ameer-shaikk" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a><a href="https://github.com/SHAIKAMEERr" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a><a href="https://leetcode.com/u/SHAIKAMEER_/" target="_blank" rel="noreferrer" aria-label="LeetCode"><Code2 size={17}/></a></div><span className="copyright">© {new Date().getFullYear()} AMEER SHAIK</span></div></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<App/>);
