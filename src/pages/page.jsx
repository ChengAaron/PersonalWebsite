import { Link } from "react-router-dom";
import VGDeckLinks from "../components/vgDecksList"

export default function Page() {
  document.documentElement.setAttribute("data-theme", localStorage.getItem("current"))
  document.title = "Aaron Cheng - Soon";
  return (
    <div className="font-courierPrime">
      <div className="min-h-screen bg-secondary">
          <div className="text-secondary-content p-4 m-auto">
            <h1 className="link-hover m-8"><Link to="/">Back</Link></h1>
            <p className="m-8">Coming Soon</p>
          </div>
      </div>
    </div>
  );
}