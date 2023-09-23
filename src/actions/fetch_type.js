"use server"
import { client } from "../../sanity/lib/client";

export async function fetchType(type) {
    const query = `
        *[_type == 'pokemonType' && slug.current match $type][0]
    `;
    try {
        const res = await client.fetch(query, {type: type});
        console.log(res);
        return res;
    } catch (error) {
        console.error("Error fetching data: ", error);
        return null;
    }
}