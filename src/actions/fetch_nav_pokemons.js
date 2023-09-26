"use server"
import { client } from "../../sanity/lib/client";

export async function fetchNavigationPokemons(num1, num2) {
    const query = `
        *[_type == "pokemon" && (number match $num1 || number match $num2)] | order(number asc)
        {
            _id,
            number,
            name,
            image,
            'slug': slug.current
        }
    `;
    try {
        const res = await client.fetch(query, {num1: num1, num2: num2});
        return res;
    } catch (error) {
        console.error("Error fetching data: ", error);
        return null;
    }
}