import ContactLinks from "../components/contactLinks"
import SiteLinks from "../components/hobbyLinks"
import text from "../components/constants"
import ColorChange from "../components/colorChanger";

function Title() {
  return (
    <div className="justify-center">
      <h1 className="text-7xl text-primary-content">
        {text[0].firstName}<br />{text[1].lastName}
      </h1>
      <p className="text-l text-primary-content mt-0.5">
        {text[3].desc}
      </p>
      <ColorChange />
    </div>
  );
}

function Bio() {
  return (
    <div className="col-span-2">
      <p className="text-xl text-center text-secondary-content">
      {text[2].bio}
      </p>
      <div className="divider divider-neutral m-0"></div>
    </div>
  );
}

export default function Home() {
  document.title = "Aaron Cheng - Home";
  return (
    <div className="font-courierPrime">
      <div className="grid grid-cols-3 min-h-screen bg-secondary">
        <div className="grid grid-cols-subgrid bg-primary place-items-center">
          <Title />
        </div>
        <div className="grid grid-cols-subgrid col-span-2 m-4">
          <Bio />
          <SiteLinks />
          <ContactLinks />
        </div>
      </div>
    </div>
  );
}