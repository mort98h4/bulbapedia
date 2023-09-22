import { fetchPokemons } from '@/actions/fetch_pokemons';
import PokemonListItem from './pokemon_list_item';
import { LoadMore } from './load_more';

export async function PokemonList() {
    const pokemons = await fetchPokemons(0);
    
    return (
        <ul className="grid grid-cols-12 gap-4">
            {/* {pokemons.map((pokemon) => (
                <PokemonListItem key={pokemon._id} pokemon={pokemon} />
            ))} */}
            <LoadMore pokemons={pokemons}/>
        </ul>
    )
}