export default function Header(props) {
    return (
        <header className="col-span-full">
            <h1 className="text-xl font-semibold border-b border-gray-400 pb-2">
                {props.title ? props.title : "Pokémon"}
            </h1>
        </header>
    )
}