import { PokemonList } from "./pokemon_list";
import Header from "./header"

export default function Page() {
    
    return (
        <section>
            <Header title="Pokémon"/>
            <PokemonList />
        </section>
        
    )
}

