import Image from 'next/image';
import { urlForImage } from "../../../../../sanity/lib/image";

export default function PokemonCard(props) {
    const pokemon = props.pokemon;
    return (
        <div 
            className={
            "col-span-full sm:col-span-8 sm:col-start-3 md:col-span-4 md:order-2 rounded-lg border-2 p-2 grid grid-cols-3 gap-2 "
            + " border-types-" + pokemon.types[0].slug.current + "-secondary "
            + " bg-types-" + pokemon.types[0].slug.current + "-primary"
            }
        >
            <div className="col-span-2 bg-white rounded-lg flex items-center p-2">
                <p className="font-semibold text-lg">
                    {pokemon.name}
                </p>
            </div>
            <div className="col-span-1 bg-white rounded-lg flex items-center p-2">
                <p className="font-semibold text-lg">
                    #{pokemon.number}
                </p>
            </div>
            <div className="col-span-3 bg-white rounded-lg p-2 flex justify-center">
                { 
                    pokemon.image !== undefined ?
                    <Image 
                        src={urlForImage(pokemon.image).url()}
                        priority={true}
                        width={400}
                        height={400}
                        sizes="(max-width: 400px) 100vw, 400px"
                        alt={pokemon.name}
                    />
                    : ""
                }
            </div>
            <div className="col-span-3 bg-white rounded-lg p-2 text-center">
                <p className="font-semibold mb-2">Type</p>
                {pokemon.types.map((type) => (
                    <span 
                      className={
                        "mx-1 p-1 rounded border text-white text-sm font-medium"
                        + " bg-types-" + type.slug.current + "-primary"
                        + " border-types-" + type.slug.current + "-secondary"
                      }
                      key={type._id}
                    >
                      {type.name}
                    </span>
                ))}
            </div>
        </div>
    )
}