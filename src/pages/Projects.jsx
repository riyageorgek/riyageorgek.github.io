import { useEffect } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/projects.js';
import { useReveal } from '../hooks/useReveal.js';

export default function Projects() {
  useReveal();
  useEffect(() => { document.title = 'Projects — Riya George'; }, []);

  return (
    <>
      <PageHeader 
        num="03 — Projects"
        title="Work I've done."
        description="A collection of AI systems I've designed and built—from agentic workflows to voice AI to production infrastructure."
      />

      <section>
        <div className="container">
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '24px' }}>
            {projects.map((proj) => (
              <ProjectCard key={proj.id} project={proj} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
