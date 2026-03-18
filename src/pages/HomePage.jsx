import { personalInfo } from '../data';
import TypingAnimation from '../components/TypingAnimation';

export default function HomePage() {
  return (
    <div className="page-wrapper">
      <section className="hero">
        <div className="hero__text">
          <div style={{ marginBottom: '0.5rem' }}>
            <span className="hero__wave">👋</span>
          </div>
          <h1 className="hero__title">
            Hey, I'm{' '}
            <span className="hero__name">{personalInfo.name}</span>
            <span className="hero__aka">[aka {personalInfo.aka}]</span>
          </h1>
          <p className="hero__subtitle">
            <TypingAnimation
              strings={personalInfo.roles}
              speed={80}
              deleteSpeed={40}
              pauseTime={2000}
            />
          </p>
          <p className="hero__location">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Based in {personalInfo.location}
          </p>
          <div className="hero__socials">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hero__social-link" title="GitHub">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hero__social-link" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hero__social-link" title="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
            <a href="#" className="hero__social-link" title="Link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </a>
          </div>
        </div>
        <div className="hero__image">
          <img
            src={`${import.meta.env.BASE_URL}assets/proyek/profile.jpeg`}
            alt={`${personalInfo.name} profile`}
            className="hero__avatar"
          />
        </div>
      </section>
    </div>
  );
}
