
export default async function Pokemon({params, searchParams}){
  
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
  const pokemonData = await res.json();
  console.log(pokemonData.order)
  return(
    <div className="flex border p-4">
      <h1>pokemon: {params.id}</h1>
      <h1>: {pokemonData.order} </h1>
      <h1 className="text-orange-500">: {pokemonData.name} </h1>
    </div>
  )
}