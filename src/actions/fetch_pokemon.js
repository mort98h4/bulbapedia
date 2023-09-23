"use server"
import { client } from "../../sanity/lib/client";

export async function fetchPokemon(pokemon) {
    const query = `
        *[_type=='pokemon' && slug.current match $pokemon][0]
        {
            ...,
            'types': types[].type->{
                _id,
                name, 
                slug
            }
        }
    `;
    try {
        const res = await client.fetch(query, {pokemon: pokemon});
        return res;
    } catch (error) {
        console.error("Error fetching data: ", error);
        return null;
    }
}