import { Link } from "react-router-dom";
import VGDeckLinks from "../components/vgDecksList"

export default function Page() {
  document.documentElement.setAttribute("data-theme", localStorage.getItem("current"))
  document.title = "Aaron Cheng - VG Decklists";
  return (
    <div className="font-courierPrime">
      <div className="min-h-screen bg-secondary">
          <div className="p-4 m-auto">
            <a className="text-secondary-content link-hover m-8 pl-8 pr-8"><Link to="/">Back</Link></a>
            <h1 className="text-xl text-secondary-content m-8 pl-8 pr-8">My current decklists for Cardfight Vanguard in DivineZ set 6 meta</h1>
            <VGDeckLinks />
          </div>
      </div>
    </div>
  );
}