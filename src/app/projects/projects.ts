import { Project } from '../types/global_types';

export const ListOfProjects: Project[] = [
  {
    id: 1,
    title: 'AWS - Amplify - Restaurant Menu Site',
    description:
      "This is a simple project to show the idea of hosting restaurant contact info and menus in storage, then calling the information to the site and loading their page, their food items, and their prices. Then using this to create a dynamic menu to total up the price whilst looking at the full menu and contact info. This a project done using AWS Amplify Gen 2 in Typescript using React. It is not fully connected to a DB currently and runs based on constants in a temp file. If the friend I made this for does want this, I will finish it then. It's currently just an MVP.",
    url: 'https://github.com/GeAR522/amplify-vite-react-template',
  },
  {
    id: 2,
    title: 'Mortgage Calculator',
    description:
      'This is a mortgage calculator written in Python that I made for myself to use to calculate and keep track of potential costs of mortgages down the line. You provide the total mortgage value, the annual rate of the mortgage, and the number of years. It will return to you the monthly payment as well as a monthly and annual breakdown of the remaining balance, the capital payments, and the interest payments for each respective period. It then asks if you would like to save a mortgage_results.xlsx file locally. It will have the first sheet be the monthly breakdown and the second sheet be the annual breakdown.',
    url: 'https://github.com/GeAR522/mortgage_calculator',
  },
  {
    id: 3,
    title: 'Django + React - Note Taker',
    description:
      'This is a simple note taker I used to learn about Django and using it as a backend for web app development. This is from following along a tutorial by TechWithTim.',
    url: 'https://github.com/GeAR522/django_note_taker',
  },
  {
    id: 4,
    title: 'Jersey Everything - Ruby on Rails API + Nextjs + Postgresql',
    description:
      'This is a webapp that I plan to make and launch that will be all about Jersey, the island I live on and love. I have a lot to finish with this, including adjusting refresh tokens for devise_jwt as they only use access tokens by default. But the end goal is to put all the skills I want to learn to use here. \n\nThreejs to add an interesting model with which to search with. D3js to show information about the island as you check out the parishes and the places. I am using both Nextjs and Rails because I like both frameworks and want to be able use both well. The main link is the frontend and the backend is at this link: https://github.com/GeAR522/je_rails \n\nCurrently on hold.',
    url: 'https://github.com/GeAR522/je_next',
  },
];
