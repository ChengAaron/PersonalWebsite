import * as constants from "./constants.js"

const opDecksList = constants.onePieceDecks.map(
    (deck) => <div className="justify-self-auto m-8 pl-8 pr-8">
    <a className="text-secondary-content text-2xl mt-1 link-hover" href={deck.deckLog} target="_blank">{deck.deckName}</a>
    <p className="text-secondary-content text-l">{deck.writeup}</p>
    <div className="divider divider-neutral m-0"></div>
    </div>
);

export default function opDeckLinks() {
    return (
        <div>
            {opDecksList}
        </div>
    )
}