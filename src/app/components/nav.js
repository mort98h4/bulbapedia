"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
    const pathName = usePathname();

    return (
      <>
        {
          pathName.includes('/studio') ?
            ""
          : 
          <nav className='w-full p-4 border-b border-b-gray-400 flex justify-center'>
            <Link href="/pokemon" className={`mx-2 text-gray-500 transition-colors hover:text-black ${pathName === '/pokemon' ? 'active' : ''}`}>Pokemons</Link>
            <Link href="/types" className={`mx-2 text-gray-500 transition-colors hover:text-black ${pathName === '/types' ? 'active' : ''}`}>Types</Link>
          </nav>
        }
      </>
    )
}