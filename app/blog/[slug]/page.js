import { getPostBySlug } from '../../../lib/posts'

export default function Post({ params }){
  const post = getPostBySlug(params.slug)
  if(!post) return <div className="section container-wide">Artículo no encontrado</div>

  return (
    <article className="section">
      <div className="container-wide">
        <h1 className="heading-1">{post.title}</h1>
        <p className="muted">{post.date}</p>
        <div className="mt-6 bg-white p-6 rounded">{post.content}</div>
      </div>
    </article>
  )
}
