import { client } from "../../../sanity/lib/client";
import Link from 'next/link'
import Image from 'next/image'
import { urlForImage } from "../../../sanity/lib/image";

async function getData() {
    const res = await client.fetch(`*[_type == "pokemon"] | order(number asc)`);
    return res;
}

export async function PokemonList() {
    const pokemons = await getData();
    
    return (
        <ul className="grid grid-cols-12 gap-4">
            {pokemons.map((pokemon) => (
                <li key={pokemon._id} className="col-span-full sm:col-span-10 sm:col-start-2 md:col-span-8 md:col-start-3 lg:col-span-6 text-xs sm:text-sm rounded overflow-hidden transition-shadow shadow-sm hover:shadow">
                    <div className="grid grid-cols-12 gap-x-2">
                        <div className="col-span-12 grid py-1 grid-cols-12 bg-gray-200 text-center font-semibold">
                            <div className="col-span-2">
                                No.
                            </div>
                            <div className="col-span-2 sm:col-span-3">
                                Image
                            </div>
                            <div className="col-span-4 text-left">
                                Pokémon
                            </div>
                            <div className="col-span-4 sm:col-span-3">
                                Type
                            </div>
                        </div>
                        <div className="col-span-2 flex items-center justify-center">
                            {"#" + pokemon.number}
                        </div>
                        <div className="col-span-2 sm:col-span-3 py-2 flex items-center justify-center relative">
                            { 
                                pokemon.image !== undefined ?
                                <Image 
                                    src={urlForImage(pokemon.image).url()}
                                    priority={true}
                                    width={80}
                                    height={80}
                                    sizes="(max-width: 200px) 100vw, 200px"
                                    alt={pokemon.name}
                                />
                                : ""
                            }
                        </div>
                        <div className="col-span-4 flex items-center">
                            <Link href={"/pokemon/"+pokemon.name.toLowerCase()} className="font-medium hover:underline">{pokemon.name}</Link>
                        </div>
                        <div className="col-span-4 sm:col-span-3 flex text-white">
                            {pokemon.types.map((type) => (
                                <div 
                                    key={type._id} 
                                    className={
                                        (pokemon.types.length === 1 ? "basis-full " : "basis-1/2 ") 
                                        + "flex items-center justify-center " 
                                        + "bg-types-" + type.name.toLowerCase() + "-primary"
                                    }
                                >
                                    {type.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}