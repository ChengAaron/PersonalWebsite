import { Link } from "react-router-dom";
import ProjectLinks from "../components/projectsList"

export default function Page() {
  document.documentElement.setAttribute("data-theme", localStorage.getItem("current"))
  document.title = "Aaron Cheng - Projects";
  return (
    <div className="font-courierPrime">
      <div className="min-h-screen bg-secondary">
          <div className="p-4 m-auto">
            <a className="text-secondary-content link-hover m-8 pl-8 pr-8"><Link to="/">Back</Link></a>
            <h1 className="text-xl text-secondary-content m-8 pl-8 pr-8">Some of my work</h1>
            <ProjectLinks />
          </div>
      </div>
    </div>
  );
}