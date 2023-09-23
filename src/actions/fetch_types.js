"use server"
import { client } from "../../sanity/lib/client"

export async function fetchTypes() {
    const query = `
        *[_type == "pokemonType"] | order(_createdAt asc)
        {
            _id,
            name,
            slug
        }
    `;
    try {
        const res = await client.fetch(query);
        return res;
    } catch (error) {
        console.error("Error fetching data: ", error);
        return null;
    }
}