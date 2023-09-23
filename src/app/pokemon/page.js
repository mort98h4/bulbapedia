import { PokemonList } from "./components/pokemon_list";
import Header from "../components/header"

export default function Page() {
    
    return (
        <section className="grid gap-4">
            <Header title="Pokémon"/>
            <PokemonList />
        </section>
    )
}

