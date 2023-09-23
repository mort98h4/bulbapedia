import { fetchTypes } from "@/actions/fetch_types";
import Header from "../components/header";
import Link from "next/link";

export default async function Page() {
    const types = await fetchTypes();
    console.log(types);

    return (
        <section className="grid grid-cols-12 gap-4">
            <Header title="Types" />
            <div className="col-span-full sm:col-span-8 lg:col-span-9">
                <p>
                    <strong>Types</strong> (Japanese: タイプ <em>Type</em>) are properties applied to Pokémon and their moves, which affect the power of moves in battles. As of Generation VI, there are 18 types. Most of the types were introduced during Generation I, but the Dark and Steel types were introduced in Generation II, and the Fairy type was introduced in Generation VI. A unique ??? type also existed from Generations II to IV. The types are largely based on the concept of classical elements in popular culture.
                </p>
            </div>
            <div className="col-span-8 col-start-3 sm:col-span-4 lg:col-span-3 flex flex-wrap gap-2 justify-center text-center p-4 border-2 border-gray-400 rounded-lg">
                {types.map((type) => (
                    <div 
                    className={
                      "w-[calc(50%-0.25rem)] p-1 rounded border text-white text-sm font-medium"
                      + " bg-types-" + type.slug.current + "-primary"
                      + " border-types-" + type.slug.current + "-secondary"
                    }
                    key={type._id}
                  >
                    <Link href={`/types/${encodeURIComponent(type.slug.current)}`} className="hover:underline">
                        {type.name}
                    </Link>
                  </div>
                ))}
            </div>
        </section>
    )
}