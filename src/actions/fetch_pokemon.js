"use server"
import { client } from "../../sanity/lib/client";

export async function fetchPokemon(pokemon) {
    try {
        const res = await client.fetch(`*[_type == "pokemon" && name match $pokemon][0]`, {pokemon: pokemon});
        return res;
    } catch (error) {
        console.error("Error fetching data: ", error);
        return null;
    }
}