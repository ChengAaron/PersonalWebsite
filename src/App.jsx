import { useState, useEffect } from "react";

const text = [
  {firstName: "AARON"},
  {lastName: "CHENG"},
  {bio: "ITEC @ YorkU | Semi-Competitive CFV and OPTCG Player | Mechanical Keyboard Nerd"},
  {desc: "also known as chengs on discord"}
]

const contactLinks = [
  {title: "GitHub", link: "https://github.com/ChengAaron"},
  {title: "LinkedIn", link: "https://www.linkedin.com/in/aaron-cheng-70a091195/"},
  {title: "Email", link: "mailto:cheng.aaron@proton.me"},
  {title: "Devpost", link: "https://devpost.com/Chengs"},
  {title: "TCG Twitter", link: "https://x.com/imchengs"},
]

const siteLinks = [
  {title: "Blog"},
  {title: "Resume"},
  {title: "Vanguard Lists"},
  {title: "One Piece TCG Lists"},
  {title: "Peripherals"},
  {title: "Coffee & Tea"},
]

const contactLinksList = contactLinks.map(
  (link) => <li className="text-secondary-content text-xl pl-2 pr-2"><a href={link.link} target="_blank" className="link link-hover">{link.title}</a></li>
);

function ContactLinksComponent () {
  return (
    <div className="justify-center items-center col-span-2">
      <div className="justify-self-auto m-8 -mb-8 -mt-4">
        <p className="text-accent text-3xl mt-1">External Pages</p>
        <p className="text-secondary-content text-xl">Other places to find me</p>
        <div className="divider divider-neutral m-0"></div>
        <ul className="list-disc list-inside columns-3">
          {contactLinksList}
        </ul>
      </div>
    </div>
  );
}

function Title({ firstName, lastName, desc }) {
  return (
    <div className="justify-center">
      <h1 className="text-7xl text-primary-content">
        {firstName}<br />{lastName}
      </h1>
      <p className="text-l text-primary-content mt-0.5">
        {desc}
      </p>
      <ColorChange />
    </div>
  );
}

function Bio({ bio }) {
  return (
    <div className="col-span-2">
      <p className="text-xl text-center text-secondary-content">
      {bio}
      </p>
      <div className="divider divider-neutral m-0"></div>
    </div>
  );
}




function ColorChange() {
  return (
    <div className="dropdown mb-72">
      <div tabIndex={0} role="button" className="btn text-primary-content bg-primary">
        Keycaps
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048">
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul tabIndex={0} className="dropdown-content bg-primary rounded-box z-[1] w-52 p-2 shadow-2xl overflow-y-scroll">
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start text-primary-content"
            aria-label="Oblivion"
            value="oblivion" 
            onChange={() => localStorage.setItem("current", "oblivion")}/>
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start text-primary-content"
            aria-label="Olivia"
            value="olivia" 
            onChange={() => localStorage.setItem("current", "olivia")} />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start text-primary-content"
            aria-label="Botanical"
            value="botanical" 
            onChange={() => localStorage.setItem("current", "botanical")} />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start text-primary-content"
            aria-label="Nimbus"
            value="nimbus" 
            onChange={() => localStorage.setItem("current", "nimbus")} />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start text-primary-content"
            aria-label="Delta"
            value="delta"
            onChange={() => localStorage.setItem("current", "delta")} />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start text-primary-content"
            aria-label="Mizu"
            value="mizu"
            onChange={() => localStorage.setItem("current", "mizu")} />
        </li>
      </ul>
    </div>
  );
}

function GridLayout() {
  return (
    <div className="grid grid-cols-3 min-h-screen bg-secondary">
        <div className="grid grid-cols-subgrid bg-primary place-items-center">
          <Title firstName={text[0].firstName} lastName={text[1].lastName} desc={text[3].desc}/>
        </div>
        <div className="grid grid-cols-subgrid col-span-2 m-4">
          <Bio bio={text[2].bio} />
          <ContactLinksComponent />
          <ContactLinksComponent />
        </div>
    </div>
  );
}

export default function App() {
  document.documentElement.setAttribute("data-theme", localStorage.getItem("current"))
  return (
    <div className="font-courierPrime">
      <GridLayout />
    </div>
  );
}