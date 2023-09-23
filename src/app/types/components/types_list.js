import { fetchTypes } from "@/actions/fetch_types";
import Link from "next/link";
import TypesListItem from "./types_list_item";

export default async function TypesList() {
    const types = await fetchTypes();

    return (
        <div className="col-span-8 col-start-3 sm:col-span-4 lg:col-span-3 flex flex-wrap gap-2 justify-center text-center p-4 border-2 border-gray-400 rounded-lg">
            {types.map((type) => (
                <TypesListItem key={type._id} type={type} />
            ))}
        </div>
    )
}