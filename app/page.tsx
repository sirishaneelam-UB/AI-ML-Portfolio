"use client";

import { useEffect, useState } from "react";

type Artifact = {
  id: string;
  number: string;
  title: string;
  type: string;
  summary: string;
  introduction: string;
  objective: string;
  process: string;
  tools: string;
  value: string;
  relevance: string;
  link?: string;
};

const artifacts: Artifact[] = [
  {
    id: "spotlight",
    number: "01",
    title: "Spotlight Speakers AI Lab",
    type: "0→1 Group Product · AI Bot",
    summary: "A conversational speaker-discovery experience built with six teammates from deep interviews to a usable AI bot.",
    introduction: "Spotlight Speakers helps event organizers find a professional speaker whose expertise, audience fit, style, logistics, and pricing align with their event.",
    objective: "Reduce the friction and uncertainty in speaker selection by turning detailed speaker knowledge into an accessible guided conversation.",
    process: "Our seven-person team interviewed every speaker, developed structured profiles, grounded the bot in those profiles, tested the booking flow, and created process and marketing communications.",
    tools: "Qualitative interviews, structured knowledge design, conversational AI, prompt guidance, product storytelling",
    value: "Transforms fragmented speaker information into a consistent, client-centered matching experience.",
    relevance: "Demonstrates customer discovery, data structuring, cross-functional teamwork, AI product thinking, and 0→1 delivery.",
    link: "https://box.boodle.ai/a/@spotlightSpeaker",
  },
  {
    id: "timeline",
    number: "02",
    title: "AI & Machine Learning Timeline",
    type: "Interactive Learning Artifact",
    summary: "A concise visual history connecting foundational AI milestones to today’s leadership questions.",
    introduction: "The timeline follows AI from Turing’s early question and the Dartmouth workshop through expert systems, deep learning, transformers, and generative AI.",
    objective: "Explain how technical breakthroughs, periods of limited progress, and changing access to computing shaped the field.",
    process: "Selected milestones for their lasting influence, synthesized the key shift at each stage, and translated the research into an accessible chronological experience.",
    tools: "Course assessments, AI/ML research, synthesis, information design",
    value: "Helps non-specialists understand that AI progress is cumulative—and that responsible adoption is now the defining leadership challenge.",
    relevance: "Shows the ability to turn complex history into a useful resource for strategic conversations.",
  },
  {
    id: "understanding",
    number: "03",
    title: "My Responsible AI Practice",
    type: "Assessment Synthesis · Framework",
    summary: "A six-part framework for applying AI with clarity, accountability, and measurable human value.",
    introduction: "My course assessments moved my understanding beyond definitions and toward the decisions required to create trustworthy AI-enabled products.",
    objective: "Create a practical framework that connects problem framing, data quality, human-centered design, measurement, accountability, and continuous learning.",
    process: "Reviewed recurring themes across assessments, grouped them into product decisions, and expressed each as an action a team can use.",
    tools: "Course assessments, reflection, responsible AI principles, product strategy",
    value: "Makes responsible AI concrete enough to guide discovery, delivery, review, and improvement.",
    relevance: "Positions AI literacy as a change-leadership capability—not only a technical skill.",
  },
];

const milestones = [
  ["1950", "The question", "Can machines demonstrate intelligent behavior?"],
  ["1956", "AI is named", "A new academic field takes shape at Dartmouth."],
  ["1980s", "Expert systems", "Rules and domain knowledge enter business."],
  ["2012", "Deep learning", "Neural networks accelerate vision and pattern recognition."],
  ["2017", "Transformers", "Attention changes machine understanding of language."],
  ["2020s", "Generative AI", "AI becomes an everyday collaborative interface."],
];

const skills = [
  ["Product Strategy", "0→1 discovery, problem framing, user journeys, value propositions"],
  ["AI / ML", "AI foundations, prompt design, structured knowledge, responsible adoption"],
  ["Research", "Qualitative interviews, synthesis, audience needs, insight translation"],
  ["Leadership", "Team alignment, change communication, stakeholder storytelling"],
  ["Experience Design", "Conversational flows, information architecture, accessibility"],
  ["Communication", "Infographics, executive-ready narratives, educational resources"],
];

export default function Home() {
  const [selected, setSelected] = useState<Artifact | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.12 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!selected) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setSelected(null);
    document.addEventListener("keydown", close);
    document.body.classList.add("modal-open");
    return () => {
      document.removeEventListener("keydown", close);
      document.body.classList.remove("modal-open");
    };
  }, [selected]);

  return (
    <main>
      <nav className="navbar" aria-label="Primary navigation">
        <a className="nav-logo" href="#home"><span>SN</span> Sirisha Neelam</a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#learning">Learning</a>
          <a href="#skills">Skills</a>
          <a href="#artifacts">Artifacts</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-github" href="https://github.com/sirishaneelam-UB/AI-ML-Portfolio" target="_blank" rel="noreferrer">GitHub ↗</a>
      </nav>

      <section className="home-section reveal visible" id="home">
        <div className="profile-monogram" aria-label="Sirisha Neelam monogram"><span>SN</span></div>
        <p className="status"><i></i> Building human-centered AI products</p>
        <h1>Sirisha Neelam</h1>
        <h2>AI/ML Product Thinker <b>·</b> Change Leader <b>·</b> 0→1 Builder</h2>
        <p className="hero-copy">I turn emerging technology into useful, understandable, and responsible experiences for the people who use it and the teams who bring it to life.</p>
        <div className="hero-actions">
          <a className="button primary" href="#artifacts">Explore my work</a>
          <a className="button secondary" href="https://box.boodle.ai/a/@spotlightSpeaker" target="_blank" rel="noreferrer">Try the AI bot ↗</a>
        </div>
        <a className="scroll-cue" href="#about"><span>Scroll to discover</span><b>↓</b></a>
      </section>

      <div className="site-shell">
        <section className="section-card reveal" id="about">
          <div className="section-heading"><span>01</span><div><p>Professional profile</p><h2>About Me</h2></div></div>
          <div className="about-grid">
            <div>
              <p className="lead">I connect customer insight, product thinking, and responsible AI to turn ambiguous opportunities into practical solutions.</p>
              <p>I am developing my expertise in artificial intelligence and machine learning with a product-management mindset. I start by understanding the human need, translate qualitative insight into structured decisions, and communicate complexity in a way that helps others act.</p>
              <p>My aspiration is to lead AI-enabled change that earns trust, improves real experiences, and creates measurable value—not novelty for its own sake.</p>
            </div>
            <aside className="value-card">
              <span>Personal value proposition</span>
              <blockquote>“I make AI understandable, actionable, and valuable.”</blockquote>
              <ul><li>Discover the right problem</li><li>Translate insight into product</li><li>Lead responsible adoption</li></ul>
            </aside>
          </div>
        </section>

        <section className="section-card reveal" id="experience">
          <div className="section-heading"><span>02</span><div><p>Applied product work</p><h2>Experience</h2></div></div>
          <article className="experience-item featured">
            <div className="experience-marker"><i></i><span>0→1</span></div>
            <div className="experience-body">
              <div className="experience-title"><div><h3>Product Contributor · Spotlight Speakers AI Lab</h3><p>Seven-person group project</p></div><span>AI-assisted speaker booking</span></div>
              <ul>
                <li>Conducted deep speaker interviews to capture expertise, audience fit, speaking style, logistics, languages, requirements, and pricing.</li>
                <li>Translated unstructured interview notes into eight consistent profile fields that made speakers comparable and searchable.</li>
                <li>Helped shape a conversational AI bot that guides clients from event need to a relevant speaker match.</li>
                <li>Communicated the end-to-end journey through improved process and marketing infographics.</li>
                <li>Collaborated with six teammates to take the concept from an open problem to a working experience.</li>
              </ul>
              <div className="impact-strip"><div><strong>7</strong><span>team members</span></div><div><strong>8</strong><span>profile fields</span></div><div><strong>1</strong><span>working AI bot</span></div></div>
            </div>
          </article>
          <p className="source-note">Verified employment history and dates will be added when the résumé source is available.</p>
        </section>

        <section className="section-card reveal" id="learning">
          <div className="section-heading"><span>03</span><div><p>AI/ML development</p><h2>Learning Journey</h2></div></div>
          <div className="learning-grid">
            <div className="learning-card"><span>Course-based study</span><h3>Artificial Intelligence & Machine Learning</h3><p>Developing fluency in AI history, ML foundations, generative AI, responsible application, and product implications through assessments and applied artifacts.</p></div>
            <div className="learning-card accent"><span>Applied lab</span><h3>Spotlight Speakers</h3><p>Practiced discovery, knowledge structuring, conversational design, product communication, and cross-functional delivery in a real group setting.</p></div>
          </div>
          <div className="timeline" aria-label="AI and machine learning timeline">
            {milestones.map(([year, title, text]) => <div className="timeline-item" key={year}><time>{year}</time><i></i><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </section>

        <section className="section-card reveal" id="skills">
          <div className="section-heading"><span>04</span><div><p>Capabilities</p><h2>Skills & Expertise</h2></div></div>
          <div className="skills-grid">{skills.map(([title, text], index) => <div className="skill-card" key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></div>)}</div>
        </section>

        <section className="section-card reveal" id="artifacts">
          <div className="section-heading"><span>05</span><div><p>Selected course work</p><h2>Artifacts</h2></div></div>
          <p className="section-intro">Each artifact is presented as a reusable professional resource: what it solves, how it was developed, and the value it demonstrates.</p>
          <div className="artifacts-grid">
            {artifacts.map((artifact) => (
              <button className="artifact-card" key={artifact.id} onClick={() => setSelected(artifact)} aria-label={`Open details for ${artifact.title}`}>
                <span className="artifact-number">{artifact.number}</span>
                <p>{artifact.type}</p>
                <h3>{artifact.title}</h3>
                <span className="artifact-summary">{artifact.summary}</span>
                <b>View project details <i>↗</i></b>
              </button>
            ))}
          </div>
        </section>

        <section className="section-card reveal" id="principles">
          <div className="section-heading"><span>06</span><div><p>Assessment synthesis</p><h2>How I Apply AI</h2></div></div>
          <div className="principles-grid">
            {["Frame the human problem", "Understand the data", "Design for clarity", "Measure real value", "Keep people accountable", "Learn in the loop"].map((item, index) => <div key={item}><span>{index + 1}</span><h3>{item}</h3></div>)}
          </div>
          <blockquote className="principle-quote">The strongest AI product is not the one that does the most. It is the one that earns the right level of trust.</blockquote>
        </section>

        <section className="contact-section reveal" id="contact">
          <p>Open to conversations about</p>
          <h2>AI-enabled product strategy, responsible innovation, and change leadership.</h2>
          <div className="contact-actions"><a className="button primary" href="https://github.com/sirishaneelam-UB" target="_blank" rel="noreferrer">Connect on GitHub ↗</a><a className="button secondary" href="#home">Back to top ↑</a></div>
          <p className="contact-note">Direct email and LinkedIn details can be added from the verified résumé.</p>
        </section>
      </div>

      <footer><span>© 2026 Sirisha Neelam</span><span>AI/ML Product Portfolio</span><a href="https://github.com/sirishaneelam-UB/AI-ML-Portfolio" target="_blank" rel="noreferrer">Source on GitHub ↗</a></footer>

      {selected && (
        <div className="modal-overlay" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setSelected(null)}>
          <section className="modal" role="dialog" aria-modal="true" aria-labelledby="artifact-modal-title">
            <div className="modal-top"><span>Artifact {selected.number}</span><button onClick={() => setSelected(null)} aria-label="Close project details">×</button></div>
            <p className="modal-type">{selected.type}</p>
            <h2 id="artifact-modal-title">{selected.title}</h2>
            <div className="modal-content">
              <div><h3>Introduction</h3><p>{selected.introduction}</p></div>
              <div><h3>Objective</h3><p>{selected.objective}</p></div>
              <div><h3>Process</h3><p>{selected.process}</p></div>
              <div><h3>Tools & methods</h3><p>{selected.tools}</p></div>
              <div><h3>Value proposition</h3><p>{selected.value}</p></div>
              <div><h3>Professional relevance</h3><p>{selected.relevance}</p></div>
            </div>
            <div className="modal-actions">{selected.link && <a className="button primary" href={selected.link} target="_blank" rel="noreferrer">Open the AI bot ↗</a>}<button className="button secondary" onClick={() => setSelected(null)}>Close</button></div>
          </section>
        </div>
      )}
    </main>
  );
}
