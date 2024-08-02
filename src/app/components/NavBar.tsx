'use client';

import React from 'react';
import Image from 'next/image';
import Divider from './Divider';

export default function NavBar() {
  function handleScrollTo(e: any, id: string) {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function handleVisitLink(e: any, link: string) {
    e.preventDefault();

    window.open(link, '_blank');
  }

  return (
    <div className="hidden md:block" id="navbar">
      <div className="flex flex-col justify-between h-full w-48 fixed top-0 left-0 navbar-bg text-white  navbar-fade-in-left">
        <div id="navbar-top">
          <div id="navbar-profile-pic" className=" pt-4 flex justify-center">
            <Image
              className=" rounded-full"
              id="profile-pic"
              width={150}
              height={170}
              src="/profile_pic.jpg"
              alt="profile picture"
            />
          </div>
          <Divider />
          <a
            onClick={(e) => handleScrollTo(e, 'welcome-block')}
            href="#welcome-block"
            className="block py-4 px-6 hover-colour"
          >
            Home
          </a>
          <a
            onClick={(e) => handleScrollTo(e, 'about-block')}
            href="#about-block"
            className="block py-4 px-6 hover-colour"
          >
            About
          </a>
          <a
            onClick={(e) => handleScrollTo(e, 'projects-block')}
            href="#projects-block"
            className="block py-4 px-6 hover-colour"
          >
            Projects
          </a>
          <a
            onClick={(e) => handleScrollTo(e, 'employment-block')}
            href="#employment-block"
            className="block py-4 px-6 hover-colour"
          >
            Employment
          </a>
        </div>
        <div id="navbar-bottom" className="flex flex-row">
          <a
            target="_blank"
            onClick={(e) =>
              handleVisitLink(
                e,
                'https://www.linkedin.com/in/george-alexander-rhodes-90032218a/',
              )
            }
            className="block py-4 px-6"
          >
            <Image
              className=" rounded-md mb-3 hover:cursor-pointer"
              id="linkedin-logo"
              width={55}
              height={45}
              src="/linkedin-logo.png"
              alt="linkedin-logo"
            />
          </a>
          <a
            target="_blank"
            onClick={(e) => handleVisitLink(e, 'https://github.com/GeAR522')}
            className="block py-4 px-6"
          >
            <Image
              className=" rounded-md mb-3 hover:cursor-pointer bg-transparent"
              id="github-logo"
              width={55}
              height={45}
              src="/github-logo.png"
              alt="github-logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
