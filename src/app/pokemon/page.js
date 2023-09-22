import { PokemonList } from "./pokemon_list";
import Header from "./header"

export default function Page() {
    
    return (
        <section className="grid gap-4">
            <Header title="Pokémon"/>
            <PokemonList />
        </section>
        
    )
}

