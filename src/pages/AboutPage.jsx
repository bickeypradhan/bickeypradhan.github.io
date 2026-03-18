import { personalInfo, aboutTags, timeline } from '../data';

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      <div className="section-header">
        <h1 className="section-header__title">Who Am I</h1>
      </div>

      <p className="about-bio">
        {personalInfo.bio}
      </p>

      <div className="about-tags">
        {aboutTags.map((tag, i) => (
          <span key={i} className="about-tag">{tag}</span>
        ))}
      </div>

      <div className="section-header" style={{ marginTop: '2rem' }}>
        <h2 className="section-header__title">Timeline</h2>
      </div>

      <div className="timeline">
        {timeline.map((item, i) => (
          <div key={i} className="timeline__item">
            <span className="timeline__year">{item.year}</span>
            <span className="timeline__text">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
