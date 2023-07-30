import Link from "next/link";
import { Suspense } from "react";


export default async function SideNavLayout({ children }) {
  

  return (
    <>
      <Suspense fallback="loading pokemon data...">
      <aside className="border w-40">
        <PokemonList />
      </aside>
      </Suspense>
      {children}
    </>
  );
}

async function PokemonList(){
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const { results : pokemon } = await res.json();
  console.log(pokemon);
  return(
   
    <ul>
      { pokemon.map(poke => 
        <li key={poke.name}>
        <button 
          className="border m-1 hover:bg-red-400"
          >{poke.name}</button>
        </li>)}
    </ul>
  )
}