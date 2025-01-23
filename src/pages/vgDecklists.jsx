import { Link } from "react-router-dom";
import VGDeckLinks from "../components/vgDecksList"

export default function Page() {
  document.documentElement.setAttribute("data-theme", localStorage.getItem("current"))
  document.title = "Aaron Cheng - VG Decklists";
  return (
    <div className="font-courierPrime">
      <div className="min-h-screen bg-secondary">
          <div className="p-4 m-auto">
            <h1 className="text-secondary-content link-hover m-8"><Link to="/">Back</Link></h1>
            <VGDeckLinks />
          </div>
      </div>
    </div>
  );
}