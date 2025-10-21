export const posts = [
  {slug:'eficiencia-energetica-industrial', title:'Eficiencia energética en enfriamiento industrial', date:'2025-10-01', summary:'Cómo reducir costos con enfriamiento evaporativo', content:'Contenido de ejemplo del artículo 1.'},
  {slug:'mantenimiento-breezair', title:'Mantenimiento y vida útil de equipos Breezair', date:'2025-08-15', summary:'Buenas prácticas de mantenimiento', content:'Contenido de ejemplo del artículo 2.'},
  {slug:'caso-exito-planta', title:'Caso de éxito: Planta industrial', date:'2025-06-20', summary:'Implementación y resultados', content:'Contenido de ejemplo del artículo 3.'}
]

export function getAllPosts(){
  return posts
}

export function getPostBySlug(slug){
  return posts.find(p=>p.slug===slug)
}
