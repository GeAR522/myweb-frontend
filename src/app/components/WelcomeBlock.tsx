'use client';

import React from 'react';
import Image from 'next/image';
import { animated, useInView } from 'react-spring';

const welcomeText =
  'This is my personal website. It will likely always be a work in progress as I plan to add to it as I learn more and develop myself. This is where I will keep some posts about things I am doing or want to do, as well as list my employment history and projects I work on in my spare time. \n\nI have experience in full stack web app development using Typescript and React for frontend development and Ruby on Rails for backend development. I have built a simple project using Django as the backend and plan to do more with it soon. I also have an interest in data analysis, which is why I am learning to use Microsoft Power BI with the intention to take the PL-300 exam. ';

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
          className="flex hover:bg-gray-400 rounded-lg"
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
