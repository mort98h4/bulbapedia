"use client";
import { fetchPokemons } from "@/actions/fetch_pokemons";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import PokemonListItem from "./pokemon_list_item";

export function LoadMore(props) {
    const [pokemons, setPokemons] = useState(props.pokemons);
    const [offset, setOffset] = useState(10);
    const [loader, setLoader] = useState(true);

    const { ref, inView} = useInView();

    useEffect(() => {
        const loadMorePokemons = async () => {
            const newPokemons = (await fetchPokemons(offset));
            if (newPokemons.length === 0) {
                setLoader(false);
            } else {
                setPokemons((prevPokemons) => [...prevPokemons, ...newPokemons]);
                setOffset(offset + 10);
            }
        };
        if (inView) {
            loadMorePokemons();
        }
    }, [inView, offset]);

    

    return (
        <>
            {pokemons.map((pokemon) => (
                <PokemonListItem key={pokemon._id} pokemon={pokemon} />
            ))}
            {
                loader ? 
                <div className="col-span-full flex justify-center" ref={ref}>
                <div
                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-gray-300 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                </span>
                </div>
            </div>
                : ""
            }
            
        </>
    )
}