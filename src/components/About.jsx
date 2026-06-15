// src/components/About.jsx
import "./About.css";

const About = () => {
  return (
    <section className="section about">
      <div className="container about-inner">
        <div className="about-image" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80"
            alt=""
          />
        </div>

        <div className="about-content">
          <p className="section-label">About Me</p>
          <h2 className="about-title">A guide for every step of land and home ownership</h2>
          <p className="about-text">
            I'm the agent behind Olympiafx Properties — helping individuals
            and families across Nigeria find verified land, navigate
            documentation, and build homes they'll be proud of. From the
            first conversation to handover, I work directly with you so
            there are no surprises along the way.
          </p>

          <ul className="about-list">
            <li>Verified land titles and documentation support</li>
            <li>On-ground site inspections before you commit</li>
            <li>Direct coordination with builders and artisans</li>
            <li>Transparent pricing, no hidden agent fees</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
