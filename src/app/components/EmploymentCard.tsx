import React from 'react';
import Image from 'next/image';

interface IEmploymentCard {
  title: string;
  dates: string;
  company: string;
  description: string;
  src: string;
  isFinalCard: boolean;
}

export default function EmploymentCard({
  title,
  dates,
  company,
  description,
  src,
  isFinalCard,
}: IEmploymentCard) {
  return (
    <div id="employment-card" className={`h-fit w-fit pb-4`}>
      <div
        id="employment-card-inner"
        className={`${
          isFinalCard ? '' : 'border-b-2 pb-8'
        } border-y-stone-600 border-opacity-20 flex flex-col align-middle`}
      >
        <div
          id="employment-card-header"
          className=" flex flex-row flex-wrap my-4 items-center"
        >
          <div
            id="employment-card-header-title-and-dates"
            className=" flex flex-col align-middle"
          >
            <div id="employment-card-header-title">
              <h3
                id="employment-card-title"
                className=" text-2xl font-semibold"
              >
                {title} - {company}
              </h3>
            </div>
            <h5 id="employment-card-url" className=" text-sm italic">
              {dates}
            </h5>
          </div>
          <div id="employment-card-header-icon" className=" ml-4">
            <Image
              className=" rounded-full m-3"
              id="profile-pic"
              width={100}
              height={45}
              src={src}
              alt={`${title}-icon`}
            />
          </div>
        </div>
        <p className=" text-lg whitespace-pre-wrap">{description}</p>
      </div>
    </div>
  );
}
