import { useState, useEffect, useCallback } from 'react';

/* ─────────────────────────────────────────────────────────────────────────────
   HeroCanvas — Real Photo Slideshow with Ken Burns Effect
   Uses local images: wind turbines, solar panels, open green fields
   Smooth crossfade + slow zoom/pan = cinematic hero background
───────────────────────────────────────────────────────────────────────────── */

const SLIDES = [
  { src: '/hero-wind.png', position: 'center 40%' },
  { src: '/hero-solar.png', position: 'center 50%' },
  { src: '/hero-fields.png', position: 'center 45%' },
];

const DURATION = 6000; // ms per slide
const FADE = 1500;     // ms crossfade

export default function HeroCanvas() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [fading, setFading] = useState(false);

  const advance = useCallback(() => {
    setFading(true);
    setNext((current + 1) % SLIDES.length);
    setTimeout(() => {
      setCurrent((current + 1) % SLIDES.length);
      setFading(false);
    }, FADE);
  }, [current]);

  useEffect(() => {
    const timer = setInterval(advance, DURATION);
    return () => clearInterval(timer);
  }, [advance]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#0a1628]">

      {/* Current slide */}
      <div
        key={`slide-${current}`}
        style={{
          position: 'absolute', inset: 0, zIndex: 1,
          backgroundImage: `url(${SLIDES[current].src})`,
          backgroundSize: 'cover',
          backgroundPosition: SLIDES[current].position,
          animation: `kenBurns ${DURATION + FADE}ms ease-in-out forwards`,
        }}
      />

      {/* Next slide (fading in) */}
      {fading && (
        <div
          key={`next-${next}`}
          style={{
            position: 'absolute', inset: 0, zIndex: 2,
            backgroundImage: `url(${SLIDES[next].src})`,
            backgroundSize: 'cover',
            backgroundPosition: SLIDES[next].position,
            animation: `fadeIn ${FADE}ms ease-in-out forwards`,
          }}
        />
      )}

      {/* Overlay 1: Vignette */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 55% 45%, rgba(10,22,40,0) 0%, rgba(10,22,40,0.4) 100%)',
      }} />

      {/* Overlay 2: Bottom fade */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 11, pointerEvents: 'none',
        background: 'linear-gradient(to top, rgba(10,22,40,0.6) 0%, rgba(10,22,40,0.2) 20%, rgba(10,22,40,0) 45%)',
      }} />

      {/* Overlay 3: Left fade for text */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 12, pointerEvents: 'none',
        background: 'linear-gradient(to right, rgba(10,22,40,0.5) 0%, rgba(10,22,40,0.15) 25%, rgba(10,22,40,0) 50%)',
      }} />

      {/* Overlay 4: Top fade */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 13, pointerEvents: 'none',
        background: 'linear-gradient(to bottom, rgba(10,22,40,0.4) 0%, rgba(10,22,40,0) 10%)',
      }} />
    </div>
  );
}
