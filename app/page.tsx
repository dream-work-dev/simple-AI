const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sean-kuhlman-24643698a" },
  { label: "GitHub", href: "https://github.com/ylib" },
];

const selectedWork = [
  {
    eyebrow: "Risk + compliance",
    title: "AI-assisted compliance research",
    description:
      "An internal retrieval workflow that helps compliance teams find relevant policies, procedures, and investigation context without losing traceability to source material.",
    highlights: [
      ["Grounded retrieval", "Policy-aware answers tied back to source documentation"],
      ["Operational context", "Consolidated compliance and investigation knowledge"],
      ["Production ready", "Secure APIs, access controls, and observable services"],
      ["Human centered", "Built with compliance and trader-operations partners"],
    ],
    stack: ["FastAPI", "LangChain", "PostgreSQL", "pgvector", "OpenAI APIs"],
    featured: true,
  },
  {
    eyebrow: "Enterprise search",
    title: "Permission-aware knowledge systems",
    description:
      "Ingestion, indexing, ranking, and semantic retrieval services that turn distributed enterprise content into trustworthy, searchable knowledge.",
    stack: ["Python", "Go", "Embeddings", "AWS", "Terraform"],
  },
  {
    eyebrow: "Streaming at scale",
    title: "Content discovery platforms",
    description:
      "Backend services and asynchronous workflows supporting recommendations, catalog metadata, personalization, and resilient multi-region delivery.",
    stack: ["Node.js", "GraphQL", "Redis", "PostgreSQL", "AWS"],
  },
];

const experience = [
  {
    company: "Topstep",
    role: "Senior Software Engineer",
    dates: "11/2023 - Present",
    location: "Lakeville, MN",
    label: "Fintech platform",
    featured: true,
    summary:
      "Building backend and platform capabilities for futures-trader evaluation, funded accounts, account operations, risk management, and compliance.",
    bullets: [
      "Design backend capabilities for trader onboarding, account review, risk evaluation, and operational workflows.",
      "Build Kafka and Kubernetes services that process trading activity, account-state changes, risk events, and operational alerts.",
      "Created an AI-assisted compliance research workflow using FastAPI, LangChain, PostgreSQL, and pgvector.",
      "Improve production reliability, SOC 2 readiness, engineering standards, and release confidence through observability, security controls, and technical mentorship.",
    ],
  },
  {
    company: "Glean",
    role: "Software Engineer",
    dates: "09/2019 - 08/2023",
    location: "Lakeville, MN",
    label: "Enterprise search",
    summary:
      "Developed permission-aware workplace search and knowledge-discovery systems across ingestion, indexing, ranking, retrieval, and cloud infrastructure.",
    bullets: [
      "Built Python and Go services for content ingestion, indexing, metadata processing, and document synchronization.",
      "Designed connectors and APIs that preserved source-system permissions while making enterprise content searchable.",
      "Improved search relevance through ranking signals, semantic retrieval, embeddings, and repeatable evaluation practices.",
      "Modernized services on Terraform-managed AWS infrastructure and mentored four engineers through architecture, planning, and career development.",
    ],
  },
  {
    company: "Tubi",
    role: "Software Engineer II / Software Engineer I",
    dates: "10/2016 - 08/2019",
    location: "Remote",
    label: "Video streaming",
    summary:
      "Built backend systems for content discovery, personalization, customer accounts, and resilient distribution at an advertising-supported streaming platform.",
    bullets: [
      "Enhanced recommendation and catalog pipelines with Node.js, GraphQL, PostgreSQL, and Redis.",
      "Improved API performance through query optimization, caching, and targeted service refactoring.",
      "Implemented asynchronous content workflows with Amazon SNS and SQS and contributed to multi-region operations.",
      "Earlier work included REST APIs for authentication, profiles, preferences, viewing history, and Docker-based delivery workflows.",
    ],
  },
  {
    company: "Pingdom",
    role: "Full Stack Developer",
    dates: "12/2015 - 09/2016",
    location: "Denver, CO",
    label: "Performance monitoring",
    summary:
      "Developed customer-facing monitoring experiences for website availability, performance, and globally distributed infrastructure.",
    bullets: [
      "Built React and TypeScript dashboards for uptime, performance, and infrastructure telemetry.",
      "Developed Django services for webhook events and operational monitoring data.",
      "Optimized rendering for high-volume time-series datasets and interactive monitoring views.",
      "Supported alerting, logging, and troubleshooting workflows for distributed monitoring infrastructure.",
    ],
  },
];

const skillGroups = [
  {
    title: "Backend & APIs",
    index: "01",
    skills: ["FastAPI", "Django", "Spring Boot", ".NET Core", "Node.js", "REST APIs", "GraphQL APIs", "Microservices"],
  },
  {
    title: "AI & Data Platforms",
    index: "02",
    skills: ["LangChain", "OpenAI APIs", "Embeddings", "Vector Search", "RAG Pipelines", "pgvector", "Pinecone"],
  },
  {
    title: "Cloud & DevOps",
    index: "03",
    skills: ["AWS", "Kubernetes", "Docker", "Terraform", "AWS CDK", "ECS", "EKS", "Lambda", "CI/CD"],
  },
  {
    title: "Languages",
    index: "04",
    skills: ["Python", "Go", "Java", "C#", "TypeScript", "JavaScript", "PHP", "Ruby", "C++"],
  },
  {
    title: "Frontend",
    index: "05",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "GraphQL", "HTML5", "CSS3"],
  },
  {
    title: "Engineering Practice",
    index: "06",
    skills: ["RFC Documentation", "Architecture Reviews", "Technical Mentoring", "Code Reviews", "Agile", "Scrum"],
  },
];

function Arrow() {
  return <span aria-hidden="true">&nearr;</span>;
}

export default function Home() {
  return (
    <>
      <div className="page-atmosphere" aria-hidden="true">
        <span className="starfield starfield-one" />
        <span className="starfield starfield-two" />
        <span className="ambient-glow" />
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Sean Kuhlman, home">
          Sean<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <p className="hero-kicker">Hey, I&apos;m</p>
          <h1 id="hero-title">SEAN KUHLMAN</h1>
          <div className="role-chip">Senior Software Engineer</div>
          <p className="hero-statement">
            I build the platforms behind <em>reliable products.</em>
          </p>
          <p className="hero-summary">
            Backend and platform engineering across fintech, enterprise search,
            streaming, AI-assisted workflows, and cloud infrastructure.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="mailto:seankuhlman1@gmail.com">
              Let&apos;s connect <Arrow />
            </a>
            <div className="hero-socials" aria-label="Social links">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label} <Arrow />
                </a>
              ))}
            </div>
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
            <span>Explore</span>
            <span aria-hidden="true">&darr;</span>
          </a>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="section-heading centered-heading">
            <p className="section-kicker">Get to know me better</p>
            <h2 id="about-title">About Me<span>.</span></h2>
          </div>
          <div className="about-grid">
            <div className="system-visual" aria-label="Sean's engineering focus areas">
              <div className="system-orbit orbit-one" />
              <div className="system-orbit orbit-two" />
              <div className="system-core">SK</div>
              <span className="system-node node-api">APIs</span>
              <span className="system-node node-search">Search</span>
              <span className="system-node node-events">Events</span>
              <span className="system-node node-cloud">Cloud</span>
              <p>Systems that stay clear under pressure.</p>
            </div>
            <div className="about-copy">
              <p className="about-lead">
                Senior Backend and Platform Engineer with 10+ years of experience
                building distributed systems, enterprise search, fintech applications,
                streaming services, and cloud infrastructure.
              </p>
              <p>
                I work across Python, Go, TypeScript, Node.js, PostgreSQL, Kafka,
                AWS, Kubernetes, and Terraform, with recent work applying semantic
                retrieval and AI-assisted workflows to risk, compliance, and
                enterprise knowledge systems.
              </p>
              <div className="stat-grid">
                <article><strong>10+</strong><span>Years in production engineering</span></article>
                <article><strong>4</strong><span>Platform domains</span></article>
                <article><strong>4</strong><span>Engineers directly mentored</span></article>
                <article className="stat-link"><span>Lakeville, Minnesota</span><strong>US</strong></article>
              </div>
            </div>
          </div>
        </section>

        <section className="section work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading centered-heading">
            <p className="section-kicker">Selected platform work</p>
            <h2 id="work-title">Built for impact<span>.</span></h2>
          </div>
          <div className="work-grid">
            {selectedWork.map((project) => (
              <article className={`work-card ${project.featured ? "work-card-featured" : ""}`} key={project.title}>
                <p className="card-eyebrow">{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <p className="work-description">{project.description}</p>
                {project.highlights && (
                  <div className="highlight-grid">
                    {project.highlights.map(([title, copy]) => (
                      <div className="highlight" key={title}>
                        <span aria-hidden="true">+</span>
                        <div><strong>{title}</strong><p>{copy}</p></div>
                      </div>
                    ))}
                  </div>
                )}
                <div className="tags" aria-label={`${project.title} technologies`}>
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills-section" id="skills" aria-labelledby="skills-title">
          <div className="section-heading centered-heading">
            <p className="section-kicker">Tools for the whole platform</p>
            <h2 id="skills-title">Skills &amp; Expertise<span>.</span></h2>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <span className="skill-index">{group.index}</span>
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading centered-heading">
            <p className="section-kicker">My professional journey</p>
            <h2 id="experience-title">Experience<span>.</span></h2>
          </div>
          <div className="timeline">
            {experience.map((job, index) => (
              <article className={`job ${job.featured ? "job-featured" : ""}`} key={job.company}>
                <div className="job-number">{String(index + 1).padStart(2, "0")}</div>
                <div className="job-meta">
                  <span>{job.dates}</span>
                  <span>{job.location}</span>
                </div>
                <div className="job-content">
                  <div className="job-label-row">
                    <span>{job.label}</span>
                    {job.featured && <b>Current</b>}
                  </div>
                  <h3>{job.role}</h3>
                  <h4>{job.company}</h4>
                  <p className="job-summary">{job.summary}</p>
                  <ul>
                    {job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section" id="education" aria-labelledby="education-title">
          <div className="education-card">
            <p className="section-kicker">Education</p>
            <h2 id="education-title">University of Colorado Denver<span>.</span></h2>
            <div className="degree-row">
              <div><strong>Bachelor of Science</strong><span>Computer Science</span></div>
              <p>2013 - 2016</p>
            </div>
          </div>
          <div className="principles-card">
            <p className="section-kicker">How I work</p>
            <blockquote>
              Clear architecture, practical reliability, and teams that understand
              why a system works - not just how to ship it.
            </blockquote>
            <div className="principles">
              <span>RFC-driven design</span>
              <span>Production readiness</span>
              <span>Technical mentorship</span>
              <span>Security by default</span>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <p className="section-kicker">Have a hard platform problem?</p>
          <h2 id="contact-title">Let&apos;s build something<br /><em>clear and reliable.</em></h2>
          <div className="contact-actions">
            <a className="primary-button" href="mailto:seankuhlman1@gmail.com">
              seankuhlman1@gmail.com
            </a>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand" href="#top">Sean<span>.</span></a>
        <p>Senior Backend &amp; Platform Engineer</p>
        <div className="footer-links">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
          ))}
        </div>
        <p>&copy; {new Date().getFullYear()} Sean Kuhlman</p>
      </footer>
    </>
  );
}
