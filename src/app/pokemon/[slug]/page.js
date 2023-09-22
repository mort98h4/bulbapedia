import { client } from "../../../../sanity/lib/client";
import Header from "../header";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Image from 'next/image'
import { urlForImage } from "../../../../sanity/lib/image";
import PokemonNavigation from "./components/pokemon_navigation";

export async function getData(slug) {
  const res = await client.fetch(`*[_type == "pokemon" && name match $pokemon]`, {pokemon: slug});
  return res;
}

export default async function Page({ params }) {
    let pokemon = await getData(params.slug);
    pokemon = pokemon[0];

    const components = {
      marks: {
        link: ({children, value}) => {
          return (
            <Link href={value.href} className="font-medium hover:underline">
              {children}
            </Link>
          )
        }
      }
    }

    return ( 
      <section className="grid grid-cols-12 gap-4">
        <Header title={pokemon.name} />
        <PokemonNavigation pokemon={pokemon} />

        <div 
          className={
          "col-span-full sm:col-span-8 sm:col-start-3 md:col-span-4 md:order-2 rounded-lg border-2 p-2 grid grid-cols-3 gap-2 "
          + " border-types-" + pokemon.types[0].name.toLowerCase() + "-secondary "
          + " bg-types-" + pokemon.types[0].name.toLowerCase() + "-primary"
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
                  + " bg-types-" + type.name.toLowerCase() + "-primary"
                  + " border-types-" + type.name.toLowerCase() + "-secondary"
                }
                key={type._id}
              >
                {type.name}
              </span>
            ))}
          </div>
        </div>
        <div className="col-span-full md:col-span-8 md:order-1 portableText">
          <PortableText
            value={pokemon.descriptionBlock}
            components={components}
          ></PortableText>
        </div>
      </section>
    )
}