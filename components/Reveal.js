'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Aparición al entrar en pantalla, sin dejar contenido invisible.
 *
 * El patrón habitual —`initial={{ opacity: 0 }}` con `whileInView`— tiene un
 * defecto que se paga caro en un sitio que vive del posicionamiento: el HTML
 * servido lleva el contenido en `opacity: 0` y sólo se vuelve visible si el
 * observador dispara. Si el JavaScript tarda, falla, o el rastreador no
 * desplaza la página, ese contenido no se ve nunca. Lo comprobamos: a viewport
 * normal, las tarjetas bajo el pliegue seguían en opacidad cero.
 *
 * Aquí el servidor entrega el contenido visible. Al montar, sólo se oculta lo
 * que está realmente fuera de pantalla, y se anima al entrar. Resultado: nada
 * parpadea, nada queda invisible, y la animación se conserva donde aporta.
 */

const EASE = [0.22, 1, 0.36, 1];

export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  y = 18,
  className,
  ...rest
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef(null);
  // `armed` sólo se activa en cliente y para elementos fuera de pantalla.
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduceMotion || typeof IntersectionObserver === 'undefined') return;

    const rect = el.getBoundingClientRect();
    const yaVisible = rect.top < window.innerHeight * 0.92;

    // Ya está a la vista al cargar: se deja como está, sin parpadeo.
    if (yaVisible) return;

    setArmed(true);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduceMotion]);

  const Tag = motion[as] ?? motion.div;

  return (
    <Tag
      ref={ref}
      className={className}
      animate={armed && !shown ? { opacity: 0, y } : { opacity: 1, y: 0 }}
      initial={false}
      transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
