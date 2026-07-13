const skills = [
  { title: "MERN Stack", description: "React, Node.js, Express, MongoDB" },
  { title: "MEAN Stack", description: "Angular, Node.js, Express, MongoDB" },
  { title: "AWS & Cloud", description: "Deployment, serverless, scalable architectures" },
  { title: "LLM & RAG", description: "Prompt engineering, vector search, AI applications" },
  { title: "Java & Python", description: "Backend logic, automation, APIs" },
  { title: "Modern UI", description: "Tailwind, responsive design, polished UX" },
];

const projects = [
  {
    title: "AI Knowledge Assistant",
    description: "Built a retrieval-augmented chat experience with LLM workflows and document search.",
    stack: "Next.js • Python • RAG",
  },
  {
    title: "Scalable Web Platform",
    description: "Delivered a full-stack product with secure auth, dashboards, and cloud deployment.",
    stack: "MERN • AWS • REST APIs",
  },
  {
    title: "Enterprise Dashboard",
    description: "Crafted a data-rich application with modern UI and smooth user interactions.",
    stack: "MEAN • Angular • Node.js",
  },
];

const highlights = [
  "B.Tech in CSE from Chandigarh University, 2024",
  "2+ years of full-stack development experience",
  "Focused on modern web apps, AI systems, and cloud products",
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.35),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#111827_45%,_#1f2937_100%)] text-slate-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="blob blob-one" />
        <div className="blob blob-two" />
        <div className="blob blob-three" />
      </div>

      <main className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 py-8 sm:px-8 lg:px-12">
        <header className="mb-10 flex flex-wrap items-center justify-between gap-4 rounded-full border border-white/10 bg-white/10 px-4 py-3 shadow-lg shadow-black/20 backdrop-blur-xl">
          <a href="#home" className="text-lg font-semibold tracking-[0.25em] text-white">
            SONAL
          </a>
          <nav className="flex flex-wrap gap-4 text-sm text-slate-300">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </header>

        <section id="home" className="grid items-center gap-10 py-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="fade-up space-y-6">
            <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200">
              Available for impactful full-stack opportunities
            </div>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
              Hi, I&apos;m <span className="text-transparent bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300 bg-clip-text">Sonal</span>.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              I&apos;m a full-stack developer with 2 years of experience building modern web products with MERN, MEAN, AWS, LLM, RAG, Java, and Python.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:-translate-y-1 hover:bg-cyan-200"
              >
                Explore Projects
              </a>
              <a
                href="mailto:sonal@example.com"
                className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-300 hover:text-cyan-200"
              >
                Let&apos;s Connect
              </a>
            </div>
            <div className="grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card animate-float">
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-black/40">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm uppercase tracking-[0.3em] text-slate-400">Profile Snapshot</span>
                <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-medium text-emerald-300">
                  Available now
                </span>
              </div>
              <div className="grid gap-4">
                <div className="rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 p-4">
                  <p className="text-4xl font-semibold text-white">2+</p>
                  <p className="mt-1 text-sm text-slate-300">Years building scalable web experiences</p>
                </div>
                <div className="rounded-2xl border border-white/10 p-4">
                  <p className="text-sm text-slate-400">Education</p>
                  <p className="mt-1 font-medium text-white">B.Tech • Chandigarh University • 2024</p>
                </div>
                <div className="rounded-2xl border border-white/10 p-4">
                  <p className="text-sm text-slate-400">Stack Highlights</p>
                  <p className="mt-1 font-medium text-white">MERN • MEAN • AWS • LLM • RAG</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="fade-up mt-8 rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">About me</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-semibold text-white">Crafting thoughtful digital experiences with modern tech.</h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                I enjoy turning complex ideas into fast, intuitive, and scalable products. My background blends frontend polish, backend architecture, and AI-enabled solutions.
              </p>
            </div>
            <div className="rounded-3xl border border-cyan-400/20 bg-slate-950/40 p-6">
              <p className="text-sm text-slate-400">What I bring</p>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li>• End-to-end development from UI to deployment</li>
                <li>• Strong problem-solving for modern product teams</li>
                <li>• Curiosity for AI, cloud infrastructure, and automation</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="mt-12">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Skills</p>
              <h2 className="text-3xl font-semibold text-white">Core strengths</h2>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skills.map((skill) => (
              <div key={skill.title} className="group rounded-3xl border border-white/10 bg-slate-900/50 p-6 transition hover:-translate-y-1 hover:border-cyan-300/40">
                <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
                <p className="mt-2 text-slate-300">{skill.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mt-12 rounded-[2rem] border border-white/10 bg-slate-950/40 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Featured work</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">Selected projects</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="rounded-3xl border border-white/10 bg-white/10 p-6 transition hover:-translate-y-1 hover:border-cyan-300/40">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-slate-300">{project.description}</p>
                <p className="mt-5 text-sm font-medium text-cyan-200">{project.stack}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-12 pb-8">
          <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/15 to-violet-500/15 p-8 text-center shadow-xl shadow-cyan-950/30">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Let&apos;s build something great</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Interested in working together?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-300">
              I&apos;m excited to contribute to ambitious teams creating powerful products with clean code and thoughtful UX.
            </p>
            <a
              href="mailto:sonal@example.com"
              className="mt-6 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:-translate-y-1"
            >
              Say hello
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
