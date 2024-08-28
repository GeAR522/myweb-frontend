'use client';

import React from 'react';
import Image from 'next/image';
import { animated, useInView } from 'react-spring';

const welcomeText =
  'This is my personal website. It will likely always be a work in progress as I plan to add to it as I learn more and develop myself. This is where I will keep my employment history and projects I work on in my spare time. \n\nI have experience in full stack web app development using Typescript and React for frontend development and Ruby on Rails for backend development. I have built a simple projects using Django and React and a few other small python apps. I also have an interest in data analysis, which is why I am learning to use Microsoft Power BI with the intention to take the PL-300 exam. \n\nRegarding furthering my webapp skills, I want to learn more about threejs and D3js to make visuals more entertaining and interactive. I think using threejs to make models will help make sites unique and also offer the ability toemploy unique navigation techniques. I think learning how to use D3js will connect well to data analysis and help make both understanding and interacting with data easier for everyone. Helping to visualise data trends can help to inform people and bolster support for data-driven decisions. \n\nI am currently looking for a full time position as a web developer using my experience of Ruby on Rails or a entry level data analysis position to learn more about the field of data science and make use of python and Microsoft Power BI. I am always looking for a challenge and am excited to learn more.';

export default function WelcomeBlock() {
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
      id="welcome-block"
      className="container"
      ref={ref}
      style={springs}
    >
      <div id="welcome-block-title">
        <h1 id="title" className="text-3xl font-semibold">
          Welcome
        </h1>
      </div>

      <div id="welcome-block-content" className="py-6">
        <p className="whitespace-pre-wrap text-lg">{welcomeText}</p>
      </div>
      <a
        className="flex w-fit"
        target="_blank"
        href="https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/?practice-assessment-type=certification"
      >
        <div
          id="power-bi-icon-container"
          className="flex hover-colour rounded-lg"
        >
          <Image
            className=" rounded-lg m-5"
            id="power-bi-pic"
            width={100}
            height={45}
            src="/power-bi-logo.png"
            alt="power-bi-icon"
          />
        </div>
      </a>
    </animated.div>
  );
}
