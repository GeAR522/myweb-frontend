import React from 'react';
import { Project } from '../types/global_types';
import ProjectCard from './ProjectCard';

interface IProjects {
  projects: Project[];
}

export default function Projects({ projects }: IProjects) {
  return (
    <div id="projects-block" className="container">
      <div id="projects-header">
        <h1 id="projects-title" className="text-3xl font-semibold">
          Projects
        </h1>
      </div>
      <div id="projects-list" className="py-6">
        {projects.map((project, index) => {
          const isFinalCard = projects.length === index + 1;
          return (
            <ProjectCard
              key={index}
              project={project}
              isFinalCard={isFinalCard}
            />
          );
        })}
      </div>
    </div>
  );
}
