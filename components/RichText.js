/**
 * Renderiza los marcadores **negrita** que usan los archivos de contenido.
 *
 * Existe para que data/tecnologia.js y data/soluciones.js puedan enfatizar una
 * cifra sin meter HTML crudo en los datos —que el template mostraría literal—.
 */
export default function RichText({ text, className }) {
  const parts = String(text).split(/(\*\*[^*]+?\*\*)/g);

  return (
    <p className={className}>
      {parts.map((part, i) =>
        part.startsWith('**') && part.endsWith('**') && part.length > 4 ? (
          <strong key={i} className="font-semibold text-slate-900">
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        )
      )}
    </p>
  );
}
