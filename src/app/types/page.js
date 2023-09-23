import Header from "../components/header";
import TypesList from "./components/types_list";
import Link from "next/link";

export default async function Page() {

    return (
        <section className="grid grid-cols-12 gap-4">
            <Header title="Types" />
            <div className="col-span-full sm:col-span-8 lg:col-span-9">
                <p>
                    <strong>Types</strong> (Japanese: タイプ <em>Type</em>) are properties applied to Pokémon and their moves, which affect the power of moves in battles. As of Generation VI, there are 18 types. Most of the types were introduced during Generation I, but the <Link className="font-medium hover:underline" href="/types/dark">Dark</Link> and <Link className="font-medium hover:underline" href="/types/steel">Steel</Link> types were introduced in Generation II, and the <Link className="font-medium hover:underline" href="/types/fairy">Fairy</Link> type was introduced in Generation VI. A unique <Link className="font-medium hover:underline" href="/types/%3F%3F%3F">???</Link> type also existed from Generations II to IV. The types are largely based on the concept of classical elements in popular culture.
                </p>
            </div>
            <TypesList />
        </section>
    )
}