

export default async function Todo({params}){
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
  const todo = await res.json();
  return(
    <div>
      <h1>{params.id}</h1>
      <p>{todo.title}</p>
    </div>
  )
}