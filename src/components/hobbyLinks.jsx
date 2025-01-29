import * as constants from "./constants.js"
import { Link } from "react-router-dom"
import RESUME from "../files/CV_AARON_CHENG.pdf"

const siteLinksList = constants.siteLinks.map(
    (link) => <li className="text-secondary-content text-m sm:text-xl pl-2 pr-2"><Link to={link.link} className="link link-hover">{link.title}</Link></li>
);

siteLinksList.push(<li className="text-secondary-content text-m sm:text-xl pl-2 pr-2 link link-hover"><a href={RESUME} target="_blank">Resume</a></li>)
  
export default function siteLinksComponent () {
    return (
        <div className="justify-center items-center col-span-1 sm:col-span-2 mt-4">
        <div className="justify-self-auto m-8 -mb-8 -mt-4">
            <p className="text-accent text-xl sm:text-3xl mt-1">Internal Pages</p>
            <p className="text-secondary-content text-m sm:text-xl">Personal repository of my stuff</p>
            <div className="divider divider-neutral m-0"></div>
            <ul className="list-disc list-inside columns-1 sm:columns-3 sm:min-h-fit">
            {siteLinksList}
            </ul>
        </div>
        </div>
    );
}