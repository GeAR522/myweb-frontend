'use client';

import React from 'react';
import Image from 'next/image';
import { animated, useInView } from 'react-spring';

const welcomeText =
  'This is my personal website. It will likely always be a work in progress as I plan to add to it as I learn more and develop myself. This is where I will keep my employment history and projects I work on in my spare time. \n\nI have experience in fullstack webapp development using Typescript and React for frontend development and Ruby on Rails for backend development. I have built a simple project using Django and React and a few other small python apps, such as a mortgage repayment calculator and a webscraper to capture the details of the cheapest rentals in my area. \n\nI plan to build more projects in the future, in both Rails and NextJS. I am also currently studying and learning about cyber security as it is both a very interesting and compelling field, I am currently looking for a Software Developer role, hopefully still using Ruby on Rails though I am open to NodeJS and NextJS Positions. I am also open to a career swap into the cyber security industry as I believe it is a very interesting and important industry that is crucial for everyone and I would be able to make use of my existing developer skills. ';

export default function WelcomeBlock() {
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
      {/* <a
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
      </a> */}
    </animated.div>
  );
}
