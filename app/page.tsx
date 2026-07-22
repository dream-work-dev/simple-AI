const experience = [
  {
    company: "Tuva Health",
    role: "Senior Software Engineer",
    dates: "Nov 2023 — Present",
    location: "Remote",
    label: "Healthcare data platform",
    featured: true,
    copy: "Building warehouse-native infrastructure that turns fragmented healthcare data into trusted, analytics-ready models.",
    bullets: [
      "Develops SQL and dbt models across input, data quality, normalization, claims preprocessing, core data model, and data mart layers.",
      "Transforms claims, eligibility, EHR, pharmacy, laboratory, and reference data into standardized datasets for analytics and applications.",
      "Builds Python validation and reconciliation tooling and automated tests that surface mapping and data-quality regressions before release.",
      "Supports portable data workflows across Snowflake, BigQuery, Redshift, Databricks, and Microsoft Fabric.",
    ],
    stack: ["Python", "SQL", "dbt", "BigQuery", "Snowflake", "AWS", "GCP"],
  },
  {
    company: "Enter Health",
    role: "Senior Backend Engineer",
    dates: "Aug 2021 — Oct 2023",
    location: "Remote",
    label: "Revenue cycle management",
    copy: "Delivered multi-tenant services for claims, payments, reconciliation, and provider operations in a regulated healthcare environment.",
    bullets: [
      "Designed REST and GraphQL APIs for provider-facing applications, internal operations, and healthcare-system integrations.",
      "Created Kafka pipelines for claim status, payment, remittance, and long-running revenue-cycle workflows.",
      "Optimized PostgreSQL queries and indexes, reducing response time for high-traffic workflows by approximately 25%.",
      "Strengthened HIPAA-aligned authorization, audit logging, encryption, and protection of sensitive data.",
    ],
    stack: ["Java", "Spring Boot", "TypeScript", "React", "PostgreSQL", "Kafka", "AWS"],
  },
  {
    company: "Panther",
    role: "Founding Engineer",
    dates: "Sep 2018 — Dec 2021",
    location: "San Francisco, CA",
    label: "Cloud-native security analytics",
    copy: "Helped shape an early cloud-native SIEM into a scalable, code-driven platform for modern security teams.",
    bullets: [
      "Built services for security-event ingestion, normalization, detection, investigation, and alert delivery.",
      "Designed event-driven AWS workflows with Lambda, S3, SQS, and SNS for decoupled processing.",
      "Implemented detection-as-code capabilities for versioned, testable Python security rules.",
      "Established infrastructure, observability, and engineering patterns as the product and team expanded.",
    ],
    stack: ["Go", "Python", "AWS Lambda", "DynamoDB", "Elasticsearch", "Terraform"],
  },
  {
    company: "Airbnb",
    role: "Security Software Engineer",
    dates: "Sep 2016 — Sep 2018",
    location: "San Francisco, CA",
    label: "Identity & access governance",
    copy: "Built internal security systems that made sensitive access workflows more consistent, traceable, and reliable.",
    bullets: [
      "Developed Java and Python services for identity management, permission changes, and policy enforcement.",
      "Automated onboarding, role-change, access-review, and account-deprovisioning workflows.",
      "Created React interfaces for permission review, investigations, and governance operations.",
      "Implemented RBAC, approval workflows, audit trails, and security-event logging.",
    ],
    stack: ["Java", "Python", "React", "REST APIs", "RBAC", "AWS"],
  },
  {
    company: "Google",
    role: "Software Engineering Intern — Tools & Infrastructure",
    dates: "Jun 2015 — Sep 2015",
    location: "Chicago, IL",
    label: "Developer infrastructure",
    copy: "Improved internal build, test, and developer-productivity tooling through automation and production-quality engineering practices.",
    bullets: [
      "Automated validation and infrastructure tasks with Python and internal development tools.",
      "Added test coverage, diagnostic output, and reliability improvements to shared tooling.",
      "Worked through design reviews, code reviews, and structured testing with full-time engineers.",
    ],
    stack: ["Python", "Java", "Test Automation", "Build Tooling"],
  },
  {
    company: "Google",
    role: "Site Reliability Engineering Intern",
    dates: "Jun 2014 — Sep 2014",
    location: "Chicago, IL",
    label: "Reliability engineering",
    copy: "Supported reliability initiatives for large-scale production services and automated repetitive operational work.",
    bullets: [
      "Developed monitoring, diagnostic, and operational-validation automation.",
      "Investigated service behavior through logs, metrics, dashboards, and incident analysis.",
      "Applied distributed-systems and production-operations principles to reliability work.",
    ],
    stack: ["Python", "Linux", "Monitoring", "Distributed Systems"],
  },
  {
    company: "University of Chicago Booth",
    role: "Research Assistant — Software Engineering",
    dates: "Jun 2013 — Sep 2013",
    location: "Chicago, IL",
    label: "Research computing",
    copy: "Created data-processing software and repeatable analytical workflows for quantitative academic research.",
    bullets: [
      "Cleaned, transformed, and validated research datasets.",
      "Automated recurring analytical tasks and documented researcher workflows.",
    ],
    stack: ["Python", "SQL", "Data Processing"],
  },
];

const skillGroups = [
  { title: "Core engineering", icon: "01", skills: ["Python", "TypeScript", "Java", "Go", "SQL", "JavaScript"] },
  { title: "Healthcare data", icon: "02", skills: ["Claims", "Eligibility", "EHR", "FHIR", "dbt", "Data Quality", "HIPAA"] },
  { title: "Backend & data", icon: "03", skills: ["Spring Boot", "FastAPI", "Flask", "Node.js", "GraphQL", "Kafka", "PostgreSQL", "MongoDB"] },
  { title: "Cloud & platform", icon: "04", skills: ["AWS", "GCP", "BigQuery", "Snowflake", "Docker", "Kubernetes", "Terraform", "OpenTelemetry"] },
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Austin Byers, home">AB<span>.</span></a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
        </nav>
        <a className="header-cta" href="mailto:austinbyers9307@gmail.com">Let’s talk <ArrowIcon /></a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Senior software engineer · Fulton, Illinois</p>
            <h1 id="hero-title">I build the systems<br />behind <em>trusted data.</em></h1>
            <p className="hero-intro">Backend and data platform engineer working across healthcare, security, and cloud infrastructure—from messy source data to reliable production systems.</p>
            <div className="hero-actions">
              <a className="button primary" href="#experience">Explore experience <span aria-hidden="true">↓</span></a>
              <a className="button secondary" href="mailto:austinbyers9307@gmail.com">Email Austin <ArrowIcon /></a>
            </div>
          </div>
          <aside className="hero-card" aria-label="Career snapshot">
            <div className="monogram" aria-hidden="true">A<span>B</span></div>
            <p className="card-kicker">Current focus</p>
            <h2>Healthcare data that teams can trust and use.</h2>
            <div className="card-rule" />
            <div className="mini-stat"><strong>10+</strong><span>years building production software</span></div>
            <div className="mini-stat"><strong>4</strong><span>high-trust industries and platforms</span></div>
          </aside>
        </section>

        <section className="about section" id="about" aria-labelledby="about-title">
          <div className="section-label">01 / About</div>
          <div className="about-grid">
            <h2 id="about-title">Engineering at the intersection of <span>data, systems, and trust.</span></h2>
            <div className="about-copy">
              <p>Austin is a senior engineer with 10+ years of experience building backend services, distributed systems, cloud infrastructure, security platforms, and healthcare data applications.</p>
              <p>His recent work centers on warehouse-native healthcare data: claims and clinical normalization, data-quality validation, dbt pipelines, cloud data warehouses, and analytics-ready models.</p>
            </div>
          </div>
        </section>

        <section className="experience section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading">
            <div>
              <div className="section-label">02 / Experience</div>
              <h2 id="experience-title">A decade of building<br /><span>high-trust systems.</span></h2>
            </div>
            <p>Healthcare data, revenue operations, cloud security, identity systems, and developer infrastructure.</p>
          </div>

          <div className="timeline">
            {experience.map((job, index) => (
              <article className={`job ${job.featured ? "featured" : ""}`} key={`${job.company}-${job.dates}`}>
                <div className="job-index">{String(index + 1).padStart(2, "0")}</div>
                <div className="job-meta">
                  <p>{job.dates}</p>
                  <span>{job.location}</span>
                </div>
                <div className="job-body">
                  <div className="job-topline"><span>{job.label}</span>{job.featured && <b>Current</b>}</div>
                  <h3>{job.role}</h3>
                  <h4>{job.company}</h4>
                  <p className="job-copy">{job.copy}</p>
                  <ul>
                    {job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                  <div className="tags" aria-label={`${job.company} technologies`}>
                    {job.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills section" id="skills" aria-labelledby="skills-title">
          <div className="section-label light">03 / Skills & technologies</div>
          <div className="skills-heading">
            <h2 id="skills-title">Breadth for the platform.<br /><span>Depth where it matters.</span></h2>
            <p>A practical toolkit built through production work—not a keyword cloud.</p>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <span className="skill-number">{group.icon}</span>
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="education section" id="education" aria-labelledby="education-title">
          <div className="section-label">04 / Education</div>
          <div className="education-grid">
            <h2 id="education-title">The University<br />of Chicago</h2>
            <div className="degrees">
              <article><span>2015 — 2016</span><h3>Master of Science</h3><p>Computer Science</p></article>
              <article><span>2012 — 2016</span><h3>Bachelor of Science</h3><p>Mathematics & Computer Science</p></article>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact" aria-labelledby="contact-title">
          <p>Have a hard systems problem?</p>
          <h2 id="contact-title">Let’s make it<br /><em>clear and reliable.</em></h2>
          <a href="mailto:austinbyers9307@gmail.com">austinbyers9307@gmail.com <ArrowIcon /></a>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#top">AB<span>.</span></a>
        <p>Senior Backend & Data Platform Engineer</p>
        <p>© {new Date().getFullYear()} Austin Byers</p>
      </footer>
    </>
  );
}
