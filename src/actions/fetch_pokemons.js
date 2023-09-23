"use server"
import { client } from "../../sanity/lib/client";

export async function fetchPokemons(offset) {
    const limit = offset + 10;
    const query = `
        *[_type == "pokemon"] | order(number asc)[$offset...$limit]
        {
            _id,
            number,
            name,
            image,
            slug,
            'types': types[].type->{
                _id,
                name, 
                slug
            }
        }
    `;
    try {
        const res = await client.fetch(query, {offset: offset, limit: limit});
        return res;
    } catch (error) {
        console.error("Error fetching data: ", error);
        return null;
    }
}