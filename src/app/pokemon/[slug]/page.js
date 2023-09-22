import Header from "../header";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import PokemonNavigation from "./components/pokemon_navigation";
import PokemonCard from "./components/pokemon_card";
import { fetchPokemon } from "@/actions/fetch_pokemon";

export default async function Page({ params }) {
    const pokemon = await fetchPokemon(params.slug)

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
        <PokemonCard pokemon={pokemon} />
        <div className="col-span-full md:col-span-8 md:order-1 portableText">
          <PortableText
            value={pokemon.descriptionBlock}
            components={components}
          ></PortableText>
        </div>
      </section>
    )
}