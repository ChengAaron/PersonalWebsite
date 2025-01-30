import * as constants from "./constants.js"

const projectList = constants.projects.map(
    (project) => <div className="justify-self-auto m-8 pl-8 pr-8">
    <a className="text-secondary-content text-2xl mt-1 link-hover" href={project.projectLink} target="_blank">{project.projectName}</a>
    <p className="text-secondary-content text-l">{project.projectDesc}</p>
    <div className="divider divider-neutral m-0"></div>
    </div>
);

export default function ProjectLinks() {
    return (
        <div>
            {projectList}
        </div>
    )
}