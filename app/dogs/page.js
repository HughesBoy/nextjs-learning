import Image from "next/image"

export default async function DogPage(){
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {next: { revalidate: 0 }})
  const data = await res.json()
  console.log(data)
  
  return(
    <div>
      <Image 
        src={data.message}
        width={300}
        height={300}
        alt="dog pic random"
      />
    </div>
  )
}