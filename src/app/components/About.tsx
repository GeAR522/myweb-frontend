'use client';

import React from 'react';
import Image from 'next/image';
import { animated, useInView } from 'react-spring';

const aboutText =
  "My name is George Alexander Rhodes, but I go by Alex with family and friends. I was born in Jersey but have lived in the Isle of Man for long time, all of my secondary school years and then my first couple of jobs afterwards as well. The IoM is famous for the TT motorbike race, which I highly recommend watching some PoV videos of! The average speed is around 135 mph! But I will always reccomend Jersey over the IoM. We have proper beaches and whilst winter is wet, IoM is like a permanent Jersey winter. \n\nWhilst I was here in Jersey till the age of ten, I went to St George's Preparatory School. Then after moving to the Isle of Man, I went to the secondary school King William's College to do my GCSEs and then the International Baccalaureate instead of A Levels. For the IB, I took English, Maths, Physics, Geography, German, and Economics with a score of 34 points. \n\nI have always had an interest in Far East Asian culture and have been lucky enough to go to Japan several times. The first time I was working in a guest house there in exchange for free bedding, the second time was a home stay, and then my year abroad during my Business and Japanese course at Newcastle University, which was unfortunately impacted by the COVID pandemic. \n\nWhilst I was unable to pursue any programming courses at my school due to the lack of subjects available, I have had a keen interest in programming, logical thinking, and maximising efficiency. This is likely due to my passion for gaming and technology, always needing to find a way to win or be faster, etc. After finishing my degree, I started self studying coding whilst working for the COVID Department of the Jersey Government, which landed me my first position in under five months. I want to further refine my skills in web app development, but also look more into data analysis and how large data sets can inform business decisions based on trends, analysis, and forming predictive models. For this reason, I have learnt some Python and the use of the packages such as matplotlib, pandas, numpy, etc. I have also looked into and built a simple webapp in Django. I think because I started in Ruby on Rails, I have learnt to love it. I think the way it is set up is just better. This along with NextJS are two favourite frameworks for webapp development. \n\nI personally think that mobile app development is going to be more useful and more in-demand as society continues to move to more simple/intuitive UIs. The touch interfaces of today are ingrained into children and console's controllers look weird and foreign to them. Which makes me feeling horrifyingly old. \n\nAnother aspect for both inside and outside work that I am learning about is Cyber Security. This is just becoming more important by the day and it's not just the big companies who hold all our data we need to be concerned about. I am just beginning on this journey of learning, and I've already realised how easy it is to trick people with simple tactics. This is not shade on people, more a terrifying realisation of what can be done with minimal effort. I am seriously looking into this subject to both further my own software developer journey or for the opportunity to swap into cyber security as it is a very interesting field and in-demand skill set. \n\nOutside of work I enjoy reading, going out on the paddleboard, BBQs on the beach when the weather's nice, spending time with my family and friends, and cooking. Whilst I am still learning more about Asian receipes, I am always experimenting with spice combinations and tuning receipes to my tastes. That said, I'm not a baker, as I can't follow the reccomended amounts of anything. It's a handful here, a splodge of that, and a shake of this. That's how you discover what you like. And when it comes to chocolate, it's always double servings.";

export default function About() {
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
      id="about-block"
      className="container"
    >
      <div id="about-title">
        <h1 id="title" className="text-3xl font-semibold">
          About Me
        </h1>
      </div>
      <div id="about-content" className="py-6">
        <p id="about-content-text" className="text-lg whitespace-pre-wrap">
          {aboutText}
        </p>
      </div>
      <div
        id="language-icons"
        className="flex flex-col sm:flex-row sm:justify-between"
      >
        <Image
          className=" rounded-xl m-3"
          id="language-pic"
          width={100}
          height={45}
          src="/rails-logo.png_large"
          alt="rails-logo"
        />
        <Image
          className=" rounded-xl m-3"
          id="language-pic"
          width={100}
          height={45}
          src="/typescript-logo.png"
          alt="typescript-logo"
        />
        <Image
          className=" rounded-xl m-3 bg-transparent"
          id="language-pic"
          width={100}
          height={45}
          src="/react-logo.svg"
          alt="react-logo"
        />
        <Image
          className=" rounded-xl m-3"
          id="language-pic"
          width={100}
          height={45}
          src="/python-logo.png"
          alt="python-logo"
        />
      </div>
    </animated.div>
  );
}
