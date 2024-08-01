export type Employment = {
  id: number;
  title: string;
  dates: string;
  company: string;
  description: string;
  src: string;
};

export const employmentHistory: Employment[] = [
  {
    id: 1,
    title: 'Software Engineer',
    dates: 'Nov 2021 - Jun 2024',
    company: 'Pinpoint',
    description:
      "Built and maintained the the code for Pinpoint, which is an ATS SaaS web app as a full stack developer. Used technologies like React, Typescript, and Ruby on Rails. \n\nSome of the features I worked on include the equality monitoring templates, the ability to edit multiple jobs at once, editing the offer system so that offers could be approved and re-evaluated correctly before being sent, adapting the data retention regarding application details to be seperate for hired and non-hired candidates, and many more. I also started the planning and initial set of up the 'Teams' system to combine with the existing structures in place. \n\nMy time at Pinpoint helped me improve both my frontend and backend development skills, as well as how to better manage and implement code structures for large projects.",
    src: '/pinpoint-icon.png',
  },
  {
    id: 2,
    title: 'COVID Safety Officer',
    dates: 'Jul 2021 - Sep 2021',
    company: 'Jersey Government',
    description:
      'I had to organise and monitor sensitive information regarding patients contact information, their circumstances of isolation if necessary, their understanding of the policies of the Jersey Government, and informing them of any test results. This also included orgnaising and contacting businesses for their regular checks to maintain standards set out by the government. \n\nThis helped me develop my communication skills and ability to work effectively with others. This is due to the need to call up members of the public and inform them of their results in a calm and timely manner. This require social skills to help those deal with the often awful results around the results, including holidays being cancelled or the need to organise help with children. The other side of this is the development of diplomacy skills, as many tourists arriving in Jersey also needed to be called and told their results as well as needing to go through the rules they need to follow during their stay, the available options regarding isolation, and support the people in whatever way possible, often helping them with receiving medication. \n\nThe rules surrounding COVID changing very regularly and the need to pick up and delegate work effectively within and between teams was often necessary due to short staffing or staff being ill themselves.',
    src: '/government-of-jersey-logo.jpg',
  },
  {
    id: 3,
    title: 'Senior East Asian Exchange Trader & Totaliser',
    dates: 'Nov 2013 - Aug 2017',
    company: 'Newfield',
    description:
      "This job involved working in and leading teams to manage our positions and exposure on various exchanges and in many different regional markets. After becoming a Senior Trader, I moved to Totaliser to expand my knowledge and abilities within the e-Gambling scene and also worked as part of a new team in different regions doing parimutuel betting. \n\nThe skills needed where mathimatical and an understanding of game theory. This is due to the many possible ways to alter the payout prices of positions on the exchange markets, due to the nature of them paying out based on the final price of the connected tote. The nature of the exchange is that the majority of the money is bet in the final few seconds of the race to hide where your opinion lies. The build up to that is analysing the existing backs and lays on the exchange to work out other punter's positions and opinions, whilst also comparing the expected value of positions we are in. \n\nThis gets more complicated when you start adding in tote rebate percentages to factor in against the discounts possible on the tickets used for the exchange betting. There is also the possibility to offer capped bets and fake ticket stacks as tools to further find out where other punter's opinions lie. The main aim of the of the jobs was to make the best backs and lays that combined would produce the highest expected value.",
    src: '/Newfield-Logo-1.jpg',
  },
];
