import React from 'react';

const aboutText =
  'My name is George Alexander Rhodes, but I go by Alex with family and friends. I was born in Jersey but have lived the majority of my life in the Isle of Man. The IoM is famous for the TT motorbike race, which I highly recommend watching some PoV videos of! The average speed is around 135 mph! But I will always suggest Jersey first. We have actual beaches and whilst winter is wet, IoM is like a permanent Jersey Winter. \n\n I went to the secondary school King Williams College in the IoM and did Internaiotnal Baccalaureate instead of A Levels. I took English, Maths, Physics, Geography, German, and Economics. \n\nI have always had an interest in Far East Asian culture and have been lucky enough to go to Japan several times. First time working in a guest house there in exchange for free bedding, second time was a home stay, and then my year abroad during my Business and Japanese course at Newcastle University, which was unfortunately impacted because of COVID. \n\nI have always had an interest in programming, logical thinking, and how to maximise efficiency. After finishing my degree, I started self studying coding whilst working for the COVID Section of the Government which landed me my first position in under five months. I want to further refine my skills in wweb app development, but also look more into data analysis and data science and how large data sets can inform business decisions based on trends and analysis. For this reason I am currently revisiting Python and learning data manipulation packages as well as Microsoft Power BI to create interactive dashboards and reports.';

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
    </div>
  );
}
