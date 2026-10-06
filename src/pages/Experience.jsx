import { useEffect } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import ExperienceItem from '../components/ExperienceItem.jsx';
import { experience } from '../data/experience.js';
import { useReveal } from '../hooks/useReveal.js';

export default function ExperiencePage() {
  useReveal();
  useEffect(() => { document.title = 'Experience — Riya George'; }, []);

  return (
    <>
      <PageHeader 
        num="02 — Experience"
        title="My professional journey."
        description="From exploration to production—building AI systems that work."
      />

      <section>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ position: 'relative', paddingLeft: '48px' }} className="timeline">
              {experience.map((exp) => (
                <ExperienceItem key={exp.id} experience={exp} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
