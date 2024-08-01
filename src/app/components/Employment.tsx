import React from 'react';
import { employmentHistory } from '../employment/employment';
import EmploymentCard from './EmploymentCard';

export default function Employment() {
  return (
    <div id="employment-block" className="container">
      <div id="employment-header">
        <h1 id="title" className="text-3xl font-semibold">
          Employment
        </h1>
      </div>
      <div id="employment-content" className="py-6">
        {employmentHistory.map((employment, index) => {
          const isFinalCard = employmentHistory.length === index + 1;
          return (
            <EmploymentCard
              key={index}
              title={employment.title}
              dates={employment.dates}
              company={employment.company}
              description={employment.description}
              src={employment.src}
              isFinalCard={isFinalCard}
            />
          );
        })}
      </div>
    </div>
  );
}
