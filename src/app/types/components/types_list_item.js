"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function TypesListItem(props) {
    const type = props.type;
    const pathName = usePathname();

    return (
        <div 
            className={
                `w-[calc(50%-0.25rem)] p-1 rounded border text-white text-sm 
                bg-types-${type.slug.current}-primary border-types-${type.slug.current}-secondary
                ${pathName === "/types/" + type.slug.current ? 'outline outline-types-' + type.slug.current + '-secondary' : 'outline-none'}`
            }
            key={type._id}
            >
            <Link href={`/types/${type.slug.current}`} className={`hover:underline ${pathName === "/types/" + type.slug.current ? 'font-semibold' : ''}`}>
                {type.name}
            </Link>
        </div>
    )
}