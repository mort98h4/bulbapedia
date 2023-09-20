export default function Header(props) {
    return (
        <header className="p-4 sm:px-0">
            <h1 className="text-lg border-b border-gray-400 pb-2">
                {props.title ? props.title : "Pokémon"}
            </h1>
        </header>
    )
}