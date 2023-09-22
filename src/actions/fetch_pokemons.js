"use server"
import { client } from "../../sanity/lib/client";

export async function fetchPokemons(offset) {
    const limit = offset + 10;
    try {
        const res = await client.fetch(`*[_type == "pokemon"] | order(number asc)[$offset...$limit]`, {offset: offset, limit: limit});
        return res;
    } catch (error) {
        console.error("Error fetching data: ", error);
        return null;
    }
}