import * as constants from "./constants.js"
import { Link } from "react-router-dom";

const siteLinksList = constants.siteLinks.map(
    (link) => <li className="text-secondary-content text-xl pl-2 pr-2"><Link to={link.link} className="link link-hover">{link.title}</Link></li>
);
  
export default function siteLinksComponent () {
    return (
        <div className="justify-center items-center col-span-2">
        <div className="justify-self-auto m-8 -mb-8 -mt-4">
            <p className="text-info text-3xl mt-1">Internal Pages</p>
            <p className="text-secondary-content text-xl">Personal repository of my stuff</p>
            <div className="divider divider-neutral m-0"></div>
            <ul className="list-disc list-inside columns-3">
            {siteLinksList}
            </ul>
        </div>
        </div>
    );
}