

export default async function User({params}){
  const user = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const userData = await user.json()

  return(
    <div>
      <p>
      {userData.name}
      </p>
      <p>
      {userData.username}
      </p>
    </div>
  )
}