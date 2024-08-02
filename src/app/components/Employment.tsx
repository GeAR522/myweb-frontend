'use client';

import React from 'react';
import { employmentHistory } from '../employment/employment';
import EmploymentCard from './EmploymentCard';
import { animated, useInView } from 'react-spring';

export default function Employment() {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: 100,
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
      style={springs}
      id="employment-block"
      className="container"
    >
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
    </animated.div>
  );
}
