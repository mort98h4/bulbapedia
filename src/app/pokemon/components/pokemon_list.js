import { client } from '../../../../sanity/lib/client';
import PokemonListItem from './pokemon_list_item';

async function getData() {
    const res = await client.fetch(`*[_type == "pokemon"] | order(number asc)`);
    return res;
}

export async function PokemonList() {
    const pokemons = await getData();
    
    return (
        <ul className="grid grid-cols-12 gap-4">
            {pokemons.map((pokemon) => (
                <PokemonListItem key={pokemon._id} pokemon={pokemon} />
            ))}
        </ul>
    )
}