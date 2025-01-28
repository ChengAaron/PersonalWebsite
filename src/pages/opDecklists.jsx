import { Link } from "react-router-dom";
import OPDeckLinks from "../components/opDecksList"

export default function Page() {
  document.documentElement.setAttribute("data-theme", localStorage.getItem("current"))
  document.title = "Aaron Cheng - OPTCG Decklists";
  return (
    <div className="font-courierPrime">
      <div className="min-h-screen bg-secondary">
          <div className="p-4 m-auto">
            <a className="text-secondary-content link-hover m-8 pl-8 pr-8"><Link to="/">Back</Link></a>
            <h1 className="text-xl text-secondary-content m-8 pl-8 pr-8">My current decklists for One Piece TCG in set 9 meta</h1>
            <OPDeckLinks />
          </div>
      </div>
    </div>
  );
}