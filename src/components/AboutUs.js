// RiskEvall.js
import React from 'react';
import './AboutUs.css';

const MissionStatement = () => (
  <section className="mission">
    <h1>RiskEvall: Turning Risks Into Results</h1>
    <p>
      At RiskEvall, we are committed to helping businesses navigate uncertainty with precision and purpose. 
      As a new and dynamic cybersecurity firm, we combine honesty, integrity, and a results-driven mindset 
      to deliver real value to our clients.
    </p>
  </section>
);

const Service = ({ title, description }) => (
  <div className="service">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

const Services = () => (
  <section className="services">
    <h1>Our Services</h1>
    <Service
      title="Data Analysis"
      description="Transforming raw data into actionable insights to drive smarter decisions."
    />
    <Service
      title="Risk Mitigation"
      description="Developing customized strategies to identify, evaluate, and minimize risks effectively."
    />
    <Service
      title="Business Optimization"
      description="Streamlining workflows and improving efficiency to achieve measurable outcomes."
    />
  </section>
);

const Value = ({ title, description }) => (
  <div className="value">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Values = () => (
  <section className="values">
    <h1>Our Values</h1>
    <Value
      title="Honesty"
      description="We are transparent in our methods and communications, ensuring trust every step of the way."
    />
    <Value
      title="Integrity"
      description="We uphold the highest ethical standards in all our practices."
    />
    <Value
      title="Results-Driven"
      description="Our focus is on delivering tangible outcomes that make a difference."
    />
  </section>
);

const Footer = () => (
  <footer className="footer">
    <p>
      At RiskEvall, we believe every challenge is an opportunity. With our expertise and commitment to excellence, 
      we’re ready to prove why we’re worth a shot.
    </p>
  </footer>
);

export default { MissionStatement, Services, Values, Footer };