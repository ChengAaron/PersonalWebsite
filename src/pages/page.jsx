import { Link } from "react-router-dom";

export default function Page() {
  document.documentElement.setAttribute("data-theme", localStorage.getItem("current"))
  document.title = "Aaron Cheng - Soon";
  return (
    <div className="font-courierPrime">
      <div className="min-h-screen bg-secondary">
          <div className="text-secondary-content p-4 m-auto">
            <a className="link-hover m-8"><Link to="/">Back</Link></a>
            <p className="m-8">Coming Soon</p>
          </div>
      </div>
    </div>
  );
}