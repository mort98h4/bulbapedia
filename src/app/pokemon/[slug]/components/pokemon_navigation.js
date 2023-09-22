import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "../../../../../sanity/lib/image";
import { client } from "../../../../../sanity/lib/client";

async function getNavLinks(num1, num2) {
    const res = await client.fetch(`*[_type == "pokemon" && (number match $num1 || number match $num2)] | order(number asc)`, {num1: num1, num2: num2});
    return res;
}

function getSoroundingNumbers(num) {
    const prev = parseInt(num) - 1;
    const next = parseInt(num) + 1; 
    const prevNum = getNumberAsString(prev);
    const nextNum = getNumberAsString(next);
  
    return [prevNum, nextNum];
}
  
function getNumberAsString(num) {
    switch (true) {
      case num < 10:
        return "000" + num;
        break;
      case num < 100:
        return `00${num}`;
        break;
      case num < 1000:
        return `0${num}`;
        break;
      default:
        return `${num}`;
    }
}

export default async function PokemonNavigation(props) {
    const pokemon = props.pokemon;
    const soroundingNums = getSoroundingNumbers(pokemon.number);
    const navPokemons = await getNavLinks(soroundingNums[0], soroundingNums[1]);
    
    return (
        <nav 
            className={
              "col-span-full grid grid-cols-2 rounded-lg border-2 p-2"
              + " border-types-" + pokemon.types[0].name.toLowerCase() + "-secondary "
              + " bg-types-" + pokemon.types[0].name.toLowerCase() + "-primary"
            }
        >
            {navPokemons.length === 1 && parseInt(navPokemons[0].number) > parseInt(pokemon.number) ? <div></div> : "" }
            {navPokemons.map((navPoke) => (
                <div 
                    key={navPoke._id}
                    className={
                        "col-span-1 text-xs sm:text-sm flex"
                        + (parseInt(navPoke.number) > parseInt(pokemon.number) ? " justify-end" : "")
                    }
                >
                    <Link 
                        href={`/pokemon/${navPoke.name.toLowerCase()}`}
                        className="font-medium hover:underline flex items-center"
                    >
                        {parseInt(navPoke.number) < parseInt(pokemon.number) && navPoke.image !== undefined ? 
                            <span>←</span>
                            : ""
                        }

                        { 
                            navPoke.image !== undefined && parseInt(navPoke.number) < parseInt(pokemon.number) ?
                            <span className="mx-2">
                              <Image 
                                src={urlForImage(navPoke.image).url()}
                                priority={true}
                                width={30}
                                height={30}
                                sizes="(max-width: 30px) 100vw, 30px"
                                alt={pokemon.name}
                              />
                            </span>

                            : ""
                        }
                        <div className="flex flex-col sm:flex-row">
                            <span className="sm:mr-2">#{navPoke.number}</span>
                            <span>{navPoke.name}</span>
                        </div>
                        { 
                            navPoke.image !== undefined && parseInt(navPoke.number) > parseInt(pokemon.number) ?
                            <span className="mx-2">
                                <Image 
                                    src={urlForImage(navPoke.image).url()}
                                    priority={true}
                                    width={30}
                                    height={30}
                                    sizes="(max-width: 30px) 100vw, 30px"
                                    alt={pokemon.name}
                                />
                            </span>

                            : ""
                        }
                        {parseInt(navPoke.number) > parseInt(pokemon.number) ? 
                            <span>→</span>
                            : ""
                        }
                    </Link>
                </div>
            ))}
        </nav>
    )
}