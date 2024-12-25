const text = [
  {firstName: "AARON"},
  {lastName: "CHENG"},
  {bio: "ITEC @ YorkU | Semi-Competitive CFV and OPTCG Player | Mechanical Keyboard Nerd"},
  {desc: "also known as chengs on discord"}
]

//const links = []

function Title({ firstName, lastName, desc }) {
  return (
    <div className="justify-center">
    <h1 className="text-7xl">
      {firstName}<br />{lastName}
    </h1>
    <p className="text-l text-secondary mt-0.5">
      {desc}
    </p>
    </div>
  );
}

function Bio({ bio }) {
  return (
    <div className="col-span-2">
      <p className="text-xl text-center text-primary">
      {bio}
      </p>
      <div className="divider divider-primary m-0.5"></div>
    </div>
  );
}

function ColorChange() {

}

/*
function links() {
  return (
    <></>
  );
}
*/
function GridLayout() {
  return (
    <div className="grid grid-cols-3 min-h-screen bg-secondary">
        <div className="grid grid-cols-subgrid text-secondary bg-primary place-items-center">
          <Title firstName={text[0].firstName} lastName={text[1].lastName} desc={text[3].desc}/>
        </div>
        <div className="grid grid-cols-subgrid col-span-2 m-4">
          <Bio bio={text[2].bio} />
        </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="font-courierPrime">
      <GridLayout />
    </div>
  );
}