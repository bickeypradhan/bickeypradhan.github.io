import { personalInfo } from '../data';

export default function ContactPage() {
  return (
    <div className="page-wrapper">
      <div className="contact-card glass-strong">
        <div className="section-header">
          <h1 className="section-header__title">Get in Touch</h1>
        </div>
        <p className="contact-card__subtitle">
          I'm always open to new opportunities and conversations. Reach out!
        </p>
        <div className="contact-list">
          <a href={`mailto:${personalInfo.email}`} className="contact-item">
            <svg className="contact-item__icon contact-item__icon--mail" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>{personalInfo.email}</span>
          </a>

          <div className="contact-item">
            <svg className="contact-item__icon contact-item__icon--location" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{personalInfo.location}</span>
          </div>

          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact-item">
            <svg className="contact-item__icon contact-item__icon--github" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            <span>{personalInfo.github.replace('https://', '')}</span>
          </a>

          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item">
            <svg className="contact-item__icon contact-item__icon--linkedin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span>{personalInfo.linkedin.replace('https://', '')}</span>
          </a>

          <div className="contact-item">
            <svg className="contact-item__icon contact-item__icon--discord" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
            <span>Discord</span>
          </div>
        </div>
      </div>
    </div>
  );
}
