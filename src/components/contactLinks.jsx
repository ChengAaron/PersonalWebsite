import * as constants from "./constants.js"

const contactLinksList = constants.contactLinks.map(
    (link) => <li className="text-secondary-content text-xl pl-2 pr-2"><a href={link.link} target="_blank" className="link link-hover">{link.title}</a></li>
);
  
export default function ContactLinksComponent () {
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