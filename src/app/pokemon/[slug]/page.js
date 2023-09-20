import { client } from "../../../../sanity/lib/client";
import Header from "../header";

export async function getData(slug) {
  const res = await client.fetch(`*[_type == "pokemon" && name match $pokemon]`, {pokemon: slug});
  return res;
}

export default async function Page({ params }) {
    let pokemon = await getData(params.slug);
    pokemon = pokemon[0];
    return ( 
      <section>
        <Header title={`#${pokemon.number} ${pokemon.name}`} />
        {pokemon.number} - {pokemon.name} - Type: {pokemon.types.map((type) => (type.name))}
      </section>
    )
}