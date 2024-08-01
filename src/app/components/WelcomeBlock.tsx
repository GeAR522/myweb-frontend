import React from 'react';

const welcomeText =
  'This is my personal website. It will likely always be a work in progress as I plan to add to it as I learn more and develop myself. This is where I will keep some posts about things I am doing or want to do, as well as list my employment history and projects I work on in my spare time. \n\nI have experience in full stack web app development using Typescript and React for frontend development and Ruby on Rails for backend development. I have built a simple project using Django as the backend and plan to do more with it soon. I also have an interest in data analysis, which is why I am learning to use Microsoft Power BI with the intention to take the PL-300 exam. ';

export default function WelcomeBlock() {
  return (
    <div id="welcome-block" className="container ">
      <div id="welcome-block-title">
        <h1 id="title" className="text-3xl font-semibold">
          Welcome
        </h1>
      </div>

      <div id="welcome-block-content" className="py-6">
        <p className="whitespace-pre-wrap text-lg">{welcomeText}</p>
      </div>
    </div>
  );
}
