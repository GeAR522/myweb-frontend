'use client';

import React from 'react';
import { Project } from '../types/global_types';
import ProjectCard from './ProjectCard';
import { animated, useInView } from 'react-spring';

interface IProjects {
  projects: Project[];
}

export default function Projects({ projects }: IProjects) {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: -100,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    {
      rootMargin: '-10% 0%',
      once: true,
    },
  );

  return (
    <animated.div
      ref={ref}
      id="projects-block"
      style={springs}
      className="container"
    >
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
    </animated.div>
  );
}
