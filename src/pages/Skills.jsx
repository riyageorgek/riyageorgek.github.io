import { useEffect } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import SkillCard from '../components/SkillCard.jsx';
import { skills } from '../data/skills.js';
import { useReveal } from '../hooks/useReveal.js';

export default function Skills() {
  useReveal();
  useEffect(() => { document.title = 'Skills — Riya George'; }, []);

  return (
    <>
      <PageHeader 
        num="04 — Skills"
        title="What I work with."
        description="Technologies, tools, and domains I've worked with and continue to explore."
      />

      <section>
        <div className="container">
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {skills.map((skill) => (
              <SkillCard key={skill.category} skill={skill} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
