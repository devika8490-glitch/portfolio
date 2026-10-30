"use client";

import { useEffect, useState } from "react";

const skills = [
  { name: "HTML & CSS", group: "Frontend" },
  { name: "JavaScript", group: "Frontend" },
  { name: "Bootstrap", group: "Frontend" },
  { name: "Python", group: "Backend" },
  { name: "Django", group: "Backend" },
  { name: "MySQL", group: "Database" },
];

const journey = [
  {
    date: "The beginning",
    title: "Started learning programming",
    text: "Built a foundation in programming and began exploring how software can solve everyday problems.",
  },
  {
    date: "Frontend",
    title: "Found my way into web development",
    text: "Learned HTML, CSS, JavaScript and Bootstrap to create responsive, user-friendly interfaces.",
  },
  {
    date: "Full stack",
    title: "Brought projects to life with Django",
    text: "Moved into backend development, databases and full-stack applications, including RealtyNest.",
  },
  {
    date: "May 2026 — now",
    title: "Growing as a developer at HOC Tech Solutions",
    text: "Learning from real-world software work while building toward a career as a software engineer.",
  },
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Full Stack Developer", "Software Engineer"];

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
  }, [isDark]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2800);
    return () => window.clearInterval(timer);
  }, [roles.length]);

  return (
    <>
      <header className="site-header">
        <nav className="nav-shell" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="Devika Gaikwad, home">
            DG<span>.</span>
          </a>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-actions">
            <button
              className="theme-toggle"
              type="button"
              onClick={() => setIsDark((value) => !value)}
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
              title={`Switch to ${isDark ? "light" : "dark"} mode`}
            >
              {isDark ? "☼" : "☾"}
            </button>
            <a className="nav-cta" href="#contact">
              Let&apos;s talk <ArrowIcon />
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero section-shell" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="availability-dot" /> OPEN TO OPPORTUNITIES
            </div>
            <p className="hero-greeting">Hello, I&apos;m</p>
            <h1>
              Devika
              <br />
              <span>Gaikwad.</span>
            </h1>
            <p className="hero-role" aria-live="polite">
              {roles[roleIndex]}
              <span className="typing-cursor" aria-hidden="true" />
            </p>
            <p className="hero-description">
              BCA final-year student building modern, responsive and
              user-friendly web applications with care and curiosity.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my projects <ArrowIcon />
              </a>
              <a
                className="button button-secondary"
                href="/devika-gaikwad-resume.docx"
                download
              >
                Download resume <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-location">
              <span aria-hidden="true">⌖</span> Karad, Maharashtra, India
            </div>
          </div>
          <div className="hero-art" aria-label="Decorative Devika initials illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-spark spark-one">✳</div>
            <div className="art-spark spark-two">✦</div>
            <div className="art-card">
              <span className="art-card-label">A little about me</span>
              <div className="art-monogram">D<span>G</span></div>
              <div className="art-card-footer">
                <span>Curious mind.</span>
                <span>Thoughtful code.</span>
              </div>
            </div>
            <div className="floating-note note-top">
              <span className="note-icon">✳</span>
              <span>Learning by building</span>
            </div>
            <div className="floating-note note-bottom">
              <span className="note-pulse" />
              <span>Currently interning</span>
            </div>
          </div>
          <a className="scroll-cue" href="#about">
            <span className="scroll-line" /> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="stats-strip section-shell" aria-label="At a glance">
          <div className="stat">
            <strong>02<span>+</span></strong>
            <span>Years learning</span>
          </div>
          <div className="stat">
            <strong>01</strong>
            <span>Featured project</span>
          </div>
          <div className="stat">
            <strong>01</strong>
            <span>Internship</span>
          </div>
          <div className="stat stat-note">
            <span>Always learning,</span>
            <span>always building <span className="accent">↗</span></span>
          </div>
        </section>

        <section className="content-section section-shell" id="about">
          <div className="section-heading">
            <span className="section-index">01 / ABOUT</span>
            <h2>A developer in the making, <em>by design.</em></h2>
          </div>
          <div className="about-grid">
            <div className="about-intro">
              <p className="large-copy">
                I&apos;m Devika, a final-year BCA student who loves turning
                thoughtful ideas into useful things on the web.
              </p>
              <p>
                Over the last two years, I&apos;ve explored both sides of web
                development—from crafting clean interfaces to building backend
                functionality with Django and MySQL. My first completed
                full-stack project, RealtyNest, helped me bring those skills
                together.
              </p>
              <p>
                I&apos;m currently interning at HOC Tech Solutions, learning
                how teams build, test and improve software in the real world.
                My goal is to grow into a thoughtful software engineer who
                creates accessible, reliable experiences.
              </p>
            </div>
            <div className="about-aside">
              <div className="aside-topline">
                <span className="aside-star">✳</span>
                <span>A bit more about me</span>
              </div>
              <div className="about-fact">
                <span>01</span>
                <div><strong>People first</strong><p>I care about making technology feel clear and welcoming.</p></div>
              </div>
              <div className="about-fact">
                <span>02</span>
                <div><strong>Curious by nature</strong><p>I enjoy learning a concept and putting it into practice.</p></div>
              </div>
              <div className="about-fact">
                <span>03</span>
                <div><strong>Always improving</strong><p>Each project is a chance to write better, more thoughtful code.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section skills-section" id="skills">
          <div className="section-shell">
            <div className="section-heading">
              <span className="section-index">02 / TOOLKIT</span>
              <h2>Tools I use to <em>make things work.</em></h2>
              <p className="section-lead">
                A growing toolkit, built through learning and hands-on projects.
              </p>
            </div>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="skill-card" key={skill.name}>
                  <span className="skill-number">0{index + 1}</span>
                  <span className="skill-mark" aria-hidden="true">
                    {["</>", "{ }", "JS", "Py", "Dj", "DB"][index]}
                  </span>
                  <strong>{skill.name}</strong>
                  <span className="skill-group">{skill.group}</span>
                </div>
              ))}
            </div>
            <p className="skills-footnote">
              Also familiar with REST APIs, CRUD workflows, responsive design,
              Git, GitHub and VS Code.
            </p>
          </div>
        </section>

        <section className="content-section section-shell" id="experience">
          <div className="section-heading">
            <span className="section-index">03 / EXPERIENCE</span>
            <h2>Learning by doing, <em>every day.</em></h2>
          </div>
          <article className="experience-card">
            <div className="experience-date">
              <span className="experience-dot" />
              MAY 2026 — PRESENT
            </div>
            <div className="experience-main">
              <div className="experience-title-row">
                <div>
                  <h3>Full Stack Developer Intern</h3>
                  <p>HOC Tech Solutions Pvt. Ltd.</p>
                </div>
                <span className="experience-badge">Internship</span>
              </div>
              <div className="experience-tasks">
                <span>Developing frontend interfaces</span>
                <span>Working on backend functionality</span>
                <span>Exploring databases and APIs</span>
                <span>Debugging and testing applications</span>
              </div>
            </div>
          </article>
        </section>

        <section className="content-section projects-section" id="projects">
          <div className="section-shell">
            <div className="section-heading project-heading">
              <div>
                <span className="section-index">04 / SELECTED WORK</span>
                <h2>Projects I&apos;m <em>proud of.</em></h2>
              </div>
              <span className="project-count">02 PROJECTS</span>
            </div>
            <article className="project-card">
              <div className="project-visual">
                <div className="browser-window">
                  <div className="browser-bar">
                    <span /><span /><span />
                    <div className="browser-address">realtynest / discover</div>
                  </div>
                  <div className="browser-content">
                    <div className="mock-nav"><b>realty<span>nest</span></b><span>Find a place to call home</span></div>
                    <div className="mock-hero">
                      <div>
                        <span className="mock-kicker">FIND YOUR NEXT CHAPTER</span>
                        <div className="mock-title">A place<br />to belong.</div>
                        <div className="mock-button">Explore homes&nbsp; →</div>
                      </div>
                      <div className="mock-house"><div className="house-roof" /><div className="house-body"><i /><i /><b /></div></div>
                    </div>
                    <div className="mock-bottom"><span>Thoughtful spaces, made to feel like home.</span><span>01 — 03</span></div>
                  </div>
                </div>
                <span className="project-visual-caption">REAL ESTATE · FULL STACK</span>
              </div>
              <div className="project-details">
                <div className="project-topline"><span>FEATURED PROJECT</span><span>2026</span></div>
                <h3>RealtyNest</h3>
                <p className="project-subtitle">A Django full-stack real estate website</p>
                <p className="project-description">
                  My first completed full-stack project. RealtyNest brought
                  together frontend development, Django backend work and
                  database concepts in a real estate website.
                </p>
                <div className="project-tags">
                  <span>Django</span><span>Python</span><span>HTML &amp; CSS</span><span>JavaScript</span><span>MySQL</span>
                </div>
                <div className="project-role">
                  <span>MY ROLE</span>
                  <strong>Full-stack development</strong>
                </div>
              </div>
            </article>
            <article className="project-card project-card-hostel">
              <div className="project-visual hostel-project-visual">
                <div className="hostel-preview">
                  <div className="hostel-preview-nav">
                    <span className="hostel-preview-logo">stay<span>nest</span></span>
                    <span className="hostel-preview-menu">ABOUT&nbsp;&nbsp; FACILITIES&nbsp;&nbsp; CONTACT</span>
                  </div>
                  <div className="hostel-preview-content">
                    <span className="hostel-preview-kicker">A PLACE TO FEEL AT HOME</span>
                    <strong>Find your<br />space to stay.</strong>
                    <span className="hostel-preview-button">EXPLORE HOSTEL&nbsp; ↗</span>
                  </div>
                  <div className="hostel-preview-footer"><span>Comfort · Community · Care</span><span>01 / 03</span></div>
                </div>
                <span className="project-visual-caption hostel-caption">HOSPITALITY · RESPONSIVE WEBSITE</span>
              </div>
              <div className="project-details">
                <div className="project-topline"><span>WEB PROJECT</span><span>02</span></div>
                <h3>Hostel Website</h3>
                <p className="project-subtitle">A responsive website for hostel information</p>
                <p className="project-description">
                  A user-friendly website presenting hostel information and
                  facilities, with responsive layouts, visual content and
                  straightforward navigation.
                </p>
                <div className="project-tags">
                  <span>HTML</span><span>CSS</span><span>JavaScript</span><span>Bootstrap</span>
                </div>
                <div className="project-role">
                  <span>PROJECT REPOSITORY</span>
                  <a
                    className="project-repo-link"
                    href="https://github.com/devika8490-glitch/Hostel-Website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub <ArrowIcon />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="content-section section-shell" id="journey">
          <div className="section-heading">
            <span className="section-index">05 / MY JOURNEY</span>
            <h2>One step, then <em>the next.</em></h2>
          </div>
          <div className="journey-list">
            {journey.map((item, index) => (
              <article className="journey-item" key={item.title}>
                <div className="journey-marker">{String(index + 1).padStart(2, "0")}</div>
                <span className="journey-date">{item.date}</span>
                <div className="journey-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="education-card">
            <span className="education-icon">✳</span>
            <div>
              <span className="section-index">EDUCATION</span>
              <h3>Bachelor of Computer Applications</h3>
              <p>Final year · Sadguru Gadage Maharaj College, Karad</p>
            </div>
            <span className="education-status">IN PROGRESS</span>
          </div>
        </section>

        <section className="content-section services-section">
          <div className="section-shell">
            <div className="section-heading">
              <span className="section-index">06 / WHAT I ENJOY</span>
              <h2>Ways I can <em>make a difference.</em></h2>
            </div>
            <div className="services-grid">
              {[
                ["01", "Frontend development", "Responsive interfaces with HTML, CSS, JavaScript and Bootstrap."],
                ["02", "Backend development", "Server-side development and application logic with Python and Django."],
                ["03", "Full-stack projects", "Bringing the frontend, backend and database together."],
                ["04", "Responsive experiences", "Designing for people and the devices they use every day."],
              ].map(([number, title, description]) => (
                <article className="service-item" key={number}>
                  <span>{number}</span><h3>{title}</h3><p>{description}</p><span className="service-arrow">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-shell" id="contact">
          <div className="contact-decoration">✳</div>
          <span className="section-index">07 / YOUR NEXT IDEA</span>
          <h2>Good things start<br />with a <em>conversation.</em></h2>
          <p>
            Looking for a curious developer or want to talk about a project?
            I&apos;d love to hear from you.
          </p>
          <a className="button contact-button" href="mailto:devika8490@gmail.com">
            Let&apos;s connect <ArrowIcon />
          </a>
          <div className="contact-links">
            <a href="mailto:devika8490@gmail.com">devika8490@gmail.com</a>
            <a href="tel:+918483992627">+91 84839 92627</a>
            <a href="https://github.com/devika8490-glitch" target="_blank" rel="noopener noreferrer">GitHub <ArrowIcon /></a>
            <a href="https://www.naukri.com/mnjuser/profile?id=&altresid" target="_blank" rel="noopener noreferrer">Naukri profile <ArrowIcon /></a>
          </div>
          <div className="contact-location"><span aria-hidden="true">⌖</span> Karad, Maharashtra, India</div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <a className="brand" href="#home">DG<span>.</span></a>
        <span>Designed with care by Devika Gaikwad · 2026</span>
        <a href="#home" className="back-top">Back to top ↑</a>
      </footer>
    </>
  );
}
