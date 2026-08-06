import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
      const target = e.target as HTMLElement;
      const isInteractive = !!target.closest('a, button, [role="button"], input, textarea, select');
      setHovering(isInteractive);
    };
    const onLeave = () => setVisible(false);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div
        className="pointer-events-none fixed z-[9999] hidden h-2 w-2 rounded-full bg-forest-600 mix-blend-multiply transition-transform duration-100 lg:block"
        style={{ left: pos.x, top: pos.y, transform: 'translate(-50%, -50%)' }}
      />
      <div
        className={`pointer-events-none fixed z-[9998] hidden rounded-full border-2 border-forest-500/40 mix-blend-multiply transition-all duration-300 lg:block ${hovering ? 'h-10 w-10 bg-forest-500/10' : 'h-6 w-6'}`}
        style={{ left: pos.x, top: pos.y, transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
}
