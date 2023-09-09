

import Link from "next/link";

export default async function Users(){
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json();

  return(
    <div>
      {users && users.map((user) => <p key={user.id}><Link href={`users/${user.id}`}>{user.name}</Link></p>)}
    </div>
  )
}