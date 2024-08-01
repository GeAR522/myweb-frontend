import React from 'react';
import { Project } from '../types/global_types';

interface IProjectCard {
  project: Project;
  isFinalCard: boolean;
}

export default function ProjectCard({ project, isFinalCard }: IProjectCard) {
  const { title, description, url } = project;

  return (
    <div id="project-card" className="h-fit w-fit pb-4">
      <div
        id="project-card-inner"
        className={`${
          isFinalCard ? '' : 'border-b-2 pb-8'
        } border-y-stone-600 border-opacity-20`}
      >
        <a
          target="_blank"
          href={url === 'Coming Soon...' ? undefined : url}
          className="flex w-fit"
        >
          <div
            id="project-card-header"
            className=" w-fit flex-col my-4 hover:bg-gray-500 py-4 px-2 rounded-lg"
          >
            <h3
              id="project-card-title"
              className=" w-fit text-2xl font-semibold"
            >
              {title}
            </h3>
            <h5 id="project-card-url" className=" text-sm italic">
              {url}
            </h5>
          </div>
        </a>
        <p className="text-lg pl-2">{description}</p>
      </div>
    </div>
  );
}
