import { PokemonList } from "./components/pokemon_list";
import Header from "../components/header"

export default function Page() {
    
    return (
        <section className="grid gap-4">
            <Header title="Pokémon"/>
            <p>
                <strong>Pokémon</strong> (Japanese: ポケットモンスター <em>Pocket Monsters</em>; ポケモン <em>Pokémon</em> for short) are fictional creatures that are central to the Pokémon franchise. 
            </p>
            <PokemonList />
        </section>
    )
}

