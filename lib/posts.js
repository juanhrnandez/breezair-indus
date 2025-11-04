import blogData from '../data/blog-posts.json'

// Obtener posts del archivo JSON
export const posts = blogData.posts

export function getAllPosts(){
  return posts
}

export function getPostBySlug(slug){
  return posts.find(p=>p.slug===slug)
}
