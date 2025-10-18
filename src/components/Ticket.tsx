import React from "react";
import codingConfLogo from "../assets/images/logo-full.svg";
import githubIcon from "../assets/images/icon-github.svg";

const randomNumber = Math.floor(Math.random() * 90000) + 10000;

interface ticketPropTypes {
  fullName: string;
  github: string;
  avatar: string;
}

const Ticket = ({ fullName, github, avatar }: ticketPropTypes) => {
  return (
    <div className="md:mt-24 mt-16 relative bg-center md:p-4 p-2 bg-cover md:w-[600px] md:h-[280px] sm:w-[400px] sm:h-[187px] w-[300px] h-[140px] bg-[url(assets/images/pattern-ticket.svg)]">
      <div className="absolute top-5 md:left-5 -left-5 flex flex-col">
        <img
          src={codingConfLogo}
          alt="Coding conference logo"
          className="xl:h-12 md:h-10 h-5"
        />
        <p className="text-neutral-300 inconsolata-regular pl-12 text-sm md:text-base">
          Jan 31, 2025 / Austin, TX
        </p>
      </div>
      <div className="absolute bottom-5 left-5 flex flex-row">
        <img
          src={avatar}
          alt="Avatar"
          className="object-cover overflow-hidden xl:w-28 xl:h-28 md:w-20 md:h-20 sm:h-12 sm:w-12 w-10 h-10 rounded-md md:mr-4 mr-2"
        />
        <div className="flex flex-col">
          <p className="text-neutral-300 inconsolata-medium text-base sm:text-lg md:text-2xl xl:text-3xl md:pb-2 sm:pb-1">
            {fullName}
          </p>
          <div className="flex flex-row">
            <img
              src={githubIcon}
              alt="Github icon"
              className="mr-1 w-5 h-5 md:w-6 md:h-6"
            />
            <p className="text-neutral-300 inconsolata-regular text-sm md:text-base xl:text-lg">
              {github}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute xl:right-4 md:right-6 md:top-30 sm:right-2 sm:top-20 -right-0.5 top-14 rotate-90">
        <p className="text-lg md:text-xl xl:text-2xl text-neutral-500 inconsolata-medium">
          #{randomNumber}
        </p>
      </div>
    </div>
  );
};

export default Ticket;
