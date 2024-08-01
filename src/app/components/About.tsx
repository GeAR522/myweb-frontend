import React from 'react';
import Image from 'next/image';

const aboutText =
  "My name is George Alexander Rhodes, but I go by Alex with family and friends. I was born in Jersey but have lived the majority of my life in the Isle of Man. The IoM is famous for the TT motorbike race, which I highly recommend watching some PoV videos of! The average speed is around 135 mph! But I will always reccomend Jersey over the IoM. We have proper beaches and whilst winter is wet, IoM is like a permanent Jersey winter. \n\nWhilst I was here in Jersey till the age of ten, I went to St George's Preparatory School. Then after moving to the Isle of Man, I went to the secondary school King Williams College and did my GCSEs and the International Baccalaureate instead of A Levels. For the IB, I took English, Maths, Physics, Geography, German, and Economics with a score of 34 points. \n\nI have always had an interest in Far East Asian culture and have been lucky enough to go to Japan several times. The first time I was working in a guest house there in exchange for free bedding, the second time was a home stay, and then my year abroad during my Business and Japanese course at Newcastle University, which was unfortunately impacted by the COVID pandemic. \n\nWhilst I was unable to pursue any programming courses at my school due to the lack of subjects available, I have had a keen interest in programming, logical thinking, and maximising efficiency. This is likely due to my passion for gaming and technology, always needing to find a way to win or be faster, etc. After finishing my degree, I started self studying coding whilst working for the COVID Department of the Jersey Government, which landed me my first position in under five months. I want to further refine my skills in web app development, but also look more into data analysis, data science, and how large data sets can inform business decisions based on trends, analysis, and forming predictive models. For this reason, I am currently revisiting Python and learning to use the packages such as matplotlib, pandas, numpy, etc, as well as Microsoft Power BI to create interactive dashboards and reports with the resulting data.";

export default function About() {
  return (
    <div id="about-block" className="container">
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
    </div>
  );
}
