import React from "react";
import { Github, Linkedin, Mail, ExternalLink, FileText, ChevronRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const PROFILE = {
  name: "Anherutowa Calvo",
  tagline: "ML + Bio • Molecular Simulation • Builder of Scalable Algorithms",
  about:
    "Princeton junior blending machine learning, molecular dynamics, and computational biology. Experienced in protein language models, ligand docking, and hybrid physics–ML pipelines. Passionate about building scalable algorithms for drug discovery and biotech innovation.",
  location: "Princeton, New Jersey",
  email: "ac1180@princeton.edu",
};

const LINKS = {
  github: "https://github.com/Atbcalvo",
  linkedin: "https://linkedin.com/in/anherutowacalvo",
  resume: "CV.pdf",
};

const PROJECTS = [
  {
    title: "Vaccine Mutation Embedding Trajectory Prediction",
    blurb:
      "Simulated and forecasted antigenic drift using protein LLM embeddings, advancing vaccine strain selection pipelines at Pfizer.",
    tags: ["Protein LLMs", "PyTorch", "UMAP"],
    href: "#",
  },
  {
    title: "Segmental Hash-Guided Alignment (SHGA)",
    blurb:
      "Designed an O(n log n) sequence alignment algorithm that cut runtime from days to hours on 150k+ proteins while preserving accuracy.",
    tags: ["Algorithms", "Python", "HPC"],
    href: "#",
  },
  {
    title: "Optimized Modeling of ESM2",
    blurb:
      "Extended sequence coverage beyond 1024 tokens by contrastively aligning N- and C-terminal encoders, boosting spike protein predictions.",
    tags: ["ESM2", "Contrastive Learning", "CLIP"],
    href: "#",
  },
  {
    title: "Bionics: Myoelectric Prosthetic Hand",
    blurb:
      "Built EMG-driven prosthetic with ML gesture recognition and adaptive grip, improving dexterity for real-world use.",
    tags: ["Arduino", "Python", "3D Printing"],
    href: "#",
  },
  {
    title: "Artificial Heart Prototype",
    blurb:
      "Developed a biomechanical heart model with COMSOL + 3D bioprinting, simulating fluid dynamics for optimized cardiac output.",
    tags: ["MATLAB", "COMSOL", "Bioprinting"],
    href: "#",
  },
  {
    title: "Comparative Analysis of C. bescii and T. kivui",
    blurb:
      "Used AlphaFold and Rosetta docking to study sugar metabolism pathways, informing strategies for biofuel production.",
    tags: ["AlphaFold", "Rosetta", "Biofuels"],
    href: "#",
  },
];

const EXPERIENCE = [
  {
    org: "Pfizer Inc.",
    role: "ML/AI Research Intern",
    time: "May 2025 – Present",
    bullets: [
      "Engineered protein language models, reducing perplexity by >98% and boosting virology benchmarks.",
      "Advanced vaccine strain selection with embedding-based mutation trajectory prediction.",
      "Built evaluation harnesses balancing generalization and specialization in adapted protein LLMs.",
    ],
  },
  {
    org: "Joseph Research Group, Princeton",
    role: "ML & Molecular Simulation Researcher",
    time: "Mar 2025 – Present",
    bullets: [
      "Developed hybrid physics–ML pipelines coupling coarse-grained MD with thermodynamic analysis.",
      "Mapped condensate phase behavior and prioritized small-molecule modulators for ALS and cancer.",
    ],
  },
  {
    org: "Conway Research Group, Princeton",
    role: "Student Researcher",
    time: "Apr 2024 – Present",
    bullets: [
      "Applied AlphaFold and Rosetta docking to probe carbohydrate transporter mechanisms in C. bescii.",
      "Linked docking predictions to growth assays, deepening insight into protein–ligand interactions.",
    ],
  },
  {
    org: "Stanford University",
    role: "ML/AI Research Intern",
    time: "Jun 2025 – Aug 2025",
    bullets: [
      "Built self-supervised pipelines for medical imaging with CLIP-style image–metadata alignment.",
      "Fine-tuned ViT/UNet for classification and segmentation with calibrated, uncertainty-aware outputs.",
    ],
  },
  {
    org: "Johns Hopkins University",
    role: "ML/AI Research Intern",
    time: "Jul 2024 – Oct 2024",
    bullets: [
      "Architected hybrid deep learning models for breast cancer detection on mammography/MRI.",
      "Automated tumor segmentation, reducing radiologist review time by 40%+.",
    ],
  },
  {
    org: "Merck & Co.",
    role: "ML/AI Research Intern",
    time: "Jan 2025 – Feb 2025",
    bullets: [
      "Developed forecasting model for varicella vaccine demand using epidemiological trends.",
      "Evaluated pediatric vaccine formulations for stability and efficacy across conditions.",
    ],
  },
  {
    org: "National Institutes of Health",
    role: "Epidemiology & Public Health Intern",
    time: "Aug 2024 – Oct 2024",
    bullets: [
      "Built Guam Health Initiative Survey, a secure full-stack platform for epidemiological tracking.",
      "Visualized disease prevalence trends to support public health policy recommendations.",
    ],
  },
  {
    org: "Andlinger Center for Energy & Environment, Princeton",
    role: "Bioengineering Intern",
    time: "May 2024 – Aug 2024",
    bullets: [
      "Engineered thermophilic lignocellulose-degrading bacteria to enhance biofuel production.",
      "Performed metabolomic and proteomic analyses to refine bioconversion processes.",
    ],
  },
];


const Section = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-24 py-14" aria-label={title}>
    <div className="mx-auto max-w-5xl px-6">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-6">{children}</div>
    </div>
  </section>
);

const Card = ({ children, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="group block rounded-2xl border border-zinc-200/60 bg-white p-5 shadow-sm transition hover:shadow-md"
  >
    {children}
  </a>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white text-zinc-900">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-zinc-200/60">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
          <a href="#home" className="font-semibold">{PROFILE.name}</a>
          <div className="flex items-center gap-3 text-sm">
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="inline-flex items-center gap-1 rounded-full border border-zinc-300 px-3 py-1 hover:bg-zinc-100">
              <Mail className="h-4 w-4" /> Contact
            </a>
          </div>
        </nav>
      </header>

      <motion.section
        id="home"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-5xl px-6 pt-16 pb-10"
      >
        <div className="grid gap-6 md:grid-cols-[1.4fr,1fr] md:items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {PROFILE.name}
            </h1>
            <p className="mt-3 text-lg text-zinc-700">{PROFILE.tagline}</p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              {LINKS.github && (
                <a
                  href={LINKS.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 hover:bg-zinc-100"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
              )}
              {LINKS.linkedin && (
                <a
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 hover:bg-zinc-100"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              )}
              {LINKS.resume && (
                <a
                  href={LINKS.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-900 bg-zinc-900 px-4 py-2 font-medium text-white hover:bg-zinc-800"
                >
                  <FileText className="h-4 w-4" /> Resume <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200/60 bg-white p-5 shadow-sm">
            <dl className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-zinc-500">Location</dt>
                <dd className="font-medium">{PROFILE.location}</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Email</dt>
                <dd className="font-medium">{PROFILE.email}</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Open to</dt>
                <dd className="font-medium">Internships • Collabs • Speaking</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Focus</dt>
                <dd className="font-medium">ML, MD, Biotech Innovation</dd>
              </div>
            </dl>
          </div>
        </div>
      </motion.section>

      <Section id="projects" title="Selected Projects">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Card href={p.href}>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold leading-tight">{p.title}</h3>
                  <ExternalLink className="h-4 w-4 shrink-0 opacity-60 group-hover:opacity-100" />
                </div>
                <p className="mt-2 text-sm text-zinc-600">{p.blurb}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t, j) => (
                    <span key={j} className="rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-xs text-zinc-700">
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="space-y-4">
          {EXPERIENCE.map((x, i) => (
            <div key={i} className="rounded-2xl border border-zinc-200/60 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="text-base font-semibold">{x.role} • {x.org}</div>
                <div className="text-sm text-zinc-500">{x.time}</div>
              </div>
              <ul className="mt-3 list-inside space-y-1 text-sm text-zinc-700">
                {x.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2"><ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-zinc-400" /> {b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="about" title="About">
        <div className="prose prose-zinc max-w-none">
          <p>{PROFILE.about}</p>
            Studying Chemical & Biological Engineering with minors in 
            Statistics & Machine Learning and Math. My work sits at the interface 
            of machine learning and molecular biophysics—building models that make sense of 
            proteins, ligands, and biological systems at scale.
          <p>
            I’m especially interested in how computational methods can accelerate drug discovery, 
            from large language models to molecular dynamics and docking simulations. I care 
            about problems that bridge deep science and scalable systems, where new algorithms 
            can unlock biomedical impact. Outside of research, I enjoy skateboarding, boba, and 
            building projects that blend technical depth with creative communication.
          </p>
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="rounded-2xl border border-zinc-200/60 bg-white p-6 shadow-sm">
          <p className="text-zinc-700">
            The fastest way to reach me is <a href={`mailto:${PROFILE.email}`} className="font-medium underline">email</a>. I'm open to interesting problems, collaborations, and speaking invites.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 hover:bg-zinc-100">
              <Mail className="h-4 w-4" /> Say hello
            </a>
            {LINKS.linkedin && (
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 hover:bg-zinc-100">
                <Linkedin className="h-4 w-4" /> Connect
              </a>
            )}
            {LINKS.github && (
              <a href={LINKS.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 hover:bg-zinc-100">
                <Github className="h-4 w-4" /> Repos
              </a>
            )}
          </div>
        </div>
      </Section>

      <footer className="border-t border-zinc-200/60">
        <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-zinc-500">
          © {new Date().getFullYear()} {PROFILE.name}. Built with ❤️.
        </div>
      </footer>
    </div>
  );
}
