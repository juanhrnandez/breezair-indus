import { crearImagenOG, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
import { getPostBySlug } from '@/lib/posts';

export const alt = 'Artículo técnico · Breezair Industrial México';

export default async function Image({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return crearImagenOG({
    eyebrow: post?.category || 'Blog técnico',
    titulo: post?.title || 'Blog técnico',
    pie: post?.readTime ? `Lectura de ${post.readTime}` : undefined,
  });
}
