const milestones = [
  { year: "1950s", title: "The question", text: "Turing reframed machine intelligence as observable behavior." },
  { year: "1956", title: "AI is named", text: "The Dartmouth workshop established artificial intelligence as a field." },
  { year: "1980s", title: "Expert systems", text: "Rules and domain knowledge moved AI into business settings." },
  { year: "1997", title: "Machines compete", text: "Deep Blue demonstrated the power of specialized computation." },
  { year: "2012", title: "Deep learning", text: "Neural networks accelerated progress in vision and pattern recognition." },
  { year: "2017", title: "Transformers", text: "Attention-based models changed how machines work with language." },
  { year: "2020s", title: "Generative AI", text: "AI became a collaborative interface for creating, deciding, and working." },
  { year: "Next", title: "Responsible scale", text: "The leadership challenge is pairing usefulness with trust and governance." },
];

const profileElements = [
  "Name + brief bio",
  "Keynote topics",
  "Target audience",
  "Speaking style",
  "Travel preferences",
  "A/V requirements",
  "Languages",
  "Pricing structure",
];

export default function Home() {
  return (
    <main>
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="Sirisha Neelam — home">
          <span className="brand-mark">SN</span>
          <span>Sirisha Neelam</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#work">Artifacts</a>
          <a href="#experience">Experience</a>
          <a className="nav-cta" href="#contact">Let&apos;s connect</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">AI/ML · Product thinking · Change leadership</p>
          <h1>I turn emerging technology into <em>useful, human-centered products.</em></h1>
          <p className="hero-lede">
            I connect customer insight, responsible AI, and product execution to move ideas from ambiguity to adoption.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">Explore the work <span>↘</span></a>
            <a className="button quiet" href="https://github.com/sirishaneelam-UB/AI-ML-Portfolio" target="_blank" rel="noreferrer">View GitHub</a>
          </div>
        </div>
        <div className="hero-card" aria-label="Professional focus areas">
          <p className="card-kicker">My value proposition</p>
          <blockquote>“I make AI understandable, actionable, and valuable—for the people who use it and the teams who build it.”</blockquote>
          <div className="focus-grid">
            <div><strong>01</strong><span>Discover the right problem</span></div>
            <div><strong>02</strong><span>Translate insight into product</span></div>
            <div><strong>03</strong><span>Lead responsible change</span></div>
          </div>
        </div>
      </section>

      <section className="manifesto" id="about">
        <p className="section-label">01 / About</p>
        <div>
          <h2>Curious by nature.<br />Practical by design.</h2>
          <p>
            I am a product-minded professional building fluency in artificial intelligence and machine learning. My journey is grounded in a simple belief: technology creates lasting value only when it solves a real human need.
          </p>
          <p>
            I bring structure to ambiguity, listen closely to users, and translate complex ideas into clear experiences. My aspiration is to lead responsible AI-enabled change—helping teams move from experimentation to confident, measurable adoption.
          </p>
          <div className="principles">
            <span>Customer empathy</span><span>0→1 thinking</span><span>Responsible AI</span><span>Collaborative delivery</span>
          </div>
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-intro">
          <p className="section-label light">02 / Selected artifacts</p>
          <h2>From learning to applied impact.</h2>
          <p>Three course-based artifacts that demonstrate how I investigate, frame, build, and communicate with AI.</p>
        </div>

        <article className="case-study">
          <div className="case-head">
            <div>
              <p className="artifact-number">Artifact 01 · Group AI Lab</p>
              <h3>Spotlight Speakers</h3>
              <p className="case-subtitle">An AI-assisted speaker bureau, built from 0→1 with six teammates.</p>
            </div>
            <a className="external-link" href="https://box.boodle.ai/a/@spotlightSpeaker" target="_blank" rel="noreferrer">Try the AI bot ↗</a>
          </div>

          <div className="case-grid">
            <div className="case-narrative">
              <p className="mini-label">The opportunity</p>
              <p>Booking a professional speaker is a high-consideration decision. Clients must compare expertise, audience fit, style, logistics, and budget—often across fragmented information.</p>
              <p className="mini-label">The product response</p>
              <p>Our seven-person team created a conversational bot that transforms detailed speaker interviews into structured profiles and helps clients discover a strong-fit speaker faster.</p>
            </div>
            <div className="product-lens">
              <p className="mini-label">My product management lens</p>
              <ul>
                <li><strong>Discovery:</strong> start with rich qualitative interviews, not assumptions.</li>
                <li><strong>Data design:</strong> turn unstructured stories into consistent product inputs.</li>
                <li><strong>Experience:</strong> reduce search friction through guided conversation.</li>
                <li><strong>Delivery:</strong> align seven teammates around one usable end-to-end outcome.</li>
              </ul>
            </div>
          </div>

          <div className="infographic process-graphic" aria-label="Spotlight Speakers product development process">
            <div className="graphic-head"><span>Process infographic</span><strong>From conversation to confident match</strong></div>
            <div className="process-flow">
              <div className="process-step"><b>01</b><span className="step-icon">◌</span><h4>Listen deeply</h4><p>Interview each speaker for expertise, style, constraints, and goals.</p></div>
              <div className="flow-arrow">→</div>
              <div className="process-step"><b>02</b><span className="step-icon">▤</span><h4>Structure profiles</h4><p>Convert stories into eight consistent, client-relevant fields.</p></div>
              <div className="flow-arrow">→</div>
              <div className="process-step"><b>03</b><span className="step-icon">✦</span><h4>Build the bot</h4><p>Ground the AI experience in the complete speaker profile set.</p></div>
              <div className="flow-arrow">→</div>
              <div className="process-step"><b>04</b><span className="step-icon">✓</span><h4>Guide the match</h4><p>Help clients move from need to shortlist with clarity.</p></div>
            </div>
          </div>

          <div className="profile-panel">
            <div><p className="mini-label">The data foundation</p><h4>Eight fields make every profile useful and comparable.</h4></div>
            <div className="profile-tags">{profileElements.map((item, index) => <span key={item}><b>{String(index + 1).padStart(2, "0")}</b>{item}</span>)}</div>
          </div>

          <div className="infographic marketing-graphic" aria-label="Spotlight Speakers promotional infographic">
            <div className="promo-copy">
              <p className="promo-kicker">SPOTLIGHT / SPEAKERS</p>
              <h4>Your audience deserves the right voice.</h4>
              <p>Describe your event. Discover a speaker aligned to your topic, audience, format, and budget.</p>
              <a href="https://box.boodle.ai/a/@spotlightSpeaker" target="_blank" rel="noreferrer">Meet your match →</a>
            </div>
            <div className="bot-window">
              <div className="bot-top"><span></span><span></span><span></span><b>Spotlight Match</b></div>
              <div className="chat user">I need an engaging speaker for emerging leaders.</div>
              <div className="chat bot">Great—what outcome should the audience leave with?</div>
              <div className="match-pill">Finding the fit, not just a name.</div>
            </div>
          </div>

          <div className="outcome-row">
            <div><strong>0→1</strong><span>from open problem to working experience</span></div>
            <div><strong>7</strong><span>teammates aligned around one product</span></div>
            <div><strong>8</strong><span>structured fields per speaker profile</span></div>
          </div>
        </article>

        <article className="artifact timeline-artifact">
          <div className="artifact-heading">
            <p className="artifact-number">Artifact 02 · AI/ML Timeline</p>
            <h3>Every breakthrough changes the leadership question.</h3>
            <p>AI evolved from a theoretical question into an everyday collaborator. The opportunity now is not simply to use it—but to shape how it is used.</p>
          </div>
          <div className="timeline">
            {milestones.map((item) => <div className="milestone" key={item.year}><span className="dot"></span><time>{item.year}</time><h4>{item.title}</h4><p>{item.text}</p></div>)}
          </div>
          <p className="timeline-takeaway"><strong>My takeaway:</strong> technical capability may move in leaps, but adoption moves at the speed of understanding, trust, and organizational readiness.</p>
        </article>

        <article className="artifact reflection-artifact">
          <div className="artifact-heading">
            <p className="artifact-number">Artifact 03 · AI/ML Understanding</p>
            <h3>My framework for responsible application.</h3>
            <p>Course assessments helped me move beyond definitions toward a product-oriented understanding of where AI creates value—and where human judgment must remain visible.</p>
          </div>
          <div className="understanding-grid">
            <div><span>01</span><h4>Frame the problem</h4><p>Begin with the decision or experience to improve. AI is a means, not the strategy.</p></div>
            <div><span>02</span><h4>Know the data</h4><p>Model output reflects its inputs. Relevance, representation, consent, and quality matter.</p></div>
            <div><span>03</span><h4>Design for people</h4><p>Make the system understandable, accessible, and easy to challenge when it is wrong.</p></div>
            <div><span>04</span><h4>Measure real value</h4><p>Evaluate usefulness and outcomes—not novelty, activity, or output volume alone.</p></div>
            <div><span>05</span><h4>Keep humans accountable</h4><p>Automate assistance, not responsibility. Escalation and review should be intentional.</p></div>
            <div><span>06</span><h4>Learn in the loop</h4><p>Monitor performance, gather feedback, and update the product as needs and risks evolve.</p></div>
          </div>
          <div className="reflection-quote">“The strongest AI product is not the one that does the most. It is the one that earns the right level of trust.”</div>
        </article>
      </section>

      <section className="experience" id="experience">
        <p className="section-label">03 / Experience & capabilities</p>
        <div className="experience-copy">
          <h2>A builder at the intersection of people, product, and possibility.</h2>
          <p>My portfolio demonstrates an emerging product practice: customer discovery, structured synthesis, cross-functional collaboration, AI-assisted experience design, and clear communication for adoption.</p>
          <div className="capability-list">
            <div><span>Product</span><p>0→1 discovery · problem framing · value proposition · user journeys · prioritization</p></div>
            <div><span>AI / ML</span><p>AI foundations · prompt design · structured knowledge · responsible adoption · evaluation mindset</p></div>
            <div><span>Leadership</span><p>Stakeholder alignment · team collaboration · change communication · storytelling</p></div>
          </div>
          <p className="resume-note">Detailed employment history and contact information will be added from the final resume source.</p>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="section-label light">04 / Contact</p>
        <div>
          <h2>Let&apos;s build what&apos;s next—responsibly.</h2>
          <p>I&apos;m interested in conversations about AI-enabled product strategy, change leadership, and human-centered innovation.</p>
          <a className="button contact-button" href="https://github.com/sirishaneelam-UB" target="_blank" rel="noreferrer">Connect on GitHub ↗</a>
        </div>
      </section>

      <footer><span>Sirisha Neelam</span><span>AI/ML Portfolio · 2026</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
