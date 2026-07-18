'use client';

import { useState } from 'react';
import type { Project } from '@lib/projects';

type Props = {
  techs: string[];
  projects: Project[];
};

const normalize = (s: string) => s.toLowerCase().trim();

function techMatches(projectTech: string, selectedTech: string): boolean {
  const pt = normalize(projectTech);
  const st = normalize(selectedTech);
  return pt.includes(st) || st.includes(pt);
}

const TechProjects: React.FC<Props> = ({ techs, projects }) => {
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = selected
    ? projects.filter(p => p.technologies?.some(t => techMatches(t, selected)))
    : projects;

  return (
    <>
      <section className="w-3/4 mb-24 flex flex-col justify-center items-center">
        <h2 className="font-bold text-center dark:text-white/90 text-2xl">Habilidades & Tecnologías</h2>
        <span className="text-center mt-2 dark:text-white/40 text-base leading-5">
          Te comparto las tecnologías más recurrentes que dispongo para realizar mis proyectos
        </span>

        <div className="flex flex-wrap justify-center gap-2 mt-12">
          {techs.map(tech => (
            <button
              key={tech}
              onClick={() => setSelected(prev => prev === tech ? null : tech)}
              className={`text-lg px-2 rounded-lg transition-colors duration-150 cursor-pointer ${
                selected === tech
                  ? 'bg-indigo-600 text-white dark:bg-indigo-500 dark:text-white ring-2 ring-indigo-400 dark:ring-indigo-300'
                  : 'dark:text-black/70 text-white bg-black hover:bg-black/80 dark:bg-white/80 dark:hover:bg-white/70'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </section>

      <section className="w-3/4 mb-24 flex flex-col justify-center items-center">
        <h2 className="font-bold text-center dark:text-white/90 text-2xl">Proyectos</h2>
        <span className="text-center mt-2 dark:text-white/40 text-base leading-5">
          {selected
            ? `Proyectos usando ${selected}`
            : 'Esta es una pequeña lista de proyectos públicos'}
        </span>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {filtered.map(project => (
            <a key={project.id} href={`project/${project.slug}`} className="group block">
              <article className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-200 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-sm">
                {project.image && (
                  <div className="aspect-video overflow-hidden bg-slate-100 dark:bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}

                <div className="p-4">
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                    {project.name}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {(project.technologies || []).slice(0, 2).map(tech => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {(project.technologies || []).length > 2 && (
                      <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                        +{(project.technologies || []).length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-slate-500 dark:text-slate-400 mt-8">No hay proyectos con esta tecnología.</p>
        )}

        {!selected && (
          <a
            href="/project"
            className="text-white mt-11 bg-gradient-to-br from-purple-800 to-blue-900 hover:from-purple-700 hover:to-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-all duration-150"
          >
            Ver más
          </a>
        )}
      </section>
    </>
  );
};

export default TechProjects;
