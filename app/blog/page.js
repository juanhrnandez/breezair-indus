import Link from 'next/link'
import { getAllPosts } from '../../lib/posts'

export const metadata = {
  title: 'Blog - Breezair Industrial México',
  description: 'Artículos y guías sobre enfriamiento evaporativo y eficiencia energética.'
}

export default function Blog(){
  const posts = getAllPosts()
  return (
    <div>
      <section className="section">
        <div className="container-wide">
          <h1 className="heading-1">Blog</h1>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {posts.map(p=> (
              <article key={p.slug} className="p-4 bg-white rounded">
                <h3 className="font-semibold"><Link href={`/blog/${p.slug}`}>{p.title}</Link></h3>
                <p className="muted mt-2">{p.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
