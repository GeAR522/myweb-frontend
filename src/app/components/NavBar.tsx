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

  return (
    <div className="hidden md:block">
      <div className="h-full w-48 fixed top-0 left-0 bg-slate-900 text-white">
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
          className="block py-4 px-6 hover:bg-gray-700"
        >
          Home
        </a>
        <a
          onClick={(e) => handleScrollTo(e, 'about-block')}
          href="#about-block"
          className="block py-4 px-6 hover:bg-gray-700"
        >
          About
        </a>
        <a
          onClick={(e) => handleScrollTo(e, 'projects-block')}
          href="#projects-block"
          className="block py-4 px-6 hover:bg-gray-700"
        >
          Projects
        </a>
        <a
          onClick={(e) => handleScrollTo(e, 'employment-block')}
          href="#employment-block"
          className="block py-4 px-6 hover:bg-gray-700"
        >
          Employment
        </a>
      </div>
    </div>
  );
}
