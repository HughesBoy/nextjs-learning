
import Link from 'next/link'
export default async function Todos(){

  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await res.json();
  console.log(todos);


  return (
    <div>
      {todos.map((todo) => {
        return <p key={todo.id}><Link href={`todos/${todo.id}`}>{todo.title}</Link></p>
      })}

    </div>
  )
}