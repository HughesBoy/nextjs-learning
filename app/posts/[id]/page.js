
const getPost = async ({ id }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json();
  console.log(data)
  return data
}

const getPostComment = async ({ id }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
  const data = await res.json();
  return data
}

export default async function SelectedPostPage({ params }){
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  // const postData = await res.json()
  // console.log(postData)
  const getSinglePost = await getPost(params.id)
  const getSinglePostComment = await getPostComment(params.id)
  //post is singular, but comments is plural as it is an array
  const [post,comments] = await Promise.all([
    getSinglePost, 
    getSinglePostComment,
  ])
  return(
    <div>
      
      {post.body}

      <div>
        {comments.map((comment) => (
          <p key={comment.id}>{comment.body}</p>
        ))}
      </div>
    </div>
  )
}